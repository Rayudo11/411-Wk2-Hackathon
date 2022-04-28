import React, { useEffect, useState } from "react";
import axios from 'axios';
import List from "./components/List";

import './styles/App.css'

import './components/HeaderBar'
import HeaderBar from "./components/HeaderBar";

let App = () => {

 let [apiData,setApiData] = useState([])

 // let getData = async () => {
 //  let url = 'https://hn.algolia.com/api/v1/search_by_date?tags=story'
 //  let qry = (await (axios.get(url))).data.hits
 //  setApiData(qry)
 // }

 useEffect(() => {
  // getData()
  fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story').then(res => res.json()).then(data => setApiData(data.hits))
 },[])

 useEffect(() => {
  console.log(apiData)
 },[apiData])

    return (
      <div className="App">
      <HeaderBar/>
      <ul>
      {apiData.length !== 0 && apiData.map((story,ix) => {
        <li key={ix}>{story.title}</li>
      })}
     </ul>
      {/* <List data={apiData}/> */}
    </div>
  );
}

export default App;
