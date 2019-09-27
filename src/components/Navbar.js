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
            <a href="#" onClick={() => this.props.changePage("problemsList")}>Problems</a>
          </div>
          <div className="navbar-item">
            <a href="#" onClick={() => this.props.changePage("createProblem")}>Create</a>
          </div>

        </div>

      </div>
    );
  }
}

export default Navbar;
