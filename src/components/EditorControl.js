import React, { Component } from "react";
import "../css/App.css";
import "../css/CodeRunner.css";
import Editor from "./Editor";
import ProblemSuggestions from "./ProblemSuggestions";
import CreateProblem from './CreateProblem';
import * as Draft from "draft-js";
import axios from 'axios'
import Test from "./Test";
import {default_editors} from '../helpers/default_editors.js'
import {problems} from '../helpers/default_problems'
import Grid from '@material-ui/core/Grid';
import Loader from 'react-loader-spinner'

class EditorControl extends Component {
  constructor(props){
    super(props)
    console.log(this.props.selectedProblem);
    this.state = {
      currentProblem: this.props.selectedProblem,
      codeOutput: "",
      savedTests: ["", "", "", "", ""],
      loading: false,
      firstCallToAPi: true,
      savedEditors: default_editors,
    }
  }

  handleRunCode = (currentEditor) => {
    const rawJson = Draft.convertToRaw(currentEditor);
    const pid = this.state.currentProblem;
    this.setState({ loading: true })
    axios.post('https://ruby-runner-api.herokuapp.com/run', ({function_name: problems[pid]["functionName"].toLowerCase(), content: rawJson, problem_index: this.state.currentProblem}))
    // axios.post('http://localhost:3000/run/', ({function_name: default_problems[pid].toLowerCase(), content: rawJson, problem_index: this.state.currentProblem}))
         .then(response => {
           this.setState({
             loading: false,
             firstCallToAPi: false
           })
           console.log('response ', response.data);
           if(response.data[0].includes("Unpermitted")){
             this.setState({codeOutput: response.data})
           } else {
             this.formatCodeOutput(response.data)
           }
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

  // formatErrorOutput = (error) => {
  //
  // }

  formatCodeOutput = (tests) => {
    let output = [];
    let passedCount = 0;
    let failedCount = 0

    const currentProblem = problems[this.state.currentProblem];

    tests.forEach((test, testIndex) => {
      let testInput = currentProblem["testInputs"][testIndex];
      let testDescription = currentProblem["testDescriptions"][testIndex]
      let expectedOutput = currentProblem["expectedOutputs"][testIndex];
      let testOutput = test ? test: "No output or return statement";
      let passedTest = expectedOutput == testOutput
      if(passedTest){
        ++passedCount;
      } else {
        ++failedCount;
      }
      const testColor = passedTest ? "green": "red"

      output.push(<p >Test Description: {testDescription}</p>)
      output.push(<p >Input: {testInput}</p>)
      output.push(<p style={{color: testColor}}>Expected Output: {expectedOutput}</p>)
      output.push(<p style={{color: testColor}}>Output: {testOutput}</p>)
      output.push(<br/>)
    })
    const passedColor = failedCount === 0 ? "green": "red";
    output.unshift(<p > Tests Passed:
      <span style={{color: passedColor}}>{passedCount}/{passedCount + failedCount}</span>
      <br/></p>)
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

      <div className="editor-container">
        <Grid container direction="row">
          <Grid item xs>
            {this.props.createMode ?
              <CreateProblem /> :
              <ProblemSuggestions callback={this.handleProblemChange} problemIndex={this.state.currentProblem}/>
            }
          </Grid>
          <Grid item xs={6}>
            <Editor handleRunCode={this.handleRunCode}
              default_editors={this.state.savedEditors}
              handleSaveEditor={this.handleSaveEditor}
              problemIndex={this.state.currentProblem}
            />
          </Grid>
          <Grid item xs>
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
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default EditorControl;
