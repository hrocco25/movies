import React from "react"
import { Link } from 'react-router-dom'
import Search from "../../pages/search/search"
import "./header.css"

const Header = (props) => {
  return (
    <div className='header'>
        <button></button><h1>Popular Movies</h1>
        <h1>Top Rated</h1>
        <button onclick={props.play}><h1>Now Playing</h1></button>
        <Search />
    </div>
  )
}

export default Header