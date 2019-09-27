import React, { Component } from "react";
import "../css/App.css";
import * as Draft from "draft-js";
import axios from 'axios'
import Navbar from "./Navbar";
import ProblemsList from './ProblemsList'
import EditorControl from './EditorControl';
import CreateProblem from './CreateProblem';
import Grid from '@material-ui/core/Grid';
import {problems} from '../helpers/default_problems'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedProblem: 0,
      problems: problems,
      currentPage: "problemsList"
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

  loadProblem = (problemNumber) => {
    this.setState({
      currentPage: "editor",
      selectedProblem: problemNumber
    })
  }

  addProblem = (problem) => {
    const problems = this.state.problems.slice();
    problems.push(problem)
    this.setState({problems}, console.log('problems', this.state.problems))
  }

  render(){
    return (
      <div className="app-container">
        <Grid container direction="column" spacing={30}>
          <Grid item xs={12}>
            <Navbar changePage={this.changePage}/>
          </Grid>
          <Grid item xs={12}>
            {this.state.currentPage === "problemsList" && <ProblemsList loadProblem={this.loadProblem}/>}
            {this.state.currentPage === "editor" && <EditorControl selectedProblem={this.state.selectedProblem}/>}
            {this.state.currentPage === "createProblem" && <CreateProblem addProblem={this.addProblem}/>}
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
