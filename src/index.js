import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoPlayer from './components/videoPlayer';

const API_KEY = 'AIzaSyCe6Bn2i3j7EM5rEZEBMwNp6lRTK7svCtc';
// create new component . this component should produce some html code

class App extends Component
{
    constructor(props)
    {
        super(props);

        this.state = { 
            videos:[],
            selectedVideo:null
        };

        this.videoSearch('Phulpakhru');
        
    }

    videoSearch(term)
    {
        YTSearch({key:API_KEY,term:term}, (videos) =>{
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
        });
    }
    render()
    {
        return (
            <div>
                <SearchBar onSearchChange ={term => this.videoSearch(term)}/>
                <VideoPlayer video={this.state.selectedVideo}/>
                <VideoList
                onVideoSelect = {selectedVideo=>this.setState({selectedVideo})} 
                videos = {this.state.videos}/>
            </div>
        );
    }
    
}


// take this components's generated HTML and put this on page

ReactDOM.render(<App />,document.querySelector('.container'));