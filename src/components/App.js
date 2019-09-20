import React, { Component } from "react";
import "../css/App.css";
import * as Draft from "draft-js";
import axios from 'axios'
import Navbar from "./Navbar";
import EditorControl from './EditorControl'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentProblem: 0,
    }
  }

  componentWillMount() {
    //start the server, to reduce lag
    axios.get('https://ruby-runner-api.herokuapp.com/contents')
          .then(console.log('server started'))
          .catch(error => {
            console.log('server error on start');
          })
  }

        //  <span>Loading: takes a few seconds for the server to start at first</span>
        // <CodeRunner  savedTests={this.state.savedTests[this.state.currentProblem]} codeOutput={this.state.codeOutput} />
  render(){
    return (
      <div className="app-container">
        <Navbar />
        <EditorControl />
        <footer>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;
