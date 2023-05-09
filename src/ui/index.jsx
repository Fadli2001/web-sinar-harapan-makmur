import React, { Component } from 'react'
import Navbar from '../components/navbar'
import '../asset/global.css'
import Home from '../pages/home'


export default class Layout extends Component {
  render() {
    return (
      <>            
        <Navbar/>
        <Home/>
      </>
    )
  }
}
