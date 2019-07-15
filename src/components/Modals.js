import {Component} from "react"
// const appRoot = document.getElementById('root');
const ReactDOM = require('react-dom');
const modalRoot = document.getElementById('modal-root');

//modal structure
class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {modalRoot.appendChild(this.el);}
  componentWillUnmount() {modalRoot.removeChild(this.el);}
  render() {
     return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

// ReactDOM.render(<App />, appRoot);
export default Modal; 
