import React, { Component } from "react";
import "../css/App.css";
import CodeContent from "./CodeContent";
import Editor from "./Editor";
import Problems from "./Problems";
import * as Draft from "draft-js";
import axios from 'axios'
import Navbar from "./Navbar";
import Test from "./Test";
import {default_editors} from '../helpers/default_editors.js'
import {default_problems, problem_names} from '../helpers/default_problems.js'
import {testInputs, expectedOutputs, testDescriptions} from '../helpers/test_params.js'
import Loader from 'react-loader-spinner'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentProblem: 0,
      codeOutput: "",
      savedTests: ["", "", "", "", ""],
      loading: false,
      firstCallToAPi: true,
      savedEditors: default_editors
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

  handleRunCode = (currentEditor) => {
    const rawJson = Draft.convertToRaw(currentEditor);
    const pid = this.state.currentProblem;
    this.setState({ loading: true })
    // axios.post('https://ruby-runner-api.herokuapp.com/contents', ({function_name: default_problems[pid].toLowerCase(), content: rawJson, problem_index: this.state.currentProblem}))
    axios.post('http://localhost:3000/run/', ({function_name: default_problems[pid].toLowerCase(), content: rawJson, problem_index: this.state.currentProblem}))
         .then(response => {
           this.setState({
             loading: false,
             firstCallToAPi: false
           })
           console.log('response ', response.data);
           this.formatCodeOutput(response.data)
         })
         .catch(error => {
           this.setState({
             codeOutput: "Server Error",
             loading: false,
             firstCallToAPi: false
           })
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
    const {currentProblem, savedTests, codeOutput} = this.state
    const newSavedTests = savedTests.slice()
    newSavedTests[currentProblem] = codeOutput
    const newOutput = savedTests[newIndex]
    this.setState({
      currentProblem: newIndex,
      codeOutput: newOutput,
      savedTests: newSavedTests,
    })
  }

  handleSaveEditor = (editorToSave, problemIndex) => {
    const editors = this.state.savedEditors.slice()
    editors[problemIndex] = editorToSave
    this.setState({
      savedEditors: editors
    })
  }
        //  <span>Loading: takes a few seconds for the server to start at first</span>
        // <CodeRunner  savedTests={this.state.savedTests[this.state.currentProblem]} codeOutput={this.state.codeOutput} />
  render(){
    return (
      <div className="container">
        <Navbar />
        <Problems callback={this.handleProblemChange}/>
        <Editor handleRunCode={this.handleRunCode}
          default_editors={this.state.savedEditors}
          handleSaveEditor={this.handleSaveEditor}
          problemIndex={this.state.currentProblem}
        />

        <div className="code-runner">
          <div className="test-output">
            {this.state.loading ? (<div
               style={{
                  width: "100%",
                  height: "100",
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                >
                <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
                {this.state.firstCallToAPi && <p> Starting the server: Might take a few seconds</p>}
                </div>):
            (this.state.codeOutput ? this.state.codeOutput: (<span style={{color: "grey"}}>Run some code to display tests</span>))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
