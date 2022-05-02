import React, { Component } from "react";
import axios from "axios";

import "./styles/App.css";

import "./components/HeaderBar";
import HeaderBar from "./components/HeaderBar";

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
        <HeaderBar />
        {/* map over this,state.arrayOfStories */}
        <ol>{this.state.arrayOfStories.map((hit, i) => {
          return (
            <li key={i}>
              <h5>{hit.title}</h5>
              </li>
          )
        })}</ol>
      </div>
    );
  }
}

export default App;
