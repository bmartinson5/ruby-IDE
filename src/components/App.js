import React, { Component } from "react";
import "../css/App.css";
import CodeContent from "./CodeContent";
import Editor from "./Editor";
import Problems from "./Problems";
import CodeRunner from "./CodeRunner";
import Navbar from "./Navbar";
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
        <Navbar />
        <Problems callback={this.handleProblemChange}/>
        <Editor problemIndex={this.state.currentProblem}/>
        <CodeRunner />
      </div>
    );
  }
}

export default App;
