import React, { Component } from "react";
import "../css/App.css";
import CodeContent from "./CodeContent";
import Editor from "./Editor";
import Problems from "./Problems";
import CodeRunner from "./CodeRunner";
import * as Draft from "draft-js";
import axios from 'axios'
import Navbar from "./Navbar";
import Test from "./Test";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentProblem: 0,
      codeOutput: ""
    }
  }

  handleRunCode = (currentEditor) => {
    const rawJson = Draft.convertToRaw(currentEditor);
    console.log('before send', rawJson);
    axios.post('http://localhost:3000/run', ({content: rawJson, problem_index: this.state.problemIndex}))
         .then(response => {
            this.setState({ codeOutput: response.data })
         })
         .catch(error => {
          this.setState({ codeOutput: "error" })
           console.log('error', error.response)
         })
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
        <Editor handleRunCode={this.handleRunCode} problemIndex={this.state.currentProblem}/>
        <CodeRunner  codeOutput={this.state.codeOutput} />
      </div>
    );
  }
}

export default App;
