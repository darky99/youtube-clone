import React from "react";
// import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

export default function VideoCard(video) {
  console.log("video", video, video.video.thumbnail_url);
  // const demoVideoUrl =
  //   "https://hosted-rephraseai-videos.s3.us-east-1.amazonaws.com/sales_video/LeHJDq3lUPJcnrN9V423LojwTe4Fy2/2117880.mp4";
  const { personalization_id, thumbnail_url, url } = video.video;

  return (
    <div>
      <Card
        sx={{
          width: { xs: "100%", sm: "358px", md: "320px" },
          boxShadow: "none",
          borderRadius: 0
        }}
      >
        <CardMedia
          image={thumbnail_url}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
        <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
          {/* <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}> */}
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            Video Title
          </Typography>
          {/* </Link> */}
        </CardContent>
      </Card>
    </div>
  );
}
