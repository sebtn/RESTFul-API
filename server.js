/*Setup*/
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var Bear = require('./models/bear.js')

/* body parser used for POST requests */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 3000 

var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o')

/*Routes API*/
var router = express.Router()

/*Middleware for all requests*/
router.use(function(req, res, next) {
  console.log('Something is here!')
  next()
})

/*Route Test*/
router.get('/', function(req, res) {
  res.json({ message:'Hi, welcome to API' })
})

/*Register*/
app.use('/api', router)

/*Start server*/
app.listen(port)
console.log('Express is now running port: ' + port)