// import React, {Component} from "react"
// // const appRoot = document.getElementById('root');
// const ReactDOM = require('react-dom');
// const modalRoot = document.getElementById('modal-root');

// //modal structure
// class Modal extends Component {
//   constructor(props) {
//     super(props);
//     this.el = document.createElement('div');
//   }
//   componentDidMount() {modalRoot.appendChild(this.el);}
//   componentWillUnmount() {modalRoot.removeChild(this.el);}
//   render() {
//      return ReactDOM.createPortal(
//       this.props.children,
//       this.el,
//     );
//   }
// }



// class Modal1 extends Component {
//   state = {showModal: false};
  
//   handleShow = ()=> {
//     this.setState({showModal: true });
//   }
//   handleClose = ()=> {
//     let newShowModal = !this.state.showModal
//     this.setState({showModal: newShowModal }); 
//   }
//   render() {
//     return (
//       <Modal>
//           <div className="modal">
//             <img class="modal_clientLogo" src="https://s3-media4.fl.yelpcdn.com/bphoto/KImy2lcnme23Q8jeUQ7s_A/ls.jpg" ></img>
//             <div class="modal_userForm">
//               <form onSubmit={this.handleClose} id="modal_Form">
//                 <label>Listed Price: </label>
//                 <input></input>
//                 <label>Enter Bid Amount:</label>
//                 <input></input>
                
//                 <h3>Payment Details</h3>
//                 <label>Payee Name:</label>
//                 <input></input>
//                 <label>Card Number:</label>
//                 <input></input>
//                 <label>Expiration Date:</label>
//                 <input></input>
//                 <label>CBD:</label>
//                 <input></input>
//                 <hr></hr>
//                 <button type="submit">Confirm Bid!</button>
//               </form>
//             </div>
//           </div>
//         </Modal>
//     );
//   }
// }

// // ReactDOM.render(<App />, appRoot);
// export default Modal1; 
