import './App.css';
import React, {useState} from 'react';
import Tabs from './components/Tabs';

function App() {

  const [tabsArray, setTabsArray] = useState([
    {label: "Tab 1", content: "Tab 1 content is showing here"},
    {label: "Tab 2", content: "This is for tab 2"},
    {label: "Tab 3", content: "Tab 3 contains this content"},
  ])

  return (
    <div className="App">
      <h1>Hello</h1>
      <Tabs tabsArray = {tabsArray}/>
    </div>
  );
}

export default App;
