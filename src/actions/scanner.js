// export const startScanning = () => {
//     return {
//       type: "START_SCANNING"
//     }
//   }

//   export const spinnerOn = () => {
//     return {
//       type: 'SPINNER_ON'
//     }
//   }

// export const processBarcode = (barcode) => {
//     return dispatch => {
//     //   dispatch(spinnerOn())
      
//       let url = URL_PATH + barcode + URL_EXTENSION + APIKEY
      
//       let req = new Request(url , {
//         headers: {
//           'Access-Control-Allow-Origin': 'http://localhost:3000'
//         },
//         mode: 'no-cors'
//       })
      
//       let product = null
//       fetch(req)
//       .catch(err => console.log('error', err))
//       .then(res => {
//         console.log(res.status)
//         if(res.status !== 200){
//           return {
//             resStatus: res.status
//           }
//         } else if(res.status === 200) {
//           return res.json()
//         }
//       })
//       .then(parsedRes => {
//         if(parsedRes.resStatus !== 200){
//           parsedRes.resStatus === 0 ? dispatch(invalidBarcode('noAPI')) : dispatch(invalidBarcode('invalid'))
//         } else {
//           product = {
//             barcode_number: parsedRes.products[0].barcode_number,
//             barcode_type: parsedRes.products[0].barcode_type,
//             product_name: parsedRes.products[0].product_name,
//             product_image: parsedRes.products[0].images[0],
//             manufacturer: parsedRes.products[0].manufacturer,
//             brand: parsedRes.products[0].brand,
//             category: parsedRes.products[0].category,
//             description: parsedRes.products[0].description,
//           }
//           dispatch(productDetected(product))
//         } 
//       })
//     }
//     }

//     export const productDetected = (product) => {
//         return {
//           type: 'PRODUCT_DETECTED',
//           payload: product
//         }
//       }


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

//example for query by search
// https://api.upcitemdb.com/prod/trial/search?s=Apple%20iPhone%206%2C%20Space%20Gray%2C%2064%20GB%20(T-Mobile)&match_mode=0&type=product
export const getUpc = (code) => {
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
    console.log(parsedRes.items[0].brand)
    product = {
      image: parsedRes.items[0].images[0],
      upc: parsedRes.items[0].upc,
      name: parsedRes.items[0].title,
      brand : parsedRes.items[0].brand,
      lowest_recorded_price: parsedRes.items[0].lowest_recorded_price,
      highest_recorded_price: parsedRes.items[0].highest_recorded_price,
      description : parsedRes.items[0].description
    }
    dispatch(productDetected(product))
  })
}
}

  // if(parsedRes.resStatus !== 200){
  //   parsedRes.resStatus === 0 ? dispatch(invalidBarcode('noAPI')) : dispatch(invalidBarcode('invalid'))
  // } else {

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