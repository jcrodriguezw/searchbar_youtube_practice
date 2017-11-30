import React from 'react'

const VideoItemsDetails = ({video}) => {

if(!video) {
		return <h4> Loading... </h4>
	}


	const videoId = video.id.videoId

	const url = `https://www.youtube.com/embed/${videoId}`
	return(
		<div>
			<iframe src={url}> </iframe>
			<div> {video.snippet.title} </div>
			<div> {video.snippet.description}</div>
		</div>
	)	
}

export default VideoItemsDetails;