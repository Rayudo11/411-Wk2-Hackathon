import React, { useEffect, useState } from "react";
import List from "./components/List";
import axios from "axios";
import './styles/App.css'
import './styles/SortByInput.css'

import HeaderBar from "./components/HeaderBar";
import SortByInput from "./components/SortByInput";

let App = () => {

 let [apiData, setApiData] = useState([])
 let [searchTerm, setSearchTerm] = useState('')

 useEffect(() => {
  fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story')
  .then(res => res.json())
  .then(data => setApiData(data.hits))
 },[])

 return (
  <div className="App">
   <HeaderBar />
   <SortByInput/>
   <List data={apiData}/>
    </div >
  );

export default App;
