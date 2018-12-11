import React, { Component } from 'react';
import Album from './Album.jsx';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Album/>
        <Button variant="contained" color="primary">Hello World</Button>
      </React.Fragment>
      
    )
  }
}

export default App;