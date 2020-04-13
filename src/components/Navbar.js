import React, { Component } from 'react'
import { Navbar} from 'react-bootstrap'
import './../App.css'
export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img style={{width:"3em"}} src= "https://pngimg.com/uploads/coronavirus/coronavirus_PNG6.png" alt="nav" className="App-logo"/>
                    Covid-19
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Navbar>
            </div>
        )
    }
}
