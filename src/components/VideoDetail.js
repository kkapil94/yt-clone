import { CheckCircle } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi'
import Videos from './Videos'
export default function VideoDetail() {
  const {id} = useParams()
  const [videoDetail,setVideodetail] = useState()
  const [videos, setVideos] = useState()
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>{setVideodetail(data.items[0])})
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=>{setVideos(data.items)})
  }, [id])
  if(!videoDetail?.snippet) return "loading...";
  const {snippet:{title,channelId,channelTitle} , statistics:{viewCount,likeCount}} = videoDetail
  return (
    <>
    <Box minHeight="95px" backgroundColor='#000'>
      <Stack direction={{xs:'column',md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%',position:'sticky',top:'86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
            <Typography color="#fff" variant="h5" p={2} fontWeight="bold">{title}</Typography>
            <Stack direction='row' justifyContent="space-between" sx={{color:'#fff'}} py={1} px={2}>
            <Link to={`/channel/${channelId}`}>
              <Typography variant={{xs:'subtitle1',md:'h6'}} color='#fff'>
                {channelTitle}
              </Typography>
              <CheckCircle fontsize='12px' color="gray" ml='5px'/>
            </Link>
            <Stack direction="row" alignItems='center' gap='20px' color="#fff">
              <Typography variant='body1' sx={{opacity:".7"}}>
                {parseInt(viewCount).toLocaleString()}views
              </Typography>
              <Typography variant='body1' sx={{opacity:".7"}}>
                {parseInt(likeCount).toLocaleString()}likes
              </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      <Box px={2} py={{md:1,xs:5}} justifyContent='center' alignItems='center'>
        <Videos videos={videos} direction="column"/>
      </Box>
      </Stack>
    </Box>
    </>
  )
}
