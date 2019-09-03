import React from "react";
import Problem from "./Problem.js"
import "../css/Problems.css";
import {default_problems} from '../helpers/default_problems'


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
    this.props.callback(index);
  }

  render(){
    return (
      <div className="problems-list">
        {console.log(this.state.clickedProblem)}
        {this.state.problems.map((problem, index) => (
          <Problem
            callback={this.handleProblemChange}
            selected={this.state.clickedProblem === index}
            problemName={this.state.problems[index]}
            index={index}
          />
        ))}
      </div>
    )
  }
}
