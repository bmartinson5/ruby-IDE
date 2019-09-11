import React from "react";
import Problem from "./Problem.js"
import "../css/CodeRunner.css";
import {default_problems} from '../helpers/default_problems'
import {descriptions} from '../helpers/descriptions'


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

      <div className="code-runner">
        <p>
        {descriptions[this.state.clickedProblem].content}
        </p>
        <h5>Example: </h5>
        <p>
        {descriptions[this.state.clickedProblem].example}
        </p>
      </div>
    )
  }
}
