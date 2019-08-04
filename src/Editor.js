import * as React from "react";
import * as Draft from "draft-js";
import './CodeContent.css';




const HASHTAG_REGEX = /\b(def|end)\b/g;

const HashtagSpan = (props) => {
  return <span style={{color:'green'}}>{props.children}</span>;
};

function hashtagStrategy(contentBlock, callback, contentState) {
  findWithRegex(HASHTAG_REGEX, contentBlock, callback);
}

function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr, start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

const compositeDecorator = new Draft.CompositeDecorator([
  {
    strategy: hashtagStrategy,
    component: HashtagSpan,
  }
]);

// const firstEditor = createWithHTML("asdf")

export default class HashtagDecorator extends React.Component {
  state = {
    editorState: Draft.EditorState.createEmpty(compositeDecorator),
    text: "",
  };


  createWithHTML = (html) => {
    console.log('here');
    const contentBlocks = Draft.convertFromHTML(html);
    const contentState = Draft.ContentState.createFromBlockArray(contentBlocks);
    const newEditorState = Draft.EditorState.createWithContent(contentState);
    this.setState({ editorState: newEditorState });
  };

 setLineNums = () => {
   const lineNums = this.state.editorState.getCurrentContent().getBlocksAsArray().length
   this.setState({ lineNums: lineNums})
 }

 contentState = () => {
    const contentState = this.state.editorState.getCurrentContent();
    const rawJson = Draft.convertToRaw(contentState);
    const jsonStr = JSON.stringify(rawJson, null, 1);
    const plainText = contentState.getPlainText();
  }

  editorStateChanged = (newEditorState: Draft.EditorState) => {
    this.setState({
      editorState: newEditorState,
    }, () => {
      this.setLineNums()
    });
  }



  render() {
    console.log(this.state.text);
    if(this.state.text === ""){
      console.log('here');
      this.createWithHTML("def test_function() <br/>  Your code here...<br/><br/><br/>end")
      this.setState({text: "e"})
    }

    const lineNumsOutput = [];
    for(let i = 1; i <= this.state.lineNums+2; ++i){
      lineNumsOutput.push(<div className="line-number" key={i.toString()}>{i.toString()}</div>);
    }

    return (
      <div>
        <div className="editor">
          <div className="side-numbers">
            {lineNumsOutput}
          </div>
          <Draft.Editor
            editorState={this.state.editorState}
            onChange={this.editorStateChanged}
            />
        </div>
      </div>
    );
  }
}
