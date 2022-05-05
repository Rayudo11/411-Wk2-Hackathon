import React, { useEffect, useState, useRef } from "react";
import List from "./components/List";
import axios from "axios";
import './styles/App.css'
import './styles/SortByInput.css'

import HeaderBar from "./components/HeaderBar";
import SortByInput from "./components/SortByInput";

let App = () => {

 let [apiData, setApiData] = useState([])
 let [searchTerm, setSearchTerm] = useState('')
 let searchData = useRef([])

 useEffect(() => {
  fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story')
  .then(res => res.json())
  .then(data => setApiData(data.hits))
 },[])


 useEffect(() => {
  searchData.current = apiData.filter(e => e.title.toLowerCase().includes(searchTerm.toLowerCase()))
  
 }, [searchTerm])


console.log(searchData, 'im the search data array')

 return (
  <div className="App">
   <HeaderBar 
    state={searchTerm}
    setState={setSearchTerm}
   />
   <SortByInput/>
   {
    searchTerm.length > 0 ? 
    <List data={searchData.current} />
    :
    <List data={apiData}/>  
   }
    </div >
  );
 }

export default App;




