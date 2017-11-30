import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoItemsDetails from './components/VideoItemsDetails'
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyBUW-2wjWAGxUp4VgoGIcvvDGqHGgZeaGU'




class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			videos:[],
			selectedVideo: null
		}

		YTSearch({key:API_KEY, term: 'surfboards'},  (data) => {
			this.setState({
				videos: data,
				selectedVideo: data[0]
			})
			
		})

	}

  render() {
    return (
      <div>
         <SearchBar />
         <VideoItemsDetails video={this.state.selectedVideo}/>
         <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}

export default App;
