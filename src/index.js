import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import { GOOGLE_API_KEY } from '../credentials';

//STEP 1: create new component. this component should produce some html
// const is declaring variable; but misnomver since const is constant
// assigning function
// HTML looking stuff <div></div> is actually JSX but is just javascript
const API_KEY = GOOGLE_API_KEY;

// passing data => callback to YTSearch function

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };
    //initiated by empty array; array of obj hashes
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      console.log(videos);
      this.setState({
        videos,
        //video: videos
        selectedVideo: videos[0]
      });
      // same as this.setState({ videos: videos })
      // when app starts, runs query and
    });
  }


  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
// type of component. its a class not an instance

//STEP 2: take this component's gneerated HTML and put it on the page
// (in the DOM)
// ReactDOM.render(App, target);
// this is passing a class
ReactDOM.render(<App />, document.querySelector('.container'));

//very root of DOM in index.html
// <body>
//   <div class="container"></div>
// </body>
