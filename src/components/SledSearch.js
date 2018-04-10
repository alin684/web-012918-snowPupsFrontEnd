import React from 'react';

class SledSearch extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <input type="text" onChange={this.props.handleChange} value={this.props.query}/>
    )
  }
}

export default SledSearch;
