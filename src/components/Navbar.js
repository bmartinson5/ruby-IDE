import React, {Component} from 'react';
import '../css/Navbar.css';

class Navbar extends Component {
  constructor(props){
    super(props)
            //<a href="#" onClick={() => this.props.changePage("problemsList")}>Problems</a>
  }

  render(){
    return (
      <div className="navbar">
        <div className="navbar-items">
          <div className="logo">
            Ruby Runner
          </div>
          <div className="navbar-item">
          </div>
          <div className="navbar-item">
          </div>

        </div>

      </div>
    );
  }
}

export default Navbar;
