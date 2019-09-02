import React from "react";
import "../css/App.css";
import CodeContent from "./CodeContent";
import Editor from "./Editor";
import Test from "./Test";

function App() {
  return (
    <div>
      <h1>Ruby Runner</h1>
      <Editor />
    </div>
  );
}

export default App;
