import React from 'react'
import VideoItems from './VideoItems'

const VideoList = (props) => {

	return(
		<ul>
			{props.videos.map((video) => <VideoItems key={video.etag} video={video} onVideoSelect ={props.onVideoSelect}/>)}
		</ul>
	)
}

export default VideoList;