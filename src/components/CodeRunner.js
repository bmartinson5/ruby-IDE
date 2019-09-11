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


  render(){
    return (

      <div className="code-runner">
        {this.props.codeOutput}
      </div>
    )
  }
}
