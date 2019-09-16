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
import {testInputs, expectedOutputs} from '../helpers/test_params.js'

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
      const testInput = testInputs[this.state.currentProblem][index];
      const testOutput = test ? parseInt(test): "No output or return statement";
      const expectedOutput = expectedOutputs[this.state.currentProblem][index];
      const testColor = expectedOutput == testOutput ? "green": "red"
      output.push(<p style={{color: testColor}}>Test Input: {testInput}</p>)
      output.push(<p style={{color: testColor}}>Test Output: {testOutput}</p>)
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
