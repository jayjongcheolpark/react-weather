import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { fetchWeather } from '../actions'
import * as actions from '../actions'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.state = { term: '' }
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault()

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button> 
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)