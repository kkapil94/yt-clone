import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { fetchFromApi } from '../utils/fetchFromApi'
import Videos from './Videos'
export default function Feed() {
  const [videos,setVideos] = useState([])
  const [selectedCategory,setSelectedCategory] = useState("New")
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>{setVideos(data.items)})
   
  }, [selectedCategory])
  
  return (
    <>
        <Stack sx={{flexDirection:{sx:"column" , md:"row"},backgroundColor:"#000"}}>
            <Box sx={{height:{sx:"auto" , md:"92vh"},borderRight:"2px solid #3d3d3d",px:{sx:0,md:2}}}>
              <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <Typography className="copyright" variant="body2" sx={{mt:1.5,color:"#fff"}}>copyright 2022 kapil</Typography>
            </Box>
            <Box p={2} sx={{overflowY:"auto",height:"90vh",flex:2}}>
              <Typography variant='h4' sx={{fontWeight:'Bold',mb:'2',color:"white"}}>{selectedCategory}
                <span style={{color:"#F31503"}} > videos </span>
              </Typography>
              <Videos videos={videos}/>
            </Box>
        </Stack>
    </>
  )
}
