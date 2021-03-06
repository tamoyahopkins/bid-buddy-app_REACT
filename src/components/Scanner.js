import React, { Component, Fragment } from 'react'
import Quagga from 'quagga'
import './Scanner.css'

class Scanner extends Component {

  constructor(props){
    super(props);
    this.state ={
      nocamera: false
    }
    this.onDetect = this.onDetect.bind(this)
  }

  
  componentDidMount(){
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        constraints: {
          width: '790',
          height: '490'
        },
        numberOfWorkers: navigator.hardwareConcurrency,
        target: document.querySelector('#barcodeScan')
      },
      locate: true,
      decoder: {
        readers: [ "upc_reader", "upc_e_reader"]
      }
    }, function (err) {
      if (err) {
        return 
      }
      Quagga.start()
    })
    Quagga.onDetected(this.onDetect)
    
  }

  onDetect(res){
    // console.log(res.codeResult.code)
    Quagga.stop()
    Quagga.offProcessed()
    this.props.onBarcodeDetect(res.codeResult.code)
    console.log(res.codeResult)
  }


  render() {
    return (
      <Fragment>
            <div id="barcodeScan"></div>
      </Fragment>
    )
  }
}

export default Scanner

//test