import React, { Component } from 'react'
import { ComposedChart , Line ,CartesianGrid ,YAxis ,XAxis ,Legend ,Tooltip} from 'recharts'
import './../App.css'
class GraphStatewise extends Component {

    
    
    render() {
        const {data , max} = this.props;
        //const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400} ,{name: 'Page A', uv: 600, pv: 2400, amt: 2400} ,{name: 'Page A', uv: 800, pv: 2400, amt: 2400}]
        return (
            <div className = "graph">
                <ComposedChart width={350} height={350} data={data}>
                    <XAxis dataKey="date" />
                    <YAxis  domain={[0, parseInt(max,10)+100]}/>
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey="confirmed" stroke="#ff7300" />                    
                </ComposedChart>
            </div>
        )
    }
}
export default GraphStatewise;