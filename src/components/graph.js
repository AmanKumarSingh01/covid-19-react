import React, { Component } from 'react'
import { ComposedChart ,Area , Bar , Line ,CartesianGrid ,YAxis ,XAxis ,Legend ,Tooltip} from 'recharts'
import Axios from 'axios'
import './../App.css'
class Graph extends Component {

    constructor(props){
        super(props);
        this.state={
            graphdata:[]
        }
    }
    
    async componentDidMount(){
        await Axios.get('https://novel-corona.herokuapp.com/api/covid-19/')
                .then(res =>{
                    this.setState({graphdata : res.data.cases_time_series})
                })
                .catch( console.error)
    }
    
    render() {
        const {graphdata} = this.state;
        const {max} = this.props;
        //const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400} ,{name: 'Page A', uv: 600, pv: 2400, amt: 2400} ,{name: 'Page A', uv: 800, pv: 2400, amt: 2400}]
        return (
            <div className = "graph">
                <ComposedChart width={350} height={350} data={graphdata}>
                    <XAxis dataKey="date" />
                    <YAxis  domain={[0, parseInt(max,10)+2000]}/>
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey="totalconfirmed" stroke="#ff7300" />
                    <Area type="monotone" dataKey="dailyconfirmed" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="totalrecovered" barSize={20} fill="#413ea0" />
                    
                </ComposedChart>
            </div>
        )
    }
}
export default Graph;