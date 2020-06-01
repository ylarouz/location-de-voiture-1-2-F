var express = require('express');
var router = express.Router();
const fs = require('fs');

const data = fs.readFileSync('inscription.json');
let json = JSON.parse(data);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vit');
});
router.get('/in', function(req, res, next) {
  res.render('in');
});
router.get('/res/:nom', function(req, res, next) {
  let nom = req.params.nom
  res.render('res',{json,nom,produit});
});
router.get('/login', function(req, res, next){
  res.render('login');
});

router.post('/in', function(req, res, next){
  let {nom,email,password} = req.body;
  let ne = {id:json.length+1,
            nom,
            email,
            password,
  };
  json.push(ne);
  const data =JSON.stringify(json,null,5);
  fs.writeFileSync('inscription.json', data, 'utf-8');
  res.redirect('/');
   
});
//start ajouter produit 
const  dataa = fs.readFileSync('produit.json');
let produit = JSON.parse(dataa);


router.post('/pro', (req, res) => {
  
     
  const { image, marque, prix } = req.body;
  const { masque } = req.body;

  
  let newprod = {
    id:produit.length + 1,
    image,
    marque,
    prix
    
  };

  produit.push(newprod);

  // saving the array in a file
  const dataaa = JSON.stringify(produit,null,5);
  fs.writeFileSync('produit.json', dataaa, 'utf-8');
    

  res.redirect('/res/'+masque);
});
// end ajout voiture 

//start supprimer 
router.get('/res/:id/:nom', (req, res) => {
  produit = produit.filter(d => d.id != req.params.id);
  const  masque = req.params.nom;

  // saving data
  const data = JSON.stringify(produit);
  fs.writeFileSync('produit.json', data, 'utf-8');

  res.redirect('/res/'+masque);
  });
  // end supprime 

  // start reno 
router.get('/renome',(req, res, next)=>{
  res.render('renome');
});
router.post('/renome',(req, res, next)=>{
  console.log(req.body);
  const id = req.body.id;
  const {nom,password} = req.body;
  json.forEach((inscription, i) => {
    if (inscription.id == id) {
      inscription.nom = nom,
      inscription.password = password;
    }
  });
    const data = JSON.stringify(json,null,5);
    fs.writeFileSync('inscription.json', data, 'utf-8');  
    res.redirect('/login');
      
    
  
});
router.get('/reservation/:id/:nom',(req, res,)=>{
  let nom = req.params.nom;
  let imageId = req.params.id;
  res.render('reserve',{json,nom,produit,imageId});
});
module.exports = router;
