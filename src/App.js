<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import List from "./components/List";
=======
import React, { Component } from "react";
import axios from "axios";

>>>>>>> 2188add7ca20912d7d7f23b0075cd430e53a444c
import './styles/App.css'
import './styles/SortByInput.css'

import "./components/HeaderBar";
import HeaderBar from "./components/HeaderBar";
import SortByInput from "./components/SortByInput";

<<<<<<< HEAD
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
=======
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayOfStories: [],
      searchTerm: "",
    };
  }


  componentDidMount() {
    axios.get('https://hn.algolia.com/api/v1/search?query=...')
    .then((res) => {
      const arrayOfStories = res.data.hits
      this.setState({ arrayOfStories })
    })
  }
 
    render() {
      return (
      <div className="App">
      <HeaderBar/>
      <SortByInput/>
     

    </div>
  );

  }
>>>>>>> 2188add7ca20912d7d7f23b0075cd430e53a444c
}

export default App;
