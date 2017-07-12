import React, { Component } from 'react';
import accessToken from './accessTokenizer';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';


import './App.css';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  search() {
      console.log("this.state", this.state);
      const BASE_URL = "https://api.spotify.com/v1/search";
      const FETCH_URL = `${BASE_URL}?q=${this.state.query}&type=artist&limit=1`;
      console.log('FETCH_URL', FETCH_URL);
      fetch(FETCH_URL, {
        method: 'GET',
        headers: {
         'Authorization': 'Bearer ' + accessToken()
        }
      }).then(response => response.json())
        .then(json => console.log('response', json));
  }

  render() {
    return(
      <div className="app">
        <div className="app-title">Music Master App</div>

        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an artist..."
              value={this.state.query}
              onChange={event => {this.setState({ query: event.target.value})}}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>

        <div className="artist-profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>

        <div className="gallery">
          Gallery up Here!
        </div>
      </div>
    )
  }
};

export default App;
