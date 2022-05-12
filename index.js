const { error } = require('console');
const express = require('express'); 
const morgan = require('morgan'); 
const app = express(); 
const routesProductos = require('./Routes/routesProductos'); 


app.use(morgan('dev')); 
app.use(express.urlencoded({extended: true}));
app.use(express.json()); 
app.use('/productos',routesProductos); 



const PORT = 8080; 

const server = app.listen(PORT, () =>{
    console.log(`Servidor escuchando al puerto ${server.address().port}`);
})
server.on('error', err => console.log(err)); 