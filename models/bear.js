const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const BearSchema = new Schema({
  name: String
})

const bearClass = mongoose.model("Bear", BearSchema)

module.exports = bearClass