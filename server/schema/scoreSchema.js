var mongoose = require('mongoose')
var Schema = mongoose.Schema

var scoreSchema = new Schema ({
      1: {type: Number}
   ,  2: {type: Number}
   ,  3: {type: Number}
   ,  4: {type: Number}
   ,  5: {type: Number}
   ,  6: {type: Number}
   ,  8: {type: Number}
   ,  9: {type: Number}
   ,  10: {type: Number}
   ,  11: {type: Number}
   ,  12: {type: Number}
   ,  13: {type: Number}
   ,  14: {type: Number}
   ,  15: {type: Number}
   ,  16: {type: Number}
   ,  17: {type: Number}
   ,  18: {type: Number}
})
module.exports = mongoose.model('score', scoreSchema)