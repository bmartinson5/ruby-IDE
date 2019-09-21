import React, {Component} from 'react';
import '../css/Navbar.css';
import {problem_names} from '../helpers/default_problems'

class ProblemsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      problems: problem_names,
      clickedProblem: 0
    }
  }

  handleProblemSelection = (index) => {
    this.setState({
      clickedProblem: index
    })
    this.props.callback(index);
  }

  render(){
    return (
      <div className="problems-list">
        {this.state.problems.map((problem, index) => (
            <a onClick={() => this.props.loadProblem(index)}><p>problem: {problem}</p></a>
        ))}
      </div>
    )
  }
}

export default ProblemsList;
