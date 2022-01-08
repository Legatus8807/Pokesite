const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Pokesite');

const PokeSchema = mongoose.Schema({
    name: { type: String },
    type1: { type: String },
    type2: { type: String },
    hp: { type: Number },
    atk: { type: Number },
    def: { type: Number },
    spA: { type: Number },
    spD: { type: Number },
    spe: { type: Number }

});

module.exports = mongoose.model('Pokemons', PokeSchema);

