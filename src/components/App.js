import React from "react";
import "../css/App.css";
import CodeContent from "./CodeContent";
import Editor from "./Editor";
import Problems from "./Problems";
import Test from "./Test";

function App() {
  return (
    <div>
      <h1>Ruby Runner</h1>
      <Editor />
      <Problems />
    </div>
  );
}

export default App;
