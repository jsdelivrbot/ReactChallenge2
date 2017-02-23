import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

	const videoItems = props.videos.map((video) => {
		return <VideoListItem key={video.etag} video={video} />
	});


	return (
		<ul className="col-lg-12 col-md-12 list-group">
			{videoItems}
		</ul>
	);
}

export default VideoList;