import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {demoVideoUrl,demoChannelUrl,demoChannelTitle, demoVideoTitle} from "../utils/constants"
export default function VideoCard({video:{id:{videoId},snippet}}) {
  console.log(videoId,snippet)
  return (
    <>
      <Card sx={{width:{xs:"100%",sm:'358px',md:"320px"},boxShadow:'none',borderRadius:0}}>
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
          <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width:{xs:'100%',sm:'358px',md:'320px'},height:180}}/>
        </Link>
        <CardContent sx={{background:"#1e1e1e",height:160}}>
        <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
            <Typography variant='subtitle1' sx={{fontWeight:"bold",color:"#fff"}}>
              {snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)}
            </Typography>
        </Link>
        <Link to={snippet.channelId? `/channel/${snippet?.channelId}`:demoChannelUrl}>
            <Typography variant='subtitle2' sx={{fontWeight:"bold",color:"gray"}}>
              {snippet?.channelTitle||demoChannelTitle}
              <CheckCircle sx={{fontSize:12,color:"gray",ml:"5px"}}/>
            </Typography>
        </Link>
        </CardContent>
      </Card>
    </>
  )
}
