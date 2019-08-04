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
const createWithHTML = (html) => {
  const contentBlocks = Draft.convertFromHTML(html);
  const contentState = Draft.ContentState.createFromBlockArray(contentBlocks);
  const newEditorState = Draft.EditorState.createWithContent(contentState, compositeDecorator);
  return newEditorState;
};

const createWithRawContent = (rawSampleJson) => {
    const contentState = Draft.convertFromRaw(rawSampleJson);
    const newEditorState = Draft.EditorState.createWithContent(contentState, compositeDecorator);
    return newEditorState;
}

// const firstEditor = createWithHTML("<p>def test_function() </p><p><br/>    <br/><br/><br/>end</p>");
const firstEditor = createWithRawContent({
    "entityMap": {},
    "blocks": [
        {
            "key": "5h45l",
            "text": "def test()",
            "type": "unstyled",
            "depth": 0,
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "5h45r",
            "text": "   Your code here...",
            "type": "unstyled",
            "depth": 0,
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "5h45x",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "5h45t",
            "text": "end",
            "type": "unstyled",
            "depth": 0,
            "entityRanges": [],
            "data": {}
        }
    ]
});

export default class HashtagDecorator extends React.Component {
  state = {
    // editorState: Draft.EditorState.createEmpty(compositeDecorator),
    editorState: firstEditor,
    lineNums: 4,
    text: "",
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

  handleTab = (e) => {
    e.preventDefault();

    let currentState = this.state.editorState;
    let newContentState = Draft.Modifier.replaceText(
      currentState.getCurrentContent(),
      currentState.getSelection(),
      "    "
    );

    this.setState({
      editorState: Draft.EditorState.push(currentState, newContentState, 'insert-characters')
    });
  }



  render() {
    const lineNumsOutput = [];
    for(let i = 1; i <= this.state.lineNums; ++i){
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
            onTab={this.handleTab}
            />
        </div>
      </div>
    );
  }
}
