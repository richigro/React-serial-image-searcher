import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


export default class App extends React.Component {
    state = { images: []};
    
    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},    
            headers: {
                    Authorization: 'Client-ID aa10ef6dff3a9a5ed8f40104b040b2aae8d47c2cff635e80cc61e3fd7d9f2a90'
            }
        });
        this.setState({ images: response.data.results});
    }


    render() {
        return(
            <div className="ui container" style={{marginTop: '20px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images.
            </div>
        );
    }
}