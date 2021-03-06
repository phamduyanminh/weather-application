import React from 'react';
import './App.css';

import SeasonDisplay from './components/SeasonDisplay'
import Loading from './components/Loading'


class App extends React.Component {
  state = {
    lat: null,
    errorMessage: ''
  }

  componentDidMount(){
    console.log("Rendered to the screen")
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //Call setState for updating
        //NEVER USE this.state.lat
        console.log(position)
        this.setState({lat: position.coords.latitude});
      },
      error => {
        this.setState({errorMessage: error.message})
      }
    );
  }

  renderContent(){
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
          <SeasonDisplay lat={this.state.lat}/>
        </div>
      )
    }

    return <Loading message="Please allow the location request"/>
  }


  render() {
    //Try not to have mutiple return statment inside render
    //put multiple return statments in another function like renderContent()
    return(
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }

}

export default App;
