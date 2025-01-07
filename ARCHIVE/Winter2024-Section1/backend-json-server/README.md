# JSON-Server

A backend placeholder that allows us to make fetch requests for different http methods

In this course we focus on client side javascript but it helps to have a backend that allows us to 

Note about this api
	- normally you would do this with a backend framework that you would need to deploy on a server.
		- .net for c#
		- flask or django for python
		- express for server side javascript.
	- there are always platforms as a service that you can use that take of a lot the details this like firebase.

# How to use this.

You'll need a separate terminal to use this. The command shown below is an on going task so DON'T CANCEL THE TASK. This will be shown with your instructor.

## Install in this folder

1. Download this project and install the dependencies.
run the following in your terminal.

npm install

2. in the folder you can run the database file given or in future projects 
run the following command in your terminal.

npx json-server --watch db.json

OR

npx json-server --watch <name of json file>


NOTE:
For other examples a db.json provide you with a json file and you'd need to copy in 

## Installing json server globally.

You can install json server globally by entering the following command.

npm install -g json-server


# Making Fetch Requests to this server.

This server is loaded on your local computer on port 3000.

you can use the following to test with this server (if it's not working ensure your local server, shown above is running.) in the console or javascript of any of our projects.

Example Test:
```js
const BASE_URL = 'http://127.0.0.1:3000'
fetch(`${BASE_URL}/posts`)
  .then((response)=> {
    return response.json()
  }).then((postsData)=> {
    console.log(postsData)
  })
```
