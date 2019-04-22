import React, { Component } from 'react';
import SearchItem from './Search/SearchItem';
import Youtube from './Api/Youtube';
import Videos from './VideoList/Videos';
import VideoDetails from './content/VideoDetails';


class Body extends Component {


  state = {
    videos : [],
    selectVideo : null,
  };

  componentDidMount(){
    this.onsearchItem('Ustad Nouman Ali Khan');
  };

  onsearchItem = async searchItem => {
    const response = await Youtube.get('/search', {
      params:{
        q : searchItem
      }
    });

  this.setState({
    videos : response.data.items,
    selectVideo : response.data.items[0]
  });
    
  }

  onSelectVideo = video => {
    this.setState({
      selectVideo : video,
    });
  }


  render() {
    return (
      <div className="ui container">
        <SearchItem onsearchItem = { this.onsearchItem }/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails
                video = { this.state.selectVideo }
              />
            </div>
            <div className="five wide column">
              <Videos
                selectVideo = { this.onSelectVideo }
                videos = { this.state.videos }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Body;