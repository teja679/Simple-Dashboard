import React from 'react'
import './styles.css'
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { motion } from "framer-motion"

const Search = () => {
  return (
    <div className='search-wrapper'>
        <motion.h1 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}

        >Good Morning, Teja</motion.h1>
        <div className="search-input">
            <SearchRoundedIcon sx={{ color: "var(--grey)" }} />
            <input type="text" placeholder="Search" />
        </div>
    </div>
  )
}

export default Search