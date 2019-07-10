
const https = require('https')

let upcNum = 190561642822
let upcNumJson = JSON.stringify(upcNum)
let lookupObject = { upc: upcNumJson} 
let lookupObjectJSON = JSON.stringify(lookupObject) //correctr syntax for object, now .write() requires this whole obj to be in a string
console.log(lookupObjectJSON)


var opts = {
  hostname: 'api.upcitemdb.com',
  path: '/prod/trial/lookup',
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
  }
}
var req = https.request(opts, function(res) {
  console.log('statusCode: ', res.statusCode);
  console.log('headers: ', res.headers);
  res.on('data', function(d) {
    console.log('BODY: ' + d);
  })
})
req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
})
req.write(`${lookupObjectJSON}`)
req.end()

//to finish moving api data to obj on local on the page 
function moveData (dataObject){
    let tempProdArray= {}
    let prodQueryResults = {
        prodName: dataObject.prodName, 
        prodImageLocationArr: dataObject.primaryImageURLs, 
        prodColorsArr: dataObject.prodColors, 
        prodDescriptionArr: dataObject.descriptions, 
        prodUPCArr: dataObject.upc, 


    }
    


}
//test
    
