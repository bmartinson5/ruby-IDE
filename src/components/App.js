import React, { Component } from "react";
import "../css/App.css";
import * as Draft from "draft-js";
import axios from 'axios'
import Navbar from "./Navbar";
import ProblemsList from './ProblemsList'
import EditorControl from './EditorControl';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentProblem: 0,
      currentPage: "editor"
    }
  }

  componentWillMount() {
    //start the server, to reduce lag
    axios.get('https://ruby-runner-api.herokuapp.com/contents')
          .then(console.log('server started'))
          .catch(error => {
            console.log('server error on start');
          })
  }

  changePage = (pageName) => {
    this.setState({currentPage: pageName})
  }

        //  <span>Loading: takes a few seconds for the server to start at first</span>
        // <CodeRunner  savedTests={this.state.savedTests[this.state.currentProblem]} codeOutput={this.state.codeOutput} />
  render(){
    return (
      <div className="app-container">
        <Grid container direction="column" spacing={30}>
          <Grid item xs={12}>
          <Navbar changePage={this.changePage}/>
          </Grid>
          <Grid item xs={12}>
          {this.state.currentPage === "problemsList" && <ProblemsList />}
          {this.state.currentPage === "editor" && <EditorControl />}
          </Grid>
          <Grid item xs={12}>
          <footer>
          </footer>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
