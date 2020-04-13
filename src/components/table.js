import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

class TABLE extends Component {
    render() {
        const {data} = this.props;
        var i =0;
        const lagre_device  = (
            <Table striped bordered hover size    responsive="lg" >
                <thead>
                    <tr>
                    <th>S.No</th>
                    <th>State</th>
                    <th>Active cases</th>
                    <th>Recovered</th>
                    <th>Died</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(res => (
                        <tr>
                        <td>{i=i+1}</td>
                        <td>{res.state}</td>
                        <td>{res.total}</td>
                        <td>{res.recovered}</td>
                        <td>{res.died}</td>
                      </tr>
                      
                    ))}
                </tbody>
                </Table>
        )

        const small_device = (
            <Table striped bordered hover size    responsive="lg" >
                <thead>
                    <tr>
                    <th>State</th>
                    <th>Active cases</th>
                    <th>Recovered</th>
                    <th>Died</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(res => (
                        <tr>
                        <td>{res.state}</td>
                        <td>{res.total}</td>
                        <td>{res.recovered}</td>
                        <td>{res.died}</td>
                      </tr>
                      
                    ))}
                </tbody>
                </Table>
        )
        return (
            <div>
                <h3 style={{marginTop:"2%" , marginBottom:"2%"}}>Statewise Trends</h3>
                {window.innerWidth<=699 ? small_device : lagre_device}
            </div>
        )
    }
}
export default TABLE;