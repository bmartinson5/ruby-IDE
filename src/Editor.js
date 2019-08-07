import * as React from "react";
import * as Draft from "draft-js";
import './CodeContent.css';


const {hasCommandModifier} = Draft.KeyBindingUtil;

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
            "text": "    Your code here...",
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
  constructor(props){
    super(props);
    this.keyBindingFn = this.keyBindingFn.bind(this);
    this.state = {
      // editorState: Draft.EditorState.createEmpty(compositeDecorator),
      editorState: firstEditor,
      lineNums: 4,
      text: "",
      lastWasReturn: false,
      lastWasD: true,
    };
  }



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

  getNewSelection = (offset, focusOffset) => {
    const {editorState} = this.state;
    const selectionState = editorState.getSelection();
    return selectionState.merge({
        anchorOffset: offset,
        focusOffset: focusOffset,
    })
  }

  setSelection = (offset: number, focusOffset: number) => {
    const {editorState} = this.state;
    const selectionState = editorState.getSelection();

    const newSelection = selectionState.merge({
        anchorOffset: offset,
        focusOffset: focusOffset,
    })

    const newEditorState = Draft.EditorState.forceSelection(editorState, newSelection);
    this.editorStateChanged(newEditorState);
  }

  reverseTab = (lengthOfSelect) => {
    let currentState = this.state.editorState;
    let currentSelection = currentState.getSelection();
    const oldFocus = currentSelection.getStartOffset();
    const oldOffset = oldFocus-lengthOfSelect;

    const newOffset = (oldOffset-4 < 0) ? 0 : oldOffset-4;
    const newFocus = newOffset+lengthOfSelect;
    const oldSelection = this.getNewSelection(oldOffset, oldFocus)
    const newSelection = this.getNewSelection(newOffset, newFocus)

    let newContentState = Draft.Modifier.moveText(
      currentState.getCurrentContent(),
      oldSelection,
      newSelection
    );

    this.setState({
      editorState: Draft.EditorState.push(currentState, newContentState, 'move-text')
    });
  }

  checkForEndKey = () => {
      const lineNum = this.getCurrentLine();
      const lineText = this.getLineText(lineNum);
      // console.log(lineText)
      console.log(lineText);
      return (lineText.replace(/\s/g, "") === "end")
  }

  keyBindingFn(e: SyntheticKeyboardEvent): string {

    if (e.keyCode === 68) {  // key: D
      this.setState({lastWasD: true})
      //check if end is only word on line
    }

    if (e.keyCode === 13) { // key: return
      this.setState({lastWasReturn: true})
    }
    return Draft.getDefaultKeyBinding(e);
  }

  editorStateChanged = (newEditorState: Draft.EditorState) => {
    this.setState({
      editorState: newEditorState,
    }, () => {
      this.checkForKeys()
      this.setLineNums()
      this.contentState()
    });


  }

  splitCurrentBlock = () => {
    let currentState = this.state.editorState;
    let newContentState = Draft.Modifier.splitBlock(
      currentState.getCurrentContent(),
      currentState.getSelection(),
    );    // need to split the block;
    this.setState({
      editorState: Draft.EditorState.push(currentState, newContentState, 'insert-characters')
    });
  }

  handleReturn = (offNum, newScopeStarted) => {

    let spaces = "".padStart(offNum, " ");
    let currentState = this.state.editorState;
    let newContentState = Draft.Modifier.replaceText(
      currentState.getCurrentContent(),
      currentState.getSelection(),
      spaces
    );

    if(newScopeStarted){
      newContentState = Draft.Modifier.replaceText(
        newContentState,
        newContentState.getSelectionAfter(),
        "    "
      );
    }

    this.setState({
      editorState: Draft.EditorState.push(currentState, newContentState, 'insert-characters')
    });

  }


  handleTab = (e) => {
    if(e) e.preventDefault();
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

  getCurrentLine = () => {
    const currentBlockKey = this.state.editorState.getSelection().getStartKey()
    const currentBlockIndex = this.state.editorState.getCurrentContent().getBlockMap()
      .keySeq().findIndex(k => k === currentBlockKey)
    return currentBlockIndex;
  }

  prevLineStartedScope = (prevLine) => {
    return prevLine.match(/\b(def|if)\b/g) !== null;
  }

  getLineText = (lineNum) => {
      return this.state.editorState.getCurrentContent().getBlocksAsArray()[lineNum].text;
  }

  checkForDKey = () => {
    if(this.state.lastWasD){
      this.setState({lastWasD: false})
      if(this.checkForEndKey()){
        this.reverseTab(3)
      }
    }
  }

  checkForReturn = () => {
    if(this.state.lastWasReturn){
      const lineNum = this.getCurrentLine();
      const prevLineNum = (lineNum === 0 ? 0 : lineNum-1);
      const prevLine = this.getLineText(prevLineNum);
      const offset = prevLine.search(/\S/);
      console.log(offset);
      this.setState({lastWasReturn: false})
      this.handleReturn(offset, this.prevLineStartedScope(prevLine))
    }

  }

  checkForKeys = () => {
    this.checkForReturn()
    this.checkForDKey()
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
            keyBindingFn={this.keyBindingFn}
            />
        </div>
      </div>
    );
  }
}
