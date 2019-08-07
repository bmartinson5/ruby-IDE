import * as React from "react";
import * as Draft from "draft-js";

export default class SelectionStateView extends React.Component {
  state = {
    editorState: Draft.EditorState.createEmpty(),
    offset: 0,
    endOffset: 0,
    lastWasD: false
  };

  editorStateChanged = (newEditorState: Draft.EditorState) => {
    this.setState({ editorState: newEditorState }, this.checkForDKey);
  };

  get selectionState() {
    // the editorState ahs a setSelection() method to get the selection
    const selectionState = this.state.editorState.getSelection();

    // sample of some data we can get from the selection state
    const offset = selectionState.getAnchorOffset();
    const focusOffset = selectionState.getFocusOffset();
    const isBackwards = selectionState.getIsBackward();
    return {
      offset,
      focusOffset,
      isBackwards
    };
  }

  setSelection = (offset: number, focusOffset: number) => {
    console.log('offset', offset);
    console.log('offset Focus', focusOffset);
    const { editorState } = this.state;
    const selectionState = editorState.getSelection();

    // we cant set the selection state directly because its immutable.
    // so make a copy
    const newSelection = selectionState.merge({
      anchorOffset: offset,
      focusOffset: focusOffset
    })

    // Draft API helper set the selection into a new editorState
    const newEditorState = Draft.EditorState.forceSelection(editorState, newSelection);

    // update the editorState
    this.editorStateChanged(newEditorState);
  };

  checkForDKey = () => {
    if(this.state.lastWasD){
      this.setState({lastWasD: false})
      this.setSelection(3, 5);
    }
  }

  keyBindingFn = (e: SyntheticKeyboardEvent): string => {
    if (e.keyCode === 68) {  // key: D
      this.setState({lastWasD: true})
      //check if end is only word on line
      // if(this.checkForEndKey())
        // this.reverseTab(2)
    }
  }



  render() {
    return (
      <div>
        <div className="editor">
          <Draft.Editor editorState={this.state.editorState} onChange={this.editorStateChanged}
          keyBindingFn={this.keyBindingFn}

          />
        </div>

        <div className="form-horizontal col-sm-12">
          <div className="form-group">
            <label htmlFor="data" className="control-label col-sm-6">
              offset
            </label>
            <label htmlFor="data" className="control-label col-sm-6">
              {this.selectionState.offset}
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="data" className="control-label col-sm-6">
              Focus Offset
            </label>
            <label htmlFor="data" className="control-label col-sm-6">
              {this.selectionState.focusOffset}
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="data" className="control-label col-sm-6">
              is backwards
            </label>
            <label htmlFor="data" className="control-label col-sm-6">
              {this.selectionState.isBackwards ? "true" : "false"}
            </label>
          </div>
          <SetSelectionForm callback={this.setSelection} />
        </div>
      </div>
    );
  }
}


class SetSelectionForm extends React.Component {
  state = {
    offset: 0,
    focusOffset: 0
  };
  render() {
    return (
      <div className="selection-form">
        <div className="form-group">
          <label htmlFor="data" className="control-label col-sm-6">
            offset
          </label>
          <div className="col-sm-6">
            <input
              type="number"
              className="form-control"
              id="data"
              placeholder="data to save"
              value={this.state.offset}
              onChange={e => this.setState({ offset: Number.parseInt(e.target.value) })}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="data" className="control-label col-sm-6">
            end offset
          </label>
          <div className="col-sm-6">
            <input
              type="number"
              className="form-control"
              id="data"
              placeholder="data to save"
              value={this.state.focusOffset}
              onChange={e => this.setState({ focusOffset: Number.parseInt(e.target.value) })}
            />
          </div>
        </div>
        <button
          className="button col-sm-3 col-sm-offset-8"
          onClick={() => this.props.callback(this.state.offset, this.state.focusOffset)}
        >
          set selection state
        </button>
      </div>
    );
  }
}
