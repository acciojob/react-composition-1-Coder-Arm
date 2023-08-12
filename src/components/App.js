
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [tab, setTab] = useState('Tab 1');
  function result(e){
    setTab(e.target.innerText);
  }
  console.log(tab)
  return (
    <div>
      <li onClick={result}>Tab 1</li>
      <li onClick={result}>Tab 2</li>
      <li onClick={result}>Tab 3</li>
      <span>This is the content for <span>{tab}</span></span>
    </div>
  )
}

export default App
