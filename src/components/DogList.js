import React from 'react';
import DogItem from "./DogItem"

class DogList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dogs: props.dogs
    }
  }

  renderDoggos = () => {
    const goodDogs = this.state.dogs.filter(dog => dog.isGoodDog === 't')
    return this.props.goodBoiToggle? goodDogs.map(dog => {
      return <DogItem key={dog.id} dog={dog} />
    }) : this.state.dogs.map(dog => {
     return <DogItem key={dog.id} dog={dog} />
     })
  }

  render(){
    return (
      <div>
        <button onClick={this.props.clicker}>Who's A Good Boi(se)?</button>
        {this.renderDoggos()}
    </div>
    )
  }
}

export default DogList;
