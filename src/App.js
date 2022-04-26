import React, { Component } from "react";
import axios from 'axios';

import './styles/App.css'

import './components/HeaderBar'
import HeaderBar from "./components/HeaderBar";

class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      arrayOfStories: [],
    }
  }

  componentDidMount(){
    axios.get("https://hn.algolia.com/api").then((res) => {
      const arrayOfStories = res.data;
      this.setState({arrayOfStories});

    });
  };

  render(){
    return (
      <div className="App">
      <HeaderBar/>
    </div>
  );
  }
  
}

export default App;
