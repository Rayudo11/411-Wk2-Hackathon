import React, { Component } from "react";
import axios from "axios";

import './styles/App.css'
import './styles/SortByInput.css'

import "./components/HeaderBar";
import HeaderBar from "./components/HeaderBar";
import SortByInput from "./components/SortByInput";

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
}

export default App;
