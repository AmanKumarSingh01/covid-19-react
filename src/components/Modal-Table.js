import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'react-bootstrap';
const ModalTable = (props) => {
  const {
    buttonLabel,
    className,
    data
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Statewise Data</ModalHeader>
        <ModalBody>
            {window.innerWidth<=699 ? small_device : lagre_device}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalTable;