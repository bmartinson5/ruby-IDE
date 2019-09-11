import * as React from "react";
import * as Draft from "draft-js";
import axios from 'axios'
import "../css/CodeContent.css";
import {default_editors} from '../helpers/default_editors.js'
import {variableNames, compositeDecorator} from '../helpers/strategies.js'

const { hasCommandModifier } = Draft.KeyBindingUtil;



const createWithRawContent = rawSampleJson => {
  const contentState = Draft.convertFromRaw(rawSampleJson);
  const newEditorState = Draft.EditorState.createWithContent(
    contentState,
    compositeDecorator
  );
  return newEditorState;
};



export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.keyBindingFn = this.keyBindingFn.bind(this);

    const editor = default_editors[this.props.problemIndex];
    const firstEditor = createWithRawContent(editor)

    this.state = {
      // editorState: Draft.EditorState.createEmpty(compositeDecorator),
      editorState: firstEditor,
      lineNums: 0,
      text: "",
      lastWasReturn: false,
      lastWasD: true,
      possibleSuggestions: variableNames,
      problemIndex: this.props.problemIndex
    };

    this.getSavedEditorState();
  }


  componentDidUpdate(prevProps){
    if(prevProps.problemIndex !== this.props.problemIndex){
      this.saveEditorState()
      const editor = default_editors[this.props.problemIndex];
      const nextEditorContent = createWithRawContent(editor)
      this.setState({
        editorState: nextEditorContent,
        lineNums: editor.blocks.length,
        problemIndex: this.props.problemIndex
      }, this.getSavedEditorState());
    }
  }

  componentDidUnmount(){
    this.saveEditorState()
  }

  saveEditorState = () => {
      const contentState = this.state.editorState.getCurrentContent();
      const rawJson = Draft.convertToRaw(contentState);
      axios.post('http://localhost:3000/contents', ({content: rawJson, problem_index: this.state.problemIndex}))
      .then(response => {
        console.log(response.data)
      })
      .catch(error => console.log(error))
  }

  getSavedEditorState = () => {
    axios.get(`http://localhost:3000/problem?problem_index=${this.props.problemIndex}`)
    .then(response => {
      let newEditor;
      let editor;
      if(response.data.length){
        console.log('resp', response.data)
        editor = response.data[response.data.length-1].content
        newEditor = createWithRawContent(editor)
        const lineNums = (editor.blocks) ? editor.blocks.length: 0
        this.setState({
          editorState: newEditor,
          lineNums: editor.blocks.length
        })
      }

    })
    .catch(error => console.log(error))
  }


  setLineNums = () => {
    const lineNums = this.state.editorState
      .getCurrentContent()
      .getBlocksAsArray().length;
    this.setState({ lineNums: lineNums });
  };

  contentState = () => {
    const contentState = this.state.editorState.getCurrentContent();
    const rawJson = Draft.convertToRaw(contentState);
    const jsonStr = JSON.stringify(rawJson, null, 1);
    const plainText = contentState.getPlainText();
  };

  getNewSelection = (offset, focusOffset) => {
    const { editorState } = this.state;
    const selectionState = editorState.getSelection();
    return selectionState.merge({
      anchorOffset: offset,
      focusOffset: focusOffset
    });
  };

  setSelection = (offset: number, focusOffset: number) => {
    const { editorState } = this.state;
    const selectionState = editorState.getSelection();

    const newSelection = selectionState.merge({
      anchorOffset: offset,
      focusOffset: focusOffset
    });

    const newEditorState = Draft.EditorState.forceSelection(
      editorState,
      newSelection
    );
    this.editorStateChanged(newEditorState);
  };

  reverseTab = (lengthOfSelect, lengthOfReverse) => {
    let currentState = this.state.editorState;
    let currentSelection = currentState.getSelection();
    const oldFocus = currentSelection.getStartOffset();
    const oldOffset = oldFocus - lengthOfSelect;

    const newOffset = oldOffset - lengthOfReverse < 0 ? 0 : oldOffset - lengthOfReverse;
    const newFocus = newOffset + lengthOfSelect;
    const oldSelection = this.getNewSelection(oldOffset, oldFocus);
    const newSelection = this.getNewSelection(newOffset, newFocus);

    let newContentState = Draft.Modifier.moveText(
      currentState.getCurrentContent(),
      oldSelection,
      newSelection
    );

    this.setState({
      editorState: Draft.EditorState.push(
        currentState,
        newContentState,
        "move-text"
      )
    });
  };

  checkForEndKey = () => {
    const lineNum = this.getCurrentLine();
    const lineText = this.getLineText(lineNum);
    const possibleKeyword = lineText.replace(/\s/g, "");
    if (possibleKeyword === "end") return 3;
    else if (possibleKeyword === "elsif") return 5;
    else if (possibleKeyword === "else") return 4;
    else return 0;
  };

  getCurrentWord = () => {
    let result;
    if ((result = this.getLineText(this.getCurrentLine())))
      result = result.split(" ").pop();
    return result;
  };

  keyBindingFn(e: SyntheticKeyboardEvent): string {
    if (e.keyCode === 68 || e.keyCode === 70 || e.keyCode === 69) {
      // key: D
      this.setState({ lastWasD: true });
      //check if end is only word on line
    }

    if (e.keyCode === 13) {
      // key: return
      this.setState({ lastWasReturn: true });
    }
    return Draft.getDefaultKeyBinding(e);
  }

  editorStateChanged = (newEditorState: Draft.EditorState) => {
    this.setState(
      {
        editorState: newEditorState
      },
      () => {
        this.checkForKeys();
        this.setLineNums();
        this.contentState();
        this.checkPossibleSuggestions();
      }
    );
  };

  splitCurrentBlock = () => {
    let currentState = this.state.editorState;
    let newContentState = Draft.Modifier.splitBlock(
      currentState.getCurrentContent(),
      currentState.getSelection()
    ); // need to split the block;
    this.setState({
      editorState: Draft.EditorState.push(
        currentState,
        newContentState,
        "insert-characters"
      )
    });
  };



  handleReturn = (offNum, newScopeStarted) => {
    const lineNum = this.getCurrentLine();
    this.setState({ lastWasReturn: false });

    let spaces = this.findScopeIndentationOfLine(lineNum);
    let currentState = this.state.editorState;
    let newContentState = Draft.Modifier.replaceText(
      currentState.getCurrentContent(),
      currentState.getSelection(),
      spaces
    );

    this.setState({
      editorState: Draft.EditorState.push(
        currentState,
        newContentState,
        "insert-characters"
      )
    });
  };

  handleTab = e => {
    const { possibleSuggestions } = this.state;
    if (e) e.preventDefault();
    let currentState = this.state.editorState;
    let newContentState;
    if (possibleSuggestions.length) {
      //need to print first in arr
      const currentWord = this.getCurrentWord();
      const sugg = possibleSuggestions[0];
      const restOfWord = sugg.substring(currentWord.length, sugg.length);
      newContentState = Draft.Modifier.replaceText(
        currentState.getCurrentContent(),
        currentState.getSelection(),
        restOfWord
      );
    } else {
      newContentState = Draft.Modifier.replaceText(
        currentState.getCurrentContent(),
        currentState.getSelection(),
        "    "
      );
    }
    this.setState({
      editorState: Draft.EditorState.push(
        currentState,
        newContentState,
        "insert-characters"
      )
    });
  };

  getCurrentLine = () => {
    const currentBlockKey = this.state.editorState.getSelection().getStartKey();
    const currentBlockIndex = this.state.editorState
      .getCurrentContent()
      .getBlockMap()
      .keySeq()
      .findIndex(k => k === currentBlockKey);
    return currentBlockIndex;
  };

  findScopeIndentationOfLine = lineNum => {
    let spaces = ""
    for(let i = 0; i < lineNum; ++i){
      const lineText = this.getLineText(i)
      if(this.lineStartedScope(lineText)){
        spaces += "    "
      }
      if(this.lineEndedScope(lineText)){
        if(spaces.length > 0)
          spaces = spaces.substring(0, spaces.length-4)
      }
    }
    return spaces
  }

  lineStartedScope = prevLine => {
    return prevLine.match(/\b(def|if|while|for)\b/g) !== null;
  };

  lineEndedScope = prevLine => {
    return prevLine.match(/\b(end)\b/g) !== null;
  };

  getLineText = lineNum => {
    let content = this.state.editorState.getCurrentContent().getBlocksAsArray()[
      lineNum
    ];
    if (content) {
      return content.text;
    }
    return null;
  };

  checkForKeys = () => {

    if (this.state.lastWasReturn) {
      this.handleReturn();
    } else if (this.state.lastWasD) {
      this.setState({ lastWasD: false });
      const result = this.checkForEndKey();
      //if found keyword 'end' or 'else, elsif' needs reverse Tab
      if (result !== 0) {
        this.unIndentLine(this.getCurrentLine(), result)
      }
    }
  };

  unIndentLine = (currentLine, result) => {
    let spaces = this.findScopeIndentationOfLine(currentLine);
    const indentLength = spaces.length - 4 < 0 ? 0: spaces.length - 4;
    const lineText = this.getLineText(currentLine)
    const offset = lineText.search(/\S/);
    this.reverseTab(result, offset-indentLength);
  }

  checkPossibleSuggestions = () => {
    const currentWord = this.getCurrentWord();
    if (currentWord === "") return;
    const suggestions = [];
    variableNames.forEach(function(variable) {
      if (variable.includes(currentWord)) {
        suggestions.push(variable);
      }
    });

    this.setState({
      possibleSuggestions: suggestions
    });
  };

  handleSave = () => {
    const contentState = this.state.editorState.getCurrentContent();
    const rawJson = Draft.convertToRaw(contentState);
    console.log('before send', rawJson);
    axios.post('http://localhost:3000/contents', ({content: rawJson, problem_index: this.state.problemIndex}))
         .then(response => {
             console.log(response.data)
         })
         .catch(error => console.log(error))


  }

  render() {
    const lineNumsOutput = [];
    const { possibleSuggestions } = this.state;
    for (let i = 1; i <= this.state.lineNums; ++i) {
      lineNumsOutput.push(
        <div className="line-number" key={i.toString()}>
          {i.toString()}
        </div>
      );
    }

    // <div className="side-numbers">{lineNumsOutput}</div>
    return (
        <div className="editor">
          <Draft.Editor
            editorState={this.state.editorState}
            onChange={this.editorStateChanged}
            onTab={this.handleTab}
            keyBindingFn={this.keyBindingFn}
          />
        </div>
    );
  }
}
