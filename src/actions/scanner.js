
export const processBarcode = (upcNum) => {
  return dispatch => {
 // let url = URL_PATH + barcode + URL_EXTENSION + APIKEY
    let params = upcNum
    let url = `https://api.upcitemdb.com/prod/trial/lookup?upc=${params}`
    let req = new Request(url , {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      },
      mode: 'no-cors'
    })
    
    let product = null
    fetch(req)
    .catch(err => console.log('error', err))
    .then(res => {
      console.log(res.status)
      if(res.status !== 200){
        return {
          resStatus: res.status
        }
      } else if(res.status === 200) {
        return res.json()
      }
    })
    .then(parsedRes => {
      if(parsedRes.resStatus !== 200){
        parsedRes.resStatus === 0 ? dispatch(invalidBarcode('noAPI')) : dispatch(invalidBarcode('invalid'))
      } else {
        product = {
          barcode_number: parsedRes.products[0].barcode_number,
          barcode_type: parsedRes.products[0].barcode_type,
          product_name: parsedRes.products[0].product_name,
          product_image: parsedRes.products[0].images[0],
          manufacturer: parsedRes.products[0].manufacturer,
          brand: parsedRes.products[0].brand,
          category: parsedRes.products[0].category,
          description: parsedRes.products[0].description,
        }
        dispatch(productDetected(product))
      } 
    })
  }
  }

export const getUpc = (code) => {
  if(isNaN(code.text) === true) {
  return dispatch => {
    let itemName = code.text
    //url info
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    let url = `https://api.datafiniti.co/v4/products/search`
    //datafinity variables
    const API_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19hZG1pbiI6ZmFsc2UsInN1YiI6IjI2MjEiLCJpc3MiOiJkYXRhZmluaXRpIiwiZW1haWwiOiJ0YW1veWFzaG9wa2luc0BnbWFpbC5jb20ifQ.iGrS5VMMj3rtpaJlXAZxOGrgqHv--63iLQy0NTZAJ5U';
    const format = 'JSON';
    const query = `name:${itemName}`
    const num_records = 1;
    const download = false;

  let req = new Request( proxyurl + url , {
    //hostname: 'api.upcitemdb.com',
    method: 'POST',
    // json: {
    // "query":  JSON.stringify(query),
    // "format": JSON.stringify(format),
    // "num_records": JSON.stringify(num_records),
    // "download": JSON.stringify(download)
    // },
    body: JSON.stringify({
       query: query,
       num_records: 1
    }),
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + API_token
      // 'Access-Control-Allow-Origin': '*',
    }
  })
  let product = null
  fetch(req)
  .catch(err => console.log('error', err))
  .then(res => {
    console.log(res.status)
    if(res.status !== 200){
      return {
        resStatus: res.status
      }
    } else if(res.status === 200) {
      // console.log(res)
      return res.json()
      
    }
  })
  .then(parsedRes => {
    console.log(parsedRes)
    if(parsedRes.resStatus !== 200){
      parsedRes.resStatus === 0 ? dispatch(invalidBarcode('noAPI')) : dispatch(invalidBarcode('invalid'))
    } else {
      product = parsedRes
      dispatch(productDetected(product))
    }
  })
  }
}else {
    return dispatch => {
      let params = code.text;
      console.log(params)
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    let url = `https://api.upcitemdb.com/prod/trial/lookup?upc=${params}`
      
    let req = new Request( proxyurl + url , {
      //hostname: 'api.upcitemdb.com',
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      //mode: 'no-cors'
    })
    
    let product = null
    fetch(req)
    .catch(err => console.log('error', err))
    .then(res => {
      console.log(res.status)
      if(res.status !== 200){
        return {
          resStatus: res.status
        }
      } else if(res.status === 200) {
        // console.log(res)
        return res.json()
        
      }
    })
    .then(parsedRes => {
      console.log(parsedRes)
      if(parsedRes.resStatus !== 200){
        parsedRes.resStatus === 0 ? dispatch(invalidBarcode('noAPI')) : dispatch(invalidBarcode('invalid'))
      } else {
        product = parsedRes
        dispatch(productDetected(product))
      }
    })
    }
}

}

export const productDetected = (product) => {
  return {
    type: 'PRODUCT_DETECTED',
    payload: product
  }
}

export const invalidBarcode = (err) => {
  let errText = err === 'noAPI' ? 'NO_API_KEY' : 'INVALID_BARCODE'
  return {
    type: errText,
  }
}
//test