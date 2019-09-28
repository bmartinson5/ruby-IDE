import React, {Component} from 'react';
import '../css/ProblemForm.css';
import Grid from '@material-ui/core/Grid';

export default class CreateTests extends Component {
  constructor(props){
    super(props)

    this.state = {
      testInputs: [],
      testDescriptions: [],
      expectedOutputs: [],
      numberOfTests: 0,
    }
  }

  handleChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value });
  }

  changeNumberOfTests = (newNum) => {
    this.setState({ numberOfTests: newNum})
  }

  handleTestChange = (evt, testNumber) => {
    const type = this.state[evt.target.name].slice();
    type[testNumber] = evt.target.value;
    this.setState({[evt.target.name]: type})
  }

  render(){

    const tests = []
    for(let i = 0; i < this.state.numberOfTests; ++i){
      tests.push(
        <div className="test">
          Test {i+1}.<br/>
        <input type="text" value={this.state.testDescriptions[i]} name="testDescriptions" onChange={(e) => this.handleTestChange(e, i)} placeholder="Test Descriptions"/><br/>
          <input type="text" value={this.state.testInputs[i]} name="testInputs" onChange={(e) => this.handleTestChange(e, i)} placeholder="Test Inputs"/><br/>
          <input type="text" value={this.state.expectedOutputs[i]} name="expectedOutputs" onChange={(e) => this.handleTestChange(e, i)} placeholder="Expected Outputs"/><br/>

        </div>
      )

    }
    return (
      <div className="problem-form-container tests">
        <p>Number of Tests</p>
        <input type="number" value={this.state.numberOfTests} name="numberOfTests" onChange={this.handleChange} placeholder=""/>
        {tests}

        <button onClick={() => this.reformatProblemObject()}>Add Problem</button><br/>
      </div>
    );
  }
}
