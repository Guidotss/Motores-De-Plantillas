const {Router} = require('express');
const { builtinModules } = require('module');
const router  = Router(); 

router.get('/',(req,res) =>{
    res.json({mensaje: 'hola'}); 
})









module.exports = router; 