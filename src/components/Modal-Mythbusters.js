import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MtyhBusters = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>These are the facts.</ModalHeader>
        <ModalBody>
        <ul className="myth_list">
            <li style ={{display:"flex" , marginTop:"5%"}}>
                <div className="myth_icon"><img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/dis_type_1.png" alt=""/></div>
                <div className="myth_text">Cold weather and snow CANNOT kill the CoronaVirus .</div>
            </li>
            <li style ={{display:"flex" , marginTop:"5%"}}>
                <div className="myth_icon"><img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/dis_type_2.png" alt=""/></div>
                <div className="myth_text">Hand dryers are NOT effective in killing the coronavirus.</div>
            </li>
            <li style ={{display:"flex" , marginTop:"5%"}}>
                <div className="myth_icon"><img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/dis_type_3.png" alt=""/></div>
                <div className="myth_text">There is NO evidence that regularly rinsing the nose with saline has protected people from infection with the coronavirus. </div>
            </li>
            <li style ={{display:"flex" , marginTop:"5%"}}>
                <div className="myth_icon"><img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/dis_type_4.png" alt=""/></div>
                <div className="myth_text">The coronavirus CAN be transmitted in areas with hot and humid climates.</div>
            </li>
            <li style ={{display:"flex" , marginTop:"5%"}}>
                <div className="myth_icon"><img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/dis_type_5.png" alt=""/></div>
                <div className="myth_text">Ultraviolet light SHOULD NOT be used for sterilization and can cause skin irritation.</div>
            </li>
            <li style ={{display:"flex" , marginTop:"5%"}}>
                <div className="myth_icon"><img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/dis_type_6.png" alt=""/></div>
                <div className="myth_text">Garlic is healthy but there is NO evidence from the current outbreak that eating garlic has protected people from the coronavirus.</div>
            </li>
            <li style ={{display:"flex" , marginTop:"5%"}}>
                <div className="myth_icon"><img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/dis_type_7.png" alt=""/></div>
                <div className="myth_text">The coronavirus CANNOT be transmitted through mosquito bites.</div>
            </li>
            <li style ={{display:"flex" , marginTop:"5%"}}>
                <div className="myth_icon"><img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/dis_type_8.png" alt=""/></div>
                <div className="myth_text">Thermal scanners CAN detect if people have a fever but CANNOT detect whether or not someone has the coronavirus.</div>
            </li>
            <li style ={{display:"flex" , marginTop:"5%"}}>
                <div className="myth_icon"><img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/dis_type_9.png" alt=""/></div>
                <div className="myth_text">Antibiotics DO NOT work against viruses, antibiotics only work against bacteria.</div>
            </li>
            <li style ={{display:"flex" , marginTop:"5%"}}>
                <div className="myth_icon"><img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/dis_type_10.png" alt=""/></div>
                <div className="myth_text">There is NO evidence that companion animals/pets such as dogs or cats can transmit the coronavirus.</div>
            </li>
            <li style ={{display:"flex" , marginTop:"5%"}}>
                <div className="myth_icon"><img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/dis_type_11.png" alt=""/></div>
                <div className="myth_text">Spraying alcohol or chlorine all over your body WILL NOT kill viruses that have already entered your body.</div>
            </li>
            <li style ={{display:"flex" , marginTop:"5%"}}>
                <div className="myth_icon"><img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/dis_type_13.png" alt=""/></div>
                <div className="myth_text">To date, there is NO specific medicine recommended to prevent or treat the coronavirus.</div>
            </li>
            <li style ={{display:"flex" , marginTop:"5%"}}>
                <div className="myth_icon"><img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/dis_type_14.png" alt=""/></div>
                <div className="myth_text">Taking a hot bath DOES NOT prevent the coronavirus.</div>
            </li>
            <li style ={{display:"flex" , marginTop:"5%"}}>
                <div className="myth_icon"><img src="https://www.mygov.in/sites/all/themes/mygov/images/covid/dis_type_15.png" alt=""/></div>
                <div className="myth_text">Vaccines against pneumonia, such as pneumococcal vaccine and Haemophilus influenzae type b (Hib) vaccine, DO NOT provide protection against the coronavirus.</div>
            </li>
        </ul>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MtyhBusters;