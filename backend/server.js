/*eslint no-console: 0*/
"use strict";

var cfenv = require("cfenv");
var appEnv = cfenv.getAppEnv();
var dbServiceConf = appEnv.getService('postgre-db');
console.log(dbServiceConf);

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

var pg = require('pg');

const pool = new pg.Pool({
	user: dbServiceConf.credentials.username,
	host: dbServiceConf.credentials.hostname,
	database: dbServiceConf.credentials.dbname,
	password: dbServiceConf.credentials.password,
	port: dbServiceConf.credentials.port
});

app.get('/users', function(req, res){
	pool.query("SELECT * FROM users", (dberr, dbres) => {
		//console.log(dberr, dbres);
		res.status(200).send(dbres.rows);
	});
});

app.get('/', function(req, res){
	res.end('Working');
});

app.get('/create', function(req, res){
	
	pool.query("CREATE TABLE users(id SERIAL PRIMARY KEY, firstname VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL)", (dberr, dbres) => {
		console.log(dberr, dbres);
	
		pool.query(`INSERT INTO users (firstname, lastname) VALUES ('user1', 'pass1');`, (dberr1, dbres1) => {
			console.log(dberr1, dbres1);
		});
		
		pool.query(`INSERT INTO users (firstname, lastname) VALUES ('user2', 'pass2');`, (dberr2, dbres2) => {
			console.log(dberr2, dbres2);
		});	
	});

	res.end('OK');
});

app.listen(port, () => console.log(`Backend app listening on port ${port}!`));