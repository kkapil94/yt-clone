import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function SearchBar() {
  const [searchTerm,setSearchTerm] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(searchTerm){
    navigate(`/search/${searchTerm}`)
    setSearchTerm("");}
  }
  return (
    <>
        <Paper component="form" onSubmit={handleSubmit}  sx={{borderRadius:20,boxShadow:"none",pl:2,border:"1px solid #e3e3e3"}}>
            <input className="search-bar" type="text" placeholder='search...'  onChange={(e)=>{setSearchTerm(e.target.value)}}/>
            <IconButton type='submit' sx={{p:"10px",color:"red"}}>
                <Search />
            </IconButton>
        </Paper>
    </>
  )
}
