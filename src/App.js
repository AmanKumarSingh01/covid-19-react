import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import NavBar from './components/Navbar';
import Dashboard from './components/dashboard';

class App  extends Component {


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
      <div className="App app" >
        <div id = "aman"></div>
        <div style={{transitionDelay:"0.2s"}}>
          <NavBar/>
        </div>
        <Dashboard data ={this.state.data}/>

        <div style={{backgroundColor:"#212121" , position:"bottom" , height:"60px" , bottom:"0px" , left:"0px" , lineHeight:"50px" , color:"#aaa" , textAlign:"center" , width:"100%"}}>
           Made with love 	&#10084;
        </div>
      </div>

    )
  }
  
}

export default App;