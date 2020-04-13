import React, { Component } from 'react'
import Axios from 'axios';
import { Jumbotron } from 'reactstrap';
import Graph from './graph';
import MtyhBusters from './Modal-Mythbusters';
import ModalTable from './Modal-Table'
import { Card } from 'react-bootstrap';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            active: '',
            cured : '',
            death :'',
            migrated:'',
            graphdata : [],
            gotLocation : false,
            found : {},
            dist : ''
        }
        this.location = this.location.bind(this);
        this.find = this.find.bind(this);
      }
    async componentDidMount(){
        await Axios.get('https://novel-corona.herokuapp.com/api/covid-19/status-count')
            .then(response =>{
                this.setState({active :response.data[0].Active , cured:response.data[0].cured , death :response.data[0].death , migrated:response.data[0].migrated});
            })
            .catch( console.error)

        this.location();
    }


    location(){
        navigator.geolocation.getCurrentPosition((pos =>{
            var crd = pos.coords;
            const payload =  {Latitude : crd.latitude , Longitude :crd.longitude} 
            
            Axios.post('https://novel-corona.herokuapp.com/api/covid-19/geodata' , payload)
                .then(res =>{                    
                    this.setState({statedata : res.data , gotLocation:true})
                    this.find(res.data.state)
                })
            var url = "https://script.google.com/macros/s/AKfycbwqcrVhD9D6Oi2aIi9EG16ks3hLjbJqag_jznwxqpY88xdoBQun/exec?lat=" + crd.latitude +"&long="+crd.longitude;
            Axios.get(url)
                .then(result => this.setState({dist : result.data}))
        }), (err =>{
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }));
        
    }

    find(data){
        if(data ==="Telangana"){
            data = "Telengana"
        }
        console.log(data);
        const item = this.props.data;
        item.map(res =>{
            if(data === res.state){
                this.setState({found:res})
            }
            return(0)
        })
    }


    render() {
        const {active , cured , death , migrated , found} = this.state;
        const {data} = this.props;

        const disp_data = (
            <div style={{marginTop:"2%"}}>
                <Card>
                    <Card.Title>{found.state} covid data</Card.Title>
                    <Card.Body>
                        <Card.Text style={{color:"magenta"}}>Acive {found.total} </Card.Text>
                        <Card.Text style={{color:"green"}}>Cured {found.recovered} </Card.Text>
                        <Card.Text style={{color:"red"}}>Death {found.died} </Card.Text>
                        <Card.Text style={{color:"red"}}>You are approximatly : {parseFloat(this.state.dist).toFixed(2)} KM away form where last corona case was found</Card.Text>
                    </Card.Body>
                    <Card.Footer style={{color:"red"}}>We request you to be in home</Card.Footer>
                </Card>
            </div>
        )
        const nothing =(
            <div>

            </div>
        ) 
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Stats</h1>
                    <p className="lead">
                       <div style={{display:"grid" , marginTop:"2%"}}>
                            <span style={{marginTop:"2%"}} className="border font-weight-bolder rounded border-primary rounded-pill">
                                Active Cases : {active}
                            </span>
                            <span style={{marginTop:"2%"}} className="border font-weight-bolder border-danger rounded-pill">Total death : {death}</span>
                            <span style={{marginTop:"2%"}} className="border font-weight-bolder border-success rounded-pill">Recovered : {cured}</span>
                            <span style={{marginTop:"2%"}} className="border font-weight-bolder border-info rounded-pill">Migrated : {migrated}</span>
                        </div>
                    </p>
                    <hr className="my-2" />
                    <p>The data displayed on this site is taken from www.mohfw.gov.in</p>
                    <hr className="my-2" />
                    <h6>There is a lot of false information around. These are the facts.</h6>
                    <p style={{fontSize:"0.8em"}}> People of all ages CAN be infected by the coronavirus. Older people, and people with pre-existing medical conditions (such as <strong>asthma</strong>, <strong>diabetes</strong>, <strong>heart</strong> disease) appear to be more vulnerable to becoming severely ill with the virus.</p>
                    <p className="lead">
                        <MtyhBusters buttonLabel="Myth Busters" />
                    </p>
                </Jumbotron>
                <Graph max = {this.state.active}/>
                {this.state.gotLocation ? disp_data : nothing}
                <div style={{marginTop:"2%" , marginBottom:"2%"}}>
                    <ModalTable buttonLabel="Show Details Statewise" data = {data}/>
                </div>
            </div>
        )
    }
}
export default Dashboard;