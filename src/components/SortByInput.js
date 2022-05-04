import React from "react";

import '../styles/SortByInput.css'


function socialMedia(event){
  
 <select>
      <option id='twit'>Twitter</option>
      <option id='face'>facebook</option>
      <option id='mail'>email</option>
  </select>
  
}

const SortByInput = (props) => {
  return(
    <section className="SortBySection">
      <label className="LabelOne">Search</label>
      <select className="SelectOne">
      <option>Stories</option>
      <option>All</option>
      <option>Comments</option>
      </select>
      <label className="LabelTwo">by</label>
      <select className="SelectTwo">
      <option>Date</option>
      <option>Popularity</option>
      </select>
      <label className="LabelThree">for</label>
      <select className="SelectThree">
      <option>Last 24h</option>
      <option>All time</option>
      <option>Past Week</option>
      <option>Past Month</option>
      <option>Past Year</option>
      <option>Custom range</option>
      </select>
      <img src="iconmonstr-share-thin-240.png" alt="sharing is caring" className="ShareImage"></img>
    </section>
    
    
  )  
}

export default SortByInput
