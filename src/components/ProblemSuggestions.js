import React from "react";
import ProblemSuggestion from "./ProblemSuggestion.js"
import "../css/ProblemSuggestions.css";
import {problems} from '../helpers/default_problems'


export default class ProblemSuggestions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      problems: problems,
      clickedProblem: this.props.problemIndex
    }
  }

  handleProblemChange = (index) => {
    this.setState({
      clickedProblem: index
    })
    this.props.callback(index);
  }

  render(){
    const {problems, clickedProblem} = this.state
    return (

      <div className="problems-list">
        {problems.map((problem, index) => (
          <ProblemSuggestion
            callback={this.handleProblemChange}
            selected={clickedProblem === index}
            problemName={problem["name"]}
            index={index}
          />
        ))}
        <div className="problem-description">
           <p>
            {problems[clickedProblem]["description"].content}
           </p>
           <h5>Example: </h5>
           <p>
            {problems[clickedProblem]["description"].example}
           </p>
        </div>
      </div>
    )
  }
}
