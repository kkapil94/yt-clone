import { Box,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi'
import Videos from './Videos'
export default function Feed() {
  const [videos,setVideos] = useState([])
  const {searchTerm} = useParams() 
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>{setVideos(data.items)})
   
  }, [searchTerm])
  
  return (
    <>
            <Box p={2} sx={{overflowY:"auto",height:"90vh",flex:2}}>
              <Typography variant='h4' sx={{fontWeight:'Bold',mb:'2',color:"white"}}>
                search results for:
                <span style={{color:"#F31503"}} >{searchTerm}</span>videos
              </Typography>
              <Videos videos={videos}/>
            </Box>
    </>
  )
}

