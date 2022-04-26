import React, { useState, useEffect} from 'react'

import LogoLink from './LogoLink'
import SearchBarInput from './SearchBarInput'

import '../styles/HeaderBox.css'

function HeaderBar(props) {



  return (
    <header className='HeaderBox'>
      <LogoLink/>
      <h3 id='SearchLabel'>Search
      <br/>
       Hacker News</h3>
       <SearchBarInput/>
    </header>
  )
}

export default HeaderBar