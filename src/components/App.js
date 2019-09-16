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
import {default_editors} from '../helpers/default_editors.js'
import {default_problems} from '../helpers/default_problems.js'
import {testInputs, expectedOutputs, testDescriptions} from '../helpers/test_params.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentProblem: 0,
      codeOutput: "",
      savedEditors: default_editors
    }
  }

  handleRunCode = (currentEditor) => {
    const rawJson = Draft.convertToRaw(currentEditor);
    const pid = this.state.currentProblem;
    console.log('before send', {function_name: default_problems[pid].toLowerCase(), content: rawJson, problem_index: this.state.currentProblem});
    axios.post('http://localhost:3000/run', ({function_name: default_problems[pid].toLowerCase(), content: rawJson, problem_index: this.state.currentProblem}))
         .then(response => {
           console.log('response ', response.data);
           // this.setState({ codeOutput: response.data })
           this.formatCodeOutput(response.data)
         })
         .catch(error => {
          this.setState({ codeOutput: "error" })
           console.log('error', error.response)
         })
  }

  formatCodeOutput = (tests) => {
    let output = []

    tests.forEach((test, index) => {
      let testInput = testInputs[this.state.currentProblem][index];
      let testDescription = testDescriptions[this.state.currentProblem][index]
      let testOutput = test ? test: "No output or return statement";
      let expectedOutput = expectedOutputs[this.state.currentProblem][index];
      console.log("testOutput", testOutput);
      console.log("expectedOutput", expectedOutput);
      console.log("testOutput", typeof testOutput);
      console.log("expectedOutput", typeof expectedOutput);
      console.log("equal = ", expectedOutput == testOutput);
      const testColor = expectedOutput == testOutput ? "green": "red"

      output.push(<p >Test Description: {testDescription}</p>)
      output.push(<p >Input: {testInput}</p>)
      output.push(<p style={{color: testColor}}>Expected Output: {expectedOutput}</p>)
      output.push(<p style={{color: testColor}}>Output: {testOutput}</p>)
      output.push(<br/>)
    })
    this.setState({ codeOutput: output})
  }


  handleProblemChange = (newIndex) => {
    this.setState({
      currentProblem: newIndex
    })
  }

  handleSaveEditor = (editorToSave, problemIndex) => {
    const editors = this.state.savedEditors.slice()
    editors[problemIndex] = editorToSave
    this.setState({
      savedEditors: editors
    })
  }

  render(){
    return (
      <div className="container">
        <Navbar />
        <Problems callback={this.handleProblemChange}/>
        <Editor handleRunCode={this.handleRunCode}
          default_editors={this.state.savedEditors}
          handleSaveEditor={this.handleSaveEditor}
          problemIndex={this.state.currentProblem}/>
        <CodeRunner  codeOutput={this.state.codeOutput} />
      </div>
    );
  }
}

export default App;
