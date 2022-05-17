const express = require('express'); 
const morgan = require('morgan'); 
const app = express(); 
const routesProductos = require('./Routes/routesProductos'); 
const handleBars = require('express-handlebars'); 



app.use(morgan('dev')); 
app.use(express.urlencoded({extended: true}));
app.use(express.static('./Views/Styles'))
app.use(express.static('./Views/Partials'))
app.use(express.json()); 
app.use('/productos',routesProductos); 
app.set('views', './Views'); 
//app.set('view engine','pug');   
//app.set('view engine','ejs')
app.set('view engine','hbs'); 


app.engine('hbs',handleBars.engine({
    extname:'.hbs',
    defaultLayout:'main.hbs',
    layoutsDir:'Views',
    partialsDir:'Views/Partials'
}))

const productos = [] 

app.get('/',(req,res) => {
    //res.render('index.pug'); 
    //res.render('index.ejs')
    res.render('main',{
        productos:productos
    }); 
}) 
app.post('/', (req,res)=>{
    const nuevoProducto = req.body; 
    productos.push(nuevoProducto); 
    res.redirect('/');
})



const PORT = 8080; 

const server = app.listen(PORT, () =>{
    console.log(`Servidor escuchando al puerto ${server.address().port}`);
})
server.on('error', err => console.log(err)); 


/*
    En lo personal me quedaria con EJS ya que es el mas rapido e intuitivo de utilizar
*/