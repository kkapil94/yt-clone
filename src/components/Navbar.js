import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {logo} from '../utils/constants'
import SearchBar from './SearchBar'
export default function Navbar() {
  return (
    <Stack p={2} direction="row" alignItems="center" sx={{position:"sticky",backgroundColor:"#000",top:0,justifyContent:"space-between"}}>
        <Link to="/" style={{display:"flex",alignItems:"center"}}>
            <img src={logo} alt="logo" height={45} />
        </Link>
        <SearchBar/>
    </Stack>
  )
}
