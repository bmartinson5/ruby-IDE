import React from "react";
import Problem from "./Problem.js"
import "../css/Problems.css";

const default_problems = [
  "first",
  "second"
]

export default class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      problems: default_problems,
      clickedProblem: 0
    }
  }

  handleProblemChange = (index) => {
    this.setState({
      clickedProblem: index
    })
  }

  render(){
    return (
      <div className="problems-list">
        {console.log(this.state.clickedProblem)}
        {this.state.problems.map((problem, index) => (
          <Problem
            callback={this.handleProblemChange}
            selected={this.state.clickedProblem === index}
            problem={this.state.problems[index]}
            index={index}
          />
        ))}
      </div>
    )
  }
}
