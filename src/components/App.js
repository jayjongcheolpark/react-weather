import React from 'react'
import SearchBar from '../containers/SearchBar'
import WeatherList from '../containers/WeatherList'
import '../styles/style.css'

function App(props) {
  return (
    <div>
      <SearchBar />
      <WeatherList />
    </div>
  )
}

export default App