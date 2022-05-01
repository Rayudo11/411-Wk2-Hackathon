import React from 'react'
import '../styles/LogoLink.css'
import '../styles/LogoImg.css'

function LogoLink() {
  return (
    <a className='LogoLink' href="https://news.ycombinator.com/"><img className='LogoImg' src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png" alt="Logo" /></a>
  )
}

export default LogoLink