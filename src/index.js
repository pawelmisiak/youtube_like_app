import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//youtube api key
const API_KEY = 'AIzaSyCxWaK46Teulqbb3-sFQRMhrk1mpABoS5w';

//create a new component.
class App extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    // fat arrow is the same as this.setState({videos: videos})
    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({
      videos: videos,
      selectedVideo: videos[0],
     });
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        {/* passing props to the child */}
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    );
  }
}

//take this component and generate html

ReactDOM.render(<App />, document.querySelector('.container'));
