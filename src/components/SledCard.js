import React from 'react';
import DogList from './DogList.js';

class SledCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      dogs: props.sled.dogs,
      clicked: false,
      buttonClicked: false
    }
  }

  showDogs = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  toggleGoodDogs = () => {
    this.setState({
      buttonClicked: !this.state.buttonClicked
    })
  }

  render() {
    const goodBois = this.state.clicked ? <DogList clicker={this.toggleGoodDogs} dogs={this.state.dogs} goodBoiToggle={this.state.buttonClicked}/> : null
    return (
      <div>
        <h1>{this.props.sled.name}</h1>
        <img onClick={this.showDogs} src={this.props.sled["image-url"]} style={{"width":"33%"}} />
        { goodBois }
      </div>
    )
  }
}

export default SledCard;
