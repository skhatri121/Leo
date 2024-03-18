import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import VideoPlayer from "../Components/VideoPlayer";
import { Box } from "@chakra-ui/react";
const VideoGalleryPage = () => {
  const videoId = ["zL26gMYBO2s", "tsMGeOmbaO0"];

  return (
    <>
      <Header />
      <Navbar />
      <Box>
        <Box maxW="1200px" m="0 auto">
          {videoId.map((video) => (
            <Box pb="20px">
              <VideoPlayer videoId={video} />
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default VideoGalleryPage;
