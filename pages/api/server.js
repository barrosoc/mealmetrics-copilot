// create a server with express and make the default 8080

const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'));

// listen to the port
app.listen(port);
console.log(`App running on http://localhost:${port}`);

// run the server with node server.js
// open the browser and go to http://localhost:8080
// you should see the message Hello World!

