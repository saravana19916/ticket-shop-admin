
import { ButtonGroup, Card, Button } from 'react-bootstrap';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment } from 'react';

import { toast, Toaster } from 'react-hot-toast';
const Notifications = () => {

  //Default
  const success = () => toast('Success: Weldone Details Submitted Successfully', {
    style: {
      padding: '16px',
      color: '#fff',
      backgroundColor:'#29bf74',
    },
    position:'top-right',
  });
// center
const center = () => toast('Oops! An Error Occured', {
  style: {
    padding: '16px',
    color: '#fff',
    backgroundColor:'#e82646',
  },
  position:'top-center',
});
// left
const left = () => toast('Warning: Something Went Wrong', {
  style: {
    padding: '16px',
    color: '#fff',
    backgroundColor:'#ffc107',
  },
  position:'top-left',
});
// left
const info = () => toast('Info: Some info here', {
  style: {
    padding: '16px',
    width:'500px',
    color: '#fff',
    backgroundColor:'#1170e4',
  },
  position:'top-center',
});
// left
const danger = () => toast('Error: This error will stay here until you click it', {
  style: {
    padding: '16px',
    color: '#fff',
    backgroundColor:'#ff5b51',
  },
  position:'top-center',
});
// left
const warning = () => toast('Opacity is cool!', {
  style: {
    padding: '16px',
    width:'500px',
    color: '#fff',
    backgroundColor:'#ffc720',
  },
  position:'top-center',
});
// success left
const successLeft = () => toast('Notice! : You have 4 notification', {
  style: {
    padding: '16px',
    width:'500px',
    color: '#fff',
    backgroundColor:'#29bf74',
  },
  position:'top-right',
});
// warningLeft
const warningLeft = () => toast('Warning! Read all details carefully ', {
  style: {
    padding: '16px',
    width:'500px',
    color: '#fff',
    backgroundColor:'#ffc720',
  },
  position:'top-right',
});
// dangerLeft
const dangerLeft = () => toast('Error! Please check your details...file is missing', {
  style: {
    padding: '16px',
    width:'500px',
    color: '#fff',
    backgroundColor:'#ff5b51',
  },
  position:'top-right',
});
// gradientSuccess
const gradientSuccess = () => toast('Notice! : You have 4 notification', {
  style: {
    padding: '16px',
    width:'500px',
    color: '#fff',
    backgroundColor:'#29bf74',
  },
  position:'top-right',
});
// gradientWarning
const gradientWarning = () => toast('Warning! Read all details carefully', {
  style: {
    padding: '16px',
    width:'500px',
    color: '#fff',
    backgroundColor:'#ffc720',
  },
  position:'top-right',
});
// gradientDanger
const gradientDanger = () => toast('Error! Please check your details...file is missing', {
  style: {
    padding: '16px',
    width:'500px',
    color: '#fff',
    backgroundColor:'#ff5b51',
  },
  position:'top-right',
});
 
  return (

    <Fragment>
      <PageHeader titles="Notification" active="Notification" items={['Apps']} />
      <div className="row">
        <div className="col-md-12">
          <Card>
            <Card.Header>
              <Card.Title>Alerts Notifications</Card.Title>
            </Card.Header>
            <Card.Body>
               <div className="btn-list">
      <Button variant='success' className='me-1' onClick={success}>default</Button>
      <Button variant='secondary' className='me-1' onClick={center}>center</Button>
      <Button variant='warning' className='me-1' onClick={left}>left</Button>
      <Button variant='info' className='me-1' onClick={info}>Center info</Button>
      <Button variant='danger' className='me-1' onClick={danger}>Center Error</Button>
      <Button variant='warning' className='me-1' onClick={warning}>Center warning</Button>
      <Toaster />
    </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Side Alerts Notifications</Card.Title>
            </Card.Header>
            <Card.Body>
            <ButtonGroup>
               <div>
                <Button className='me-2' variant='success' onClick={successLeft}>Success</Button>
                <Button className='me-2' variant='warning' onClick={warningLeft}>warning</Button>
                <Button className='me-2' variant='danger' onClick={dangerLeft}>Danger</Button>
                <Toaster />
                </div>
                </ButtonGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Gradient Side Alerts Notifications</Card.Title>
            </Card.Header>
            <Card.Body>
            <ButtonGroup>
               <div>
                <Button className='me-2' variant="success-gradient" onClick={gradientSuccess}>Success</Button>
                <Button className='me-2' variant="warning-gradient" onClick={gradientWarning}>Warning</Button>
                <Button className='me-2' variant="danger-gradient" onClick={gradientDanger}>Danger</Button>
                <Toaster />
                </div>
                </ButtonGroup>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Fragment>
  );
};
export default Notifications;

