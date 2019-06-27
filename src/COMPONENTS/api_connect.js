/*App endpoints needed
- price 
-currency
- product unique identifying item number (URL)
- manufacturer 
- vendors who are selling it 
- image

Need to search by: UPC code or item name
Michael Kors shoes (red)
*/

const request = require('request');
const API_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19hZG1pbiI6ZmFsc2UsInN1YiI6IjI2MjEiLCJpc3MiOiJkYXRhZmluaXRpIiwiZW1haWwiOiJ0YW1veWFzaG9wa2luc0BnbWFpbC5jb20ifQ.iGrS5VMMj3rtpaJlXAZxOGrgqHv--63iLQy0NTZAJ5U';
var format = 'JSON';
var upcLookUp = ["190561642822"]
var query = `upc: ${upcLookUp}`;
var num_records = 1;
var download = false;

var request_options = {
  url: 'https://api.datafiniti.co/v4/products/search',
  method: 'POST',
  json: {
    'query': query,
    'format': format,
    'num_records': num_records,
    'download': download
  },
  headers: {
    'Authorization': 'Bearer ' + API_token,
    'Content-Type': 'application/json'
  }
}

console.log(request_options);

// Make the API call.
request(request_options, function(error, response, body) {
  if (error) {
    console.log("ERROR:",error);
    console.log("RESPONSE:",response);
  } else {
    console.log("RESPONSE BODY:", body);
  }
});
