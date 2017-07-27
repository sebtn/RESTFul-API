/*Setup*/
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var Bear = require('./models/bear.js')

/* body parser used for POST requests */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 3300 

var mongoose   = require('mongoose');
// mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o')
mongoose.connect('mongodb://localhost:/api/api') // create db

/*Routes API*/
var router = express.Router()

/*-----------------------------------------------------*/
/*Middleware for all requests*/
router.use(function(req, res, next) {
  console.log('Something is here!')
  next()
})

/*API
/*-----------------------------------------------------
* localhost/api/bear
*/
router.route('/bears')

/*-----------------------------------------------------*/
/*Create a bear*/
  .post(function(req, res) {
    var bear = new Bear()
    bear.name = req.body.name // create name prop

    bear.save(function(err) {
      if (err) { res.send(err) }
      res.json({message: 'Bear Created!'})
    })
  })
  
/*-----------------------------------------------------*/
/*Get all bears*/
  .get(function(req, res) {
    Bear.find(function(err, bears) {
      if (err) { res.send(err) }
      res.json(bears)
    })
  })

/*-----------------------------------------------------*/
/*Route Test*/
router.get('/', function(req, res) {
  res.json({ message:'Hi, welcome to API' })
})

/*Register*/
app.use('/api', router)

/*Start server*/
app.listen(port)
console.log('Express is now running port: ' + port)