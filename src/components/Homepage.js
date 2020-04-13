import React, { Component } from 'react';
import Axios from 'axios';
import './../App.css';
import NavBar from './components/Navbar';
import TABLE from './components/table';
import Dashboard from './components/dashboard';


class Homepage  extends Component {


  constructor(props){
    super(props);
    this.state={
        data: []
    }
  }


  componentDidMount(){
    Axios.get('https://novel-corona.herokuapp.com/api/covid-19/state')
        .then(response =>{
            const data = response.data;
            this.setState({data})
        })
}
  render (){
    return (
      <div className="App">
        <div style={{transitionDelay:"0.2s"}}>
          <NavBar/>
        </div>
        <Dashboard/>
        
        <TABLE data = {this.state.data} />
      </div>
    )
  }
  
}

export default Homepage;
