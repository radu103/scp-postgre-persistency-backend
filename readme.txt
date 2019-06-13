Steps :
- In cockpit create Postgre SQL service instance named 'postgre-db' (Cloud Foundry)
- In Web-IDE 
	- Create MTA
	- Create Node.Js module
	- mta.yml : require the existing cf service instance to the new Node.Js module
	- Build whole app
	- Run in web ide
	- Deploy the app (cf deploy the mtar file. remember CF CLI MTAR https://github.com/cloudfoundry-incubator/multiapps-cli-plugin.

To open tunnel to service instance of persistency service Postgres:
https://help.sap.com/viewer/6be7ed96ddeb4e158c2107c434142545/Cloud/en-US/7547876937594510aa13cfaf693d07b1.html

0. cf allow-space-ssh SPACE_NAME
1. cf service SERVICE_NAME
2. open service dashboard link
3  cf enable-ssh APP_NAME
4. cf restart APP_NAME
5. cf ssh APP_NAME -L 5432:SERVICE_INSTANCE_HOSTNAME:SERVICE_INSTANCE_PORT

How to bind the backend to frontend :
- on the backend module, require the db module for persistence
- on the backend module, be sure that provides and api name with properties url : ${default-url}
- on the frontend module, require the backend module
- on the frontend, edit the xs-app.json (configuration file for the approuter) add the router for the backend destination (the name of the destination is exactly the name of the api provided by the backend module)

Example of Postgres credentials :
{
	"hostname": "10.11.241.16",
	"ports": {
		"5432/tcp": "51667"
	},
	"port": "51667",
	"username": "o8qmhdqNjK9VVqGk",
	"password": "zd-EfRdX8ZiWYjol",
	"dbname": "oJ6FhnZTSlKW49sk",
	"uri": "postgres://o8qmhdqNjK9VVqGk:zd-EfRdX8ZiWYjol@10.11.241.16:51667/oJ6FhnZTSlKW49sk",
	"end_points": [
		{
			"network_id": "SF",
			"host": "10.11.241.16",
			"port": "51667"
		}
	]
{
	"hostname": "10.11.241.16",
	"ports": {
		"5432/tcp": "51667"
	},
	"port": "51667",
	"username": "o8qmhdqNjK9VVqGk",
	"password": "zd-EfRdX8ZiWYjol",
	"dbname": "oJ6FhnZTSlKW49sk",
	"uri": "postgres://o8qmhdqNjK9VVqGk:zd-EfRdX8ZiWYjol@10.11.241.16:51667/oJ6FhnZTSlKW49sk",
	"end_points": [
		{
			"network_id": "SF",
			"host": "10.11.241.16",
			"port": "51667"
		}
	]
}
