import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyBUW-2wjWAGxUp4VgoGIcvvDGqHGgZeaGU'

YTSearch({key:API_KEY, term: 'surfboards'}, function (data) {
	console.log(data)
})



class App extends Component {
  render() {
    return (
      <div>
         <p> desde app </p>
      </div>
    );
  }
}

export default App;
