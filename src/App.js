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

 let [dropOne,setDropOne] = useState('')
 let [dropTwo,setDropTwo] = useState('')
 let [dropThree,setDropThree] = useState('')

 let searchData = useRef([])

 useEffect(() => {
  fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story')
  .then(res => res.json())
  .then(data => setApiData(data.hits))
 },[])

//  useEffect(() => {
//   //  let SelectOne = document.getElementsByClassName('SelectOne').innerHTML
//   //  let SelectTwo = document.getElementsByClassName('SelectTwo').innerHTML
//   //  let SelectThree = document.getElementsByClassName('SelectThree').innerHTML
//    console.log('dropOne:',dropOne,'dropTwo:',dropTwo,'dropThree:',dropThree)
//  },[dropOne], [dropTwo], [dropThree])

 useEffect(() => {
  searchData.current = apiData.filter(e => e.title.toLowerCase().includes(searchTerm.toLowerCase()))
 }, [searchTerm])


 return (
  <div className="App">
    
   <HeaderBar 
    state={searchTerm}
    setState={setSearchTerm}
   />
   
   <SortByInput 
    dropOne={dropOne}
    setDropOne={setDropOne}
    dropTwo={dropTwo}
    setDropTwo={setDropTwo}
    dropThree={dropThree}
    setDropThree={setDropThree}
   />

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




