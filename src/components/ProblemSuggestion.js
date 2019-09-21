import React from "react";
import "../css/App.css";

export default class ProblemSuggestion extends React.Component {
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
    const selectedStyle = this.state.selected ? "selected-item" : "";
    return (
      <div className={`problem-list-item ${selectedStyle}`} onClick={() => this.handleClick()}>
        {this.props.problemName}
      </div>
    )
  }
}
