import React, { useEffect, useState } from "react";
import List from "./components/List";
import './styles/App.css'

import './components/HeaderBar'
import HeaderBar from "./components/HeaderBar";

let App = () => {

 let [apiData, setApiData] = useState([])

 useEffect(() => {
  fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story')
  .then(res => res.json())
  .then(data => setApiData(data.hits))
 },[])

 return (
  <div className="App">
   <HeaderBar />
   <List data={apiData}/>
    </div >
  );
}

export default App;
