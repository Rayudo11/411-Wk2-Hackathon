import React from "react";



const App = (props) => {
  return(
    <section id='Sortby'>
    <label name='label1'>Search</label>
    <select>
      <option>Stories</option>
      <option>All</option>
      <option>Comments</option>
    </select>
    <label name='label2'>by</label>
    <select>
      <option>Date</option>
      <option>Popularity</option>
    </select>
    <label name='label3'>for</label>
    <select>
      <option>Last 24h</option>
      <option>All time</option>
      <option>Past Week</option>
      <option>Past Month</option>
      <option>Past Year</option>
      <option>Custom range</option>
    </select>
    <select img='iconmonstr-share-thin-240'>
      <option id='twit'>Twitter</option>
      <option id='face'>facebook</option>
      <option id='mail'>email</option>
    </select>
    </section>
    
    
  )  
}

export default App;
