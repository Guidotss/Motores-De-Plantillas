const {Router} = require('express');
const router  = Router(); 

const products = []

router.get('/',(req,res) =>{
  /*  res.render('../Views/Partials/productos.pug',{
       products
   }) */
})

router.post('/',(req,res) =>{
    const newProduct = req.body; 
    products.push(newProduct); 
    res.redirect('/')
})

module.exports = router; 
