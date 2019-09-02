import React from "react";
import "../css/Problems.css";

const default_problems = [
  "first",
  "second"
]

export default class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: this.props.selected,
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.selected !== this.props.selected){
        this.setState({
            selected: this.props.selected
        });
    }
}

  handleClick = () => {
    this.props.callback(this.props.index)
  }

  render(){
    return (
      <div className="problem-list-item" onClick={() => this.handleClick()}>
        {this.props.problem}
        {this.state.selected && <p>selected</p>}
      </div>
    )
  }
}
