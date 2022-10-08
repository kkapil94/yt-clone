import { Box, Stack } from '@mui/material'
import React from 'react'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

export default function Videos({videos,direction}) {
  if(!videos?.length) return 'LocalDining...'
  return (
    <Stack direction={direction ||"row"} flexWrap="wrap" justifyContent="flex-start" gap={2}>
        {videos.map((items,idx)=>(
            <Box key={idx}>
                {items.id.videoId && <VideoCard video={items}/>}
                {items.id.channelId && <ChannelCard channelDetail={items}/>}
            </Box>
        ))

        }
    </Stack>
  )
}
