import React, {Component} from 'react';
// import '../css/CreateProblem.css';

export default class CreateProblem extends Component {
  constructor(props){
    super(props)

    this.state = {
      functionName: "",
      name: "",
      descriptionContent: "",
      descriptionExample: "",
      params: "",
      testInputs: [],
      testDescriptions: [],
      expectedOutputs: [],
      numberOfTests: 1
    }
  }

  handleChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value });
  }

  handleTestChange = (evt, testNumber) => {
    const type = this.state[evt.target.name].slice();
    type[testNumber] = evt.target.value;
    console.log('type', type[testNumber]);
    this.setState({[evt.target.name]: type})
  }

  reformatProblemObject = () => {

    this.props.addProblem(this.state)
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
      <div>Create a custom problem to Solve! <br/>
        <input type="number" value={this.state.functionName} name="functionName" onChange={this.handleChange} placeholder="Name of the main function called"/><br/>
        <input type="text" value={this.state.name} name="name" onChange={this.handleChange} placeholder="Problem Name"/><br/>
        <input type="text" value={this.state.descriptionContent} name="descriptionContent" onChange={this.handleChange} placeholder="Description Content"/><br/>
        <input type="text" value={this.state.descriptionExample} name="descriptionExample" onChange={this.handleChange} placeholder="Description Example"/><br/>
        {tests}

        <button onClick={() => this.reformatProblemObject()}>Add Problem</button><br/>
      </div>
    );
  }
}
