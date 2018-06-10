const express = require('express');
const hbs = require('hbs');
const app = express();
require('./hbs/helpers');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');

app.get('/',  (req, res) =>{
  //res.send('Hello World')
  // let salida = {
  //   nombre: 'Wilmer',
  //   edad: 35,
  //   url: req.url
  // };
  //res.send(salida);
  res.render('home',{
    nombre: 'Wilmer yeahh lope'
  });
})

app.get('/about',  (req, res) =>{
  res.render('home',{
    nombre: 'Wilmer'
  });
})


app.listen(port,()=>{
  console.log(`escuchando puerto ${ port }`);
})
