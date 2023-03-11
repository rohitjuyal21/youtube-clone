import { Box, Stack, Typography } from "@mui/material"
import { Sidebar, Videos } from './index';
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useEffect, useState } from "react";


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() =>{
    fetchFromAPI(`search?q=${selectedCategory}&part=snippet`)
      .then((data) => setVideos(data.items))

    // console.log(videos)
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }}} >

      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
        Copyright 2023 Rohit Juyal
      </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white"}} >
          {selectedCategory} <span style={{ color: '#f31503'}}>videos</span>
        </Typography>

        <Videos videos={videos} />

      </Box>


    </Stack>
  )
}

export default Feed