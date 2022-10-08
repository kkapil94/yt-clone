import React, { useEffect, useState } from 'react'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi'
import { Box } from '@mui/system'
export default function ChannelDetail() {
  const [channelDetail,setchannelDetail] = useState(null)
  const [videos,setVideos] = useState([])
  const {id} = useParams()
  useEffect(() => {
  fetchFromApi(`channels?part=snippet&id=${id}`)
  .then((data)=>setchannelDetail(data?.items[0]))

  fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
  .then((data) => setVideos(data?.items));
  }, [id])
  return (
    <>
      <Box minHeight="95vh" backgroundColor="#000">
        <Box style={{backgroundImage: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",height:'300px',zIndex:10}}>
        </Box>
          <ChannelCard channelDetail={channelDetail} marginTop={"-110px"}/>
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{mr:{sm:"100px"}}}></Box>
        <Videos videos={videos}/>
      </Box>
    </>
  )
}
