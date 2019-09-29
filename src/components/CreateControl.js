import React, { Component } from "react";
import "../css/App.css";
import "../css/CodeRunner.css";
import Editor from "./Editor";
import CreateProblem from './CreateProblem';
import CreateTests from './CreateTests';
import {default_editors} from '../helpers/default_editors.js'
import {problems} from '../helpers/default_problems'
import * as Draft from "draft-js";
import Grid from '@material-ui/core/Grid';

class CreateControl extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentProblem: this.props.selectedProblem,
      codeOutput: "",
      savedTests: ["", "", "", "", ""],
      loading: false,
      firstCallToAPi: true,
      savedEditors: default_editors,
    }
  }





  render(){
    return (

      <div className="editor-container">
        <Grid container direction="row">
          <Grid item xs>
            <CreateProblem />
          </Grid>
          <Grid item xs={6}>
            <Editor
              createMode={true}
              handleRunCode={this.handleRunCode}
              default_editors={this.state.savedEditors}
              handleSaveEditor={this.handleSaveEditor}
              problemIndex={this.state.currentProblem}
            />
          </Grid>
          <Grid item xs>
            <div className="code-runner">
              <CreateTests />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CreateControl;
