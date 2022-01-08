var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Pokemons = require('../models/pokeSchema');
const axios = require('axios').default;
mongoose.connect('mongodb://localhost/Pokesite')
  .then(() => {
    console.log('connected to database');
  }).catch(() => {
    console.log('Did not connect to database');
  });

//Getting API data
router.get('/bulbasaur', (req, res, next) => {
  const pokeNameInput1 = 'bulbasaur';
  axios.get('https://pokeapi.co/api/v2/pokemon/' + pokeNameInput1)
    .then((response) => {
      
      //console.log(response.data.stats)

      const bulba1 = new Pokemons({
        name: (response.data.name[0].toUpperCase() + response.data.name.slice(1)),
        type1: (response.data.types[0].type.name[0].toUpperCase()
          + response.data.types[0].type.name.slice(1)),
        type2: (response.data.types[1].type.name[0].toUpperCase()
          + response.data.types[1].type.name.slice(1)),
        hp: response.data.stats[0].base_stat,
        atk: response.data.stats[1].base_stat,
        def: response.data.stats[2].base_stat,
        spA: response.data.stats[3].base_stat,
        spD: response.data.stats[4].base_stat,
        spe: response.data.stats[5].base_stat

      });

      bulba1.save();
     
      res.render('bulbasaur.pug', {Pokemons: bulba1});
      //res.redirect('/pokemon/bulbasaur');

    }).catch((error) => {
      console.log(error);
      if(error) {
        res.status(404);
        console.log(error);
        return;
      }
    });
    //res.redirect('/pokemon/bulbasaur');
   // res.location('/pokemon/bulbasaur')
});


router.get('/charmander', (req, res, next) => {
  const pokeNameInput2 = 'charmander';
  axios.get('https://pokeapi.co/api/v2/pokemon/' + pokeNameInput2)
    .then((response) => {
      
      //console.log(response.data.stats)

      const char1 = new Pokemons({
        name: (response.data.name[0].toUpperCase() + response.data.name.slice(1)),
        type1: (response.data.types[0].type.name[0].toUpperCase()
          + response.data.types[0].type.name.slice(1)),
        hp: response.data.stats[0].base_stat,
        atk: response.data.stats[1].base_stat,
        def: response.data.stats[2].base_stat,
        spA: response.data.stats[3].base_stat,
        spD: response.data.stats[4].base_stat,
        spe: response.data.stats[5].base_stat

      });

      char1.save();
     
      res.render('charmander.pug', {Pokemons: char1});

    }).catch((error) => {
      console.log(error);
      if(error) {
        res.status(404);
        console.log(error);
        return;
      }
    });
});

router.get('/squirtle', (req, res, next) => {
  const pokeNameInput3 = 'squirtle';
  axios.get('https://pokeapi.co/api/v2/pokemon/' + pokeNameInput3)
    .then((response) => {
      
      //console.log(response.data.stats)

      const squirt1 = new Pokemons({
        name: (response.data.name[0].toUpperCase() + response.data.name.slice(1)),
        type1: (response.data.types[0].type.name[0].toUpperCase()
          + response.data.types[0].type.name.slice(1)),
        hp: response.data.stats[0].base_stat,
        atk: response.data.stats[1].base_stat,
        def: response.data.stats[2].base_stat,
        spA: response.data.stats[3].base_stat,
        spD: response.data.stats[4].base_stat,
        spe: response.data.stats[5].base_stat

      });

      squirt1.save();
     
      res.render('squirtle.pug', {Pokemons: squirt1});

    }).catch((error) => {
      console.log(error);
      if(error) {
        res.status(404);
        console.log(error);
        return;
      }
    });
});

//Posting API data to mongodb
router.post('/bulbasaur', (req, res, next) => {
  const pokeNameInput = 'bulbasaur';
  axios({
    method: 'get',
    url: ('https://pokeapi.co/api/v2/pokemon/' + pokeNameInput),
    responseType: 'json'
  })
    .then((response) => {

      const bulba1 = new Pokemons({
        name: response.data.name,
        type1: response.data.types[0].type.name,
        type2: response.data.types[1].type.name,
        hp: response.data.stats[0].base_stat,
        atk: response.data.stats[1].base_stat,
        def: response.data.stats[2].base_stat,
        spA: response.data.stats[3].base_stat,
        spD: response.data.stats[4].base_stat,
        spe: response.data.stats[5].base_stat

      });


      bulba1.save().then((createdMon) => {
        res.status(201).json({
          message: "Pokemon added",
          pokeId: createdMon._id
        });
      });
    }).catch((error) => {
      console.log(error);
      res.status(404);
      return;
    });
    //next();
});

router.post('/charmander', (req, res, next) => {
  const pokeNameInput = 'charmander';
  axios({
    method: 'get',
    url: ('https://pokeapi.co/api/v2/pokemon/' + pokeNameInput),
    responseType: 'json'
  })
    .then((response) => {

      const char1 = new Pokemons({
        name: response.data.name,
        type1: response.data.types[0].type.name,
        type2: response.data.types[1].type.name,
        hp: response.data.stats[0].base_stat,
        atk: response.data.stats[1].base_stat,
        def: response.data.stats[2].base_stat,
        spA: response.data.stats[3].base_stat,
        spD: response.data.stats[4].base_stat,
        spe: response.data.stats[5].base_stat

      });


      char1.save().then((createdMon) => {
        res.status(201).json({
          message: "Pokemon added",
          pokeId: createdMon._id
        });
      });
    }).catch((error) => {
      console.log(error);
      res.status(404);
      return;
    });
    //next();
});


module.exports = router;
