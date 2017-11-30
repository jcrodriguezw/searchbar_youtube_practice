import React from 'react'
import VideoItemsDetails from './VideoItemsDetails'

const VideoItems = ({video, onVideoSelect}) => {

	
	const imageURL = video.snippet.thumbnails.default.url
	return(
		
			<li onClick={ () => onVideoSelect(video)} > 
				<img src={imageURL}/> 
				<div>{video.snippet.title} </div>
			</li>
		
	)
}

export default VideoItems;