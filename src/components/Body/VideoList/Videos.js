import React from 'react';
import VideoList from './VideoList';

const Videos = ({ videos, selectVideo }) => {

  const videoList = videos.map((video) => {
    return (
      <VideoList
        key = { video.id.videoId }
        selectVideo = { selectVideo }
        video = {video}
      />
    )
  });

  return (
  <div className="ui relaxed divided list">
    { videoList }
  </div>
  )
}


export default Videos;