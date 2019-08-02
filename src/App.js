import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h2>Ruby Runner</h2>
      <div contenteditable="true" class="code-content" wrap="off" name="styled-textarea" id="styled" onfocus="this.value=''; setbg('#e5fff3');" onblur="setbg('white')">
        def test_function()
        <br/><pre>  Your code here...</pre><br/><br/><br/>
        end
      </div>
    </div>
  );
}

export default App;
