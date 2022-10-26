import React from 'react'
import './styles.css'
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Search = () => {
  return (
    <div className='search-wrapper'>
        <h1>Good Morning, Teja</h1>
        <div className="search-input">
            <SearchRoundedIcon sx={{ color: "var(--grey)" }} />
            <input type="text" placeholder="Search" />
        </div>
    </div>
  )
}

export default Search