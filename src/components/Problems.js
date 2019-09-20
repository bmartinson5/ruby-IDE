import React from "react";
import Problem from "./Problem.js"
import "../css/App.css";
import {problem_names} from '../helpers/default_problems'
import {descriptions} from '../helpers/descriptions'


export default class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      problems: problem_names,
      clickedProblem: 0
    }
  }

  handleProblemChange = (index) => {
    this.setState({
      clickedProblem: index
    })
    this.props.callback(index);
  }

  render(){
    return (

      <div className="problems-list">
        {this.state.problems.map((problem, index) => (
          <Problem
            callback={this.handleProblemChange}
            selected={this.state.clickedProblem === index}
            problemName={this.state.problems[index]}
            index={index}
          />
        ))}
        <div className="problem-description">
           <p>
            {descriptions[this.state.clickedProblem].content}
           </p>
           <h5>Example: </h5>
           <p>
            {descriptions[this.state.clickedProblem].example}
           </p>
        </div>
      </div>
    )
  }
}
