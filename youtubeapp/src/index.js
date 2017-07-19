import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';
import Header from './components/Header';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBPPyXesJOmb2cj7JAkmX-fPjNaGtKCLMU';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('reactjs for beginner');    
    }

    videoSearch(searchInput){
        YTSearch({key:API_KEY, term: searchInput}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            });
        })
    }

    render(){
        const videoSearch = _.debounce((searchInput) => {this.videoSearch(searchInput)},300);
        return(
            <div>
                <Header onSearchInputChange={ videoSearch }/>
                <VideoDetails video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);