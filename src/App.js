import React, { Component } from 'react';
import _ from 'lodash'
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
		this.videoSearch('surfboards')
}

		videoSearch(term) {
			YTSearch({key:API_KEY, term: term},  (data) => {
			this.setState({
				videos: data,
				selectedVideo: data[0]
			})
			
		})
		

		

	}

  render() {

  	const videoSearch = _.debounce((term)=> {this.videoSearch(term)},300)
    return (
      <div>
         <SearchBar  onSearchTerm={videoSearch} />
         <VideoItemsDetails video={this.state.selectedVideo}/>
         <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}

export default App;
