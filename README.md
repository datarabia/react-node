To use this example, pull down the source code in git then.
(1) run npm install in the root directory
Now cd into react-app dir and run npm install again
cd back to root directory and run npm start.
In another command window cd to the react-app directory and also run npm start.
You will now have the nodejs server running on port 8080 and the react server running on port 3000.  
The key that ties the two together is the   "proxy": "http://localhost:8080" line in the react project's package.json file.  This redirects calls to the node port.
