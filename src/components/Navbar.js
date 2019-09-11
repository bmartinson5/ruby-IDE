import React, {Component} from 'react';
import '../css/Navbar.css';

class Navbar extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="navbar">
        <div className="navbar-items">
          <div className="logo">
            Code Wars
          </div>
          <div className="navbar-item">

          </div>
          <div className="navbar-item">
            
          </div>
          <div className="navbar-item">
            Sign In
          </div>
        </div>

      </div>
    );
  }
}

export default Navbar;
