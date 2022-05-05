import React from "react";
import "../styles/SortByInput.css";

function SortByInput(props) {
  const { dropOne, setDropOne, dropTwo, setDropTwo, dropThree, setDropThree } =
    props;

  let handleChange = (e) => {
    setDropOne(document.getElementsByClassName('SelectOne'))
    setDropTwo(document.getElementsByClassName('SelectTwo'))
    setDropThree(document.getElementsByClassName('SelectThree'))
    console.log(e.target);
  };

  return (
    <section className="SortBySection">
      <label className="LabelOne">Search</label>
      <select onChange={handleChange} className="SelectOne">
        <option value="stories">Stories</option>
        <option value='all'>All</option>
        <option value="comments">Comments</option>
      </select>

      <label className="LabelTwo">by</label>
      <select onChange={handleChange} className="SelectTwo">
        <option value="date">Date</option>
        <option value="popularity">Popularity</option>
      </select>

      <label className="LabelThree">for</label>
      <select onChange={handleChange} className="SelectThree">
        <option value="last24">Last 24h</option>
        <option value="allTime">All time</option>
        <option value="pastWeek">Past Week</option>
        <option value="pastMonth">Past Month</option>
        <option value="pastYear">Past Year</option>
        <option value="customRange">Custom range</option>
      </select>

      <img
        src="iconmonstr-share-thin-240.png"
        alt="sharing is caring"
        className="ShareImage"
      ></img>
    </section>
  );
}

export default SortByInput;
