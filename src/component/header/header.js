import React from "react"
import { Link } from 'react-router-dom'
import "./header.css"

export const Header = (props) => {
  return (
    <div className='header'>
      <Link to ="/">
        <h1>home</h1>
      </Link>
      <Link to ="/popular">
        <h1>Popular Movies</h1>
      </Link>
      <Link to ="/rated">
        <h1>Top Rated</h1>
      </Link>
      <Link to ="/playing">
        <h1>Now Playing</h1>
      </Link>


    </div>
  )
}

export default Header