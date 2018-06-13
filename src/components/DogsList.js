import React, {PureComponent} from 'react'
import request from 'superagent'

export default class DogsList extends PureComponent {
  state = { dogBreeds: null }

  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => console.log(Object.keys(response.body.message)))
      .catch(console.error)
  }

  render() {
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>

        { this.state.dogBreeds === null && 'Loading...' }
      </div>
    )
  }
}
