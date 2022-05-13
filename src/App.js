import React from 'react';
import './App.css';

import SeasonDisplay from './components/SeasonDisplay'


class App extends React.Component {
  constructor(props){
    super(props);

    //This is the ONLY TIME we do direct assignment
    //to this.state
    this.state = {
      lat: null,
      errorMessage: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        //Call setState for updating
        //NEVER USE this.state.lat
        this.setState({lat: position.coords.latitude});
      },
      error => {
        this.setState({errorMessage: error.message})
      }
    );
  }


  render() {
    //Conditional return
    if(this.state.errorMessage && !this.state.lat){
      return(
        <div>
          Error: {this.state.errorMessage}
        </div>
      )
    }

    if(!this.state.errorMessage && this.state.lat){
      return(
        <div>
          Latitude: {this.state.lat}
        </div>
      )
    }

    return <div>Loading...</div>
  }

}

export default App;
