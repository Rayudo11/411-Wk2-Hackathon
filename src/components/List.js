import React from 'react'

let List = (props) => {

 let apiData = Object.values(props.data) 

 console.log(apiData)

  // if (props.data.length === 0) {
  //   return null
  //  }
  //  else {
    return (
     <ul>
      {props.data.length === 0 ? null : apiData.map((story,ix) => {
        <li>{story.title}</li>
      })}
     </ul>
    )
   // }
}

export default List