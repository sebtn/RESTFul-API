var express = require('express')
var app = express()
var bodyParser = require('body-parser')

/* body parser used for POST requests */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 3000 

/*Routes API*/
var router = express.Router()

router.get('/', function(req, res) {
  res.json({ message:'Hi, welcome to API' })
})

app.use('/api', router)
app.listen(port)
console.log('Express is now running port: ' + port)