import React, {Component} from 'react';
import '../css/ProblemForm.css';
import Grid from '@material-ui/core/Grid';

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
      numberOfTests: 0,
      difficulty: "Easy"
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

  reformatProblemObject = () => {
    const params = this.state.params.split(',');
    this.setState({params},
      () => this.props.addProblem(this.state)
    )
  }

  render(){

    return (
      <div className="problem-form-container">
        <div id="form-title">Create a custom problem to Solve!</div> <br/>
        <input type="text" value={this.state.functionName} name="functionName" onChange={this.handleChange} placeholder="Name of the main function called"/><br/>
        <input type="text" value={this.state.name} name="name" onChange={this.handleChange} placeholder="Problem Name"/><br/>
        <input type="text" value={this.state.params} name="params" onChange={this.handleChange} placeholder="Function Params"/><br/>
        <input type="text" value={this.state.descriptionContent} name="descriptionContent" onChange={this.handleChange} placeholder="Description Content"/><br/>
        <input type="text" value={this.state.descriptionExample} name="descriptionExample" onChange={this.handleChange} placeholder="Description Example"/><br/>

        <p>Difficulty</p>
        Easy<input type="radio" name="difficulty" value="Easy" checked={this.state.difficulty === 'Easy'} onChange={this.handleChange} />
      Medium<input type="radio" name="difficulty" value="Medium" checked={this.state.difficulty === 'Medium'} onChange={this.handleChange} />
    Hard<input type="radio" name="difficulty" value="Hard" checked={this.state.difficulty === 'Hard'} onChange={this.handleChange} />
        <br/>
        <br/>

        <button onClick={() => this.reformatProblemObject()}>Add Problem</button><br/>
      </div>
    );
  }
}
