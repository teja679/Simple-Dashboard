import React from 'react'
import './styles.css'
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { motion } from "framer-motion"

const Search = () => {
  return (
    <div className='search-wrapper'>
        <motion.h1 
       initial={{ x: -10,}}
       animate={{ x: 10, }}
       transition={{
         type: "smooth",
         repeatType: "mirror",
         duration: 2,
         repeat: Infinity,
       }}
        // initial={{ opacity: 0, x: -50 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // viewport={{ once: true }}

        >Good Morning, Teja</motion.h1>
        <motion.div className="search-input"
         animate={{
          scale: [0.2, 1.2, 1.2, 0.8, 1],
        }}
        >
            <SearchRoundedIcon sx={{ color: "var(--grey)" }} />
            <input type="text" placeholder="Search" />
        </motion.div>
    </div>
  )
}

export default Search