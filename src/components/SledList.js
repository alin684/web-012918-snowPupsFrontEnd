import React from 'react';
import SledSearch from './SledSearch.js';
import SledCard from "./SledCard"
const URL = 'http://localhost:3000/api/v1/sleds';

export default class SledList extends React.Component {
  state = {
    data: [],
    query: ''
  }

  componentDidMount = () => {
    fetch(URL)
    .then(res => res.json())
    .then(json => this.setState({
      data: json.data
    }))
  }

  handleChange = event => {
    this.setState({
      query: event.target.value.toLowerCase()
    })
  }

  renderSledCards = () => {
    const filteredSleds = this.state.data.filter(sled => sled.attributes.name.toLowerCase().includes(this.state.query))
    return filteredSleds.map(sled => <SledCard key={sled.id} sled={sled.attributes} />)
  }

  render() {
    return (
      <div>
        <SledSearch handleChange={this.handleChange} query={this.state.query} />
        {this.renderSledCards()}
      </div>
    )
  }
}
