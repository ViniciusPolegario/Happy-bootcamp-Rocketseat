//import dependency
const express = require('express');
const path = require('path');
const pages =require('./pages');

// init express
const server = express();
server
.use(express.static('public'))

//config template engine

.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

//create a route
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)


//turn on the server
server.listen(5500)

