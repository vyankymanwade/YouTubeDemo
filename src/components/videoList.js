import React from 'react';
import VideoItem from './videoItem';
import { ProgressPlugin } from 'webpack';

const VideoList = (props) =>{

    const videoItems = props.videos.map((video)=>{
        return (
            <VideoItem 
            onVideoSelect = {props.onVideoSelect}
            key = {video.etag} 
            video ={video} />
        );
    });
    return(
        <ul className = "col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;