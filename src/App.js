import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChannelDetail from "./components/ChannelDetail";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import SearchFeed from "./components/SearchFeed";
import VideoDetail from "./components/VideoDetail";
function App() {
  return (
    <>
    <BrowserRouter> 
    <Box>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/video/:id" exact element={<VideoDetail/>}/>
        <Route path="/channel/:id" exact element={<ChannelDetail/>}/>
        <Route path="/search/:seacrchTerm" exact element={<SearchFeed/>}/>
      </Routes>
    </Box>
    </BrowserRouter>
    </>
  );
}

export default App;
