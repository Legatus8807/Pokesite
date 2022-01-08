var express = require('express');
var router = express.Router();
const got = require('got');
const stream = require('stream');
const P = require('pokedex-promise-v2');
const axios = require('axios').default;
const fs = require('fs');
const Pokemons = require('../models/pokeSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


/*
router.get('/pokemon/bulbasaur', (req, res, next) => {
  const pokeNameInput = 'bulbasaur';
  axios.get('https://pokeapi.co/api/v2/pokemon/' + pokeNameInput)
    .then((response) => {
      
      console.log(response.data.stats)

      var bulba1 = new Pokemons({
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

      //bulba1.save();
     
      res.render('bulbasaur.pug', {Pokemons: bulba1});

    }).catch((error) => {
      console.log(error);
      if(error) {
        res.status(404);
        console.log(error);
        return;
      }
    });
  });
*/

module.exports = router;
