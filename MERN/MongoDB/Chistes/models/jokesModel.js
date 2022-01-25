var mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

var JokeSchema = mongoose.Schema({
    setup: {type: String},
    punchline: {type: String}
  });

  module.exports = mongoose.model('broma', JokeSchema);
