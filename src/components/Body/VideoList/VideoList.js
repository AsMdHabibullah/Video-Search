import React from 'react'
import './VideoItem.css';

const VideoList = ({ video, selectVideo }) => {
  return (
    <div>
        <div className="video-items item" onClick = { () => selectVideo(video) }>
            <img
              className="ui image" 
              alt = { video.snippet.title } 
              src={video.snippet.thumbnails.medium.url } 
            />
            <div className="content">
                <div className="header">
                  { video.snippet.title }
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoList;