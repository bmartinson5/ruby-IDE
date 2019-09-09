import React, { Component } from "react";
import "../css/App.css";
import CodeContent from "./CodeContent";
import Editor from "./Editor";
import Problems from "./Problems";
import Test from "./Test";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentProblem: 0
    }
  }


  handleProblemChange = (newIndex) => {
    this.setState({
      currentProblem: newIndex
    })
  }
  render(){
    return (
      <div className="container">
        <Problems callback={this.handleProblemChange}/>
        <Editor problemIndex={this.state.currentProblem}/>
      </div>
    );
  }
}

export default App;
