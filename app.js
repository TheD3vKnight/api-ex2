let express = require('express')
let assert = require('assert')
let MongoClient = require('mongodb').MongoClient
let devices = require('./devices.json')

let app = express()

let db

MongoClient.connect('mongodb://TheDevLight:L!ghtf00t91@ds041678.mlab.com:41678/devices', (err, client) => {
  if (err) return console.log(err)
  db = client.db('devices')

 /*
  let col = db.collection('device-info');
  col.insertMany(devices, function(err, r) {
    console.log('info posted')
  })
*/

})

app.get('/', (req, res) => {
    let cursor =  db.collection('device-info')
    cursor.find().toArray( (err, data) => { 
    res.json(data)

    })

    //console.log(JSON.stringify(cursor))
})


let port = process.env.PORT || 3000
app.listen( port, () => {
  console.log("Listening on port" + port)
})
