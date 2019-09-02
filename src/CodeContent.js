import React, {Component} from 'react';
import ContentEditable from 'react-contenteditable';
import './CodeContent.css';


class CodeContent extends Component {
  constructor(){
    super()
    this.contentEditable = React.createRef();
    this.state = {
      html: "def test_function() <br/>  Your code here.<br/><br/>end",
      lines: 4
    }
  }

  handleChange = evt => {
    console.log(evt.target)
    let newLineCount = this.checkLines(evt.target.value)
    this.setState({ html: evt.target.value, lines: newLineCount});
  };

  handleKeyDown = evt => {
    if(evt.key === 'Tab'){
      evt.preventDefault();
      // currentSpot = this.findCurrentSpot(this.state.html)
    }
  }

  findCurrentSpot = html => {

  }

  checkLines = html => {
    let currentLines = 0;
    let htmlSeq = html.split('')
    htmlSeq.forEach(function(char, idx){
      if(char === '<'){
        if(idx + 3 < htmlSeq.length && htmlSeq[idx+1] === 'b' && htmlSeq[idx+2] === 'r' && htmlSeq[idx+3] === '>'){
          ++currentLines;
        }
      }
    })
    return currentLines+1; //add one for the last line
  }

  render = () =>{
    const lineNums = [];
    for(let i = 1; i <= this.state.lines; ++i){
      lineNums.push(<div className="line-number">{i.toString()}</div>);
    }

    return (
      <div className="code-container">
        <div contentEditable="true" className="code-content" wrap="off" name="styled-textarea" id="styled" onChange={this.handleChange}>
        def test_function()
        <br/>  Your code here...<br/><br/><br/>
        end
        </div>
        <div className="side-numbers">
        {lineNums}
        </div>
      </div>
    );
  }
}

// <ContentEditable
//          html={this.state.html} // innerHTML of the editable div
//          disabled={false} // use true to disable edition
//          onChange={this.handleChange} // handle innerHTML change
//        />

export default CodeContent;
