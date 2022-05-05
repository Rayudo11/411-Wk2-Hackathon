import React from 'react'
import '../styles/List.css'

let List = (props) => {

 let apiData = Object.values(props.data) 
 console.log(apiData)

 let getTime = (date) => {
  let today = new Date()
  let currentTime = today.getMinutes()
  let pubDate = date.substr(14,2)
  let timeDifference = 0

  if (pubDate > currentTime) {
   timeDifference = pubDate - currentTime
  } else {timeDifference = currentTime - pubDate}
  
  return (
   <>
   {timeDifference} minutes ago
   </>
  )
 }

    return (
    <ul id="dataUL">
     {apiData.map((item, ix) =>
      <li key={ix} className="mapData">
       <section> 
        <span className='title'>{item.title}</span> <a className='url' href={item.url}>({item.url})</a>
       </section>
       <section className='details'>
        <a className='points'> {item.points} points</a> | 
        <a className='author'> {item.author}</a> | 
        <a className='time'> {getTime(item.created_at)}</a> | 
        <a className='comments'> {item.num_comments} comments</a>
       </section>
      </li>
     )}
  </ul>
    )
}

export default List