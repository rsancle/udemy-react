import React from 'react';
import VideListItem from './video_list_item'

const VideoList = (props) => {
    //videos from app component
    //map is an array iterator
    const videoItems = props.videos.map((video) => {
        return <VideoListItem video = {video} />
    });
    return (
        <ul className = "col-md-4 list-group">
            { videoItems } 
        </ul>
    );
};

export default VideoList;