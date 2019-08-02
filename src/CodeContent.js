import React, {Component} from 'react';
import ContentEditable from 'react-contenteditable';
import './CodeContent.css';


class CodeContent extends Component {
  constructor(){
    super()
    this.contentEditable = React.createRef();
    this.state = {
      html: "def test_function() <br/><pre>  Your code here.</pre><br/>end",
      lines: 4
    }
    this.checkLines = this.checkLines.bind(this)
  }

  handleChange = evt => {
    console.log(evt.target.value)
    let newLineCount = this.checkLines(evt.target.value)
    this.setState({ html: evt.target.value, lines: newLineCount});
  };

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
    console.log(currentLines);
    return currentLines+2; //add two for first and last line
  }

  render = () =>{
    return (
      <div>
        <h2>Ruby Runner</h2>
        {this.state.lines}
        <ContentEditable
          html={this.state.html} // innerHTML of the editable div
          disabled={false} // use true to disable edition
          onChange={this.handleChange} // handle innerHTML change
        />
      </div>
    );
  }
}

export default CodeContent;
