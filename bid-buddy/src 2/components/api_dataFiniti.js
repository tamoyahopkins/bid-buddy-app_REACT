/*
{num_found: 61205, total_cost: 1, records: Array(1)}
num_found: 61205
records: Array(1)
0:
asins: ["B01N2IXXUG"]
brand: "4 years and up"
categories: (14) ["Womens Bags & Accessories", "Clothing, Shoes & Jewelry", "Clothing", "Keyrings & Keychains", "Key Rings & Organizers", "Accessories", "Toys And Games", "Toys & Games", "Boys", "Bags & Accessories", "Novelty & More", "Keychains", "Novelty", "Toy"]
colors: (2) ["Multi-colored", "Multi Colored"]
dateAdded: "2017-01-12T03:09:03Z"
dateUpdated: "2019-06-27T22:08:01Z"
descriptions: [{…}]
dimension: "3 in x 0.1 in x 5.5 in"
ean: (17) ["0077764801372", "0077764801372", "0077764801372", "0077764801372", "0077764801372", "0077764801372", "0077764801372", "0077764801372", "0077764801372", "0077764801372", "0077764801372", "0077764801372", "0077764801372", "0077764801372", "0077764801372", "0077764801372", "0077764801372"]
features: (18) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
id: "AVphK56OilAPnD_x2Kez"
imageURLs: (3) ["https://images-na.ssl-images-amazon.com/images/G/0…-locale/common/transparent-pixel._V192234675_.gif", "https://www.barcodable.com/images/barcode/0077764801372.png", "https://images-na.ssl-images-amazon.com/images/I/31pYhM0IzxL._SS40_.jpg"]
keys: (5) ["077764801372", "disneykingdomheartsoblivionbladepewterkeyring/b01n2ixxug", "4yearsup/80137", "0077764801372", "monograminternational/80137"]
manufacturer: "Monogram International"
manufacturerNumber: "80137"
merchants: (3) [{…}, {…}, {…}]
name: "Disney Kingdom Hearts Oblivion Blade Pewter Key Ring"
prices: Array(6)
0: {amountMax: 6.06, amountMin: 6.06, availability: "true", currency: "USD", dateSeen: Array(1), …}
1: {amountMax: 5.44, amountMin: 5.44, availability: "true", currency: "USD", dateSeen: Array(1), …}
2: {amountMax: 5.5, amountMin: 5.5, availability: "Out Of Stock", condition: "New", currency: "USD", …}
3: {amountMax: 11.99, amountMin: 7.27, availability: "true", currency: "USD", dateSeen: Array(1), …}
4: {amountMax: 6.18, amountMin: 6.18, availability: "In Stock", condition: "New", currency: "USD", …}
5: {amountMax: 9.98, amountMin: 9.98, condition: "new", currency: "USD", dateSeen: Array(1), …}
length: 6
__proto__: Array(0)
primaryCategories: ["Apparel & Accessories"]
primaryImageURLs: ["https://images-na.ssl-images-amazon.com/images/I/71HcTDzd7iL._SL1500_.jpg"]
quantities: (3) [{…}, {…}, {…}]
reviews: (14) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
sizes: ["One Size"]
sourceURLs: (4) ["https://www.walmart.com/ip/Kingdom-Hearts-Oblivion-Pewter-Key-Ring/143328944", "http://www.walmart.com/ip/Kingdom-Hearts-Oblivion-Pewter-Key-Ring/143328944", "https://www.amazon.com/dp/B01N2IXXUG", "https://www.amazon.com/product-reviews/B01N2IXXUG"]
upc: ["077764801372"]
weight: "0.8 ounces"
__proto__: Object
length: 1
__proto__: Array(0)
total_cost: 1
__proto__: Object
*/

var request = require('request');

// Set your API parameters here.
var API_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19hZG1pbiI6ZmFsc2UsInN1YiI6IjI2MjEiLCJpc3MiOiJkYXRhZmluaXRpIiwiZW1haWwiOiJ0YW1veWFzaG9wa2luc0BnbWFpbC5jb20ifQ.iGrS5VMMj3rtpaJlXAZxOGrgqHv--63iLQy0NTZAJ5U';
var format = 'JSON';
// let upcNum = 190561642822
// var query = `upc:${upcNum}`;

var query = 'upc:190561642822';
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
    console.log(error);
    console.log(response);
  } else {
    console.log(body);
  }
});