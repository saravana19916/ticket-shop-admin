import { FC, Fragment,  useState } from 'react';
import { Card, Row, Col, Alert, Form, Collapse, Tabs, Tab } from 'react-bootstrap';
import PageHeader from '../../../layouts/layoutcomponents/pageheader';
import { Link } from 'react-router-dom';
import { Imagesdata } from '../../../commondata/commonimages';

interface BootstrapAlertsProps { }

const BootstrapAlerts: FC<BootstrapAlertsProps> = () => {
  // CARD 01
  const [show, setShow] = useState(true);
  // CARD 02
  const [show1, setShow1] = useState(true);
  //CARD 03
  const [show2, setShow2] = useState(true);
  // CARD 04
  const [show3, setShow3] = useState(true);
  //Default alerts
interface DefaultAlertLists {
  id:string
  variant:string
  text:string
}
const DefaultAlertList:DefaultAlertLists[] = [
  {
    id: "1",
    variant: "primary",
    text: "Primary alert—At vero eos et accusamus praesentium!",
  },
  {
    id: "2",
    variant: "secondary",
    text: " Secondary alert—At vero eos et accusamus praesentium!",
  },
  {
    id: "3",
    variant: "success",
    text: " Success alert—At vero eos et accusamus praesentium!",
  },
  {
    id: "4",
    variant: "info",
    text: "Info alert—At vero eos et accusamus praesentium!",
  },
  {
    id: "5",
    variant: "warning",
    text: "Warning alert—At vero eos et accusamus praesentium!",
  },
  {
    id: "6",
    variant: "danger",
    text: "Danger alert—At vero eos et accusamus praesentium!",
  },
];

  const [open, setOpen] = useState(false);
  //Link in alerts
interface LinkAlertLists{
  id:string
  show:string
  variant:string
  text1:string
  text2:string
  text:string
  text3:string
}
  const LinkAlertList:LinkAlertLists[] = [
    {
      id: "1",
      show: 'Well done!',
      variant: "primary",
      text1: " You successfully read",
      text2: 'this important alert message.',
      text:'',
      text3:''
    },
    {
      id: "2",
      show: 'Well done!',
      variant: "secondary",
      text1: " You successfully read",
      text2: 'this important alert message.', 
      text:'',
      text3:''
    },
    {
      id: "3",
      show: 'Well done!',
      variant: "success",
      text1: " You successfully read",
      text2: 'this important alert message.',
      text:'',
      text3:''
    },
    {
      id: "4",
      show: 'Heads up!',
      variant: "info",
      text: "This",
      text2: 'alert needs your attention,',
      text3: 'but its not super important.',
      text1:''
    },
    {
      id: "5",
      show: 'Warning!',
      variant: "warning",
      text: "Better check yourself, youre",
      text2: 'not looking too good.',
      text3:'',
      text1:''
    },
    {
      id: "6",
      show: 'Oh snap!',
      variant: "danger",
      text: "Change a few things up",
      text2: 'and try submitting again.',
      text3:'',
      text1:''
    },
  ];

    const [open1, setOpen1] = useState(false);
    const [list, setList] = useState(LinkAlertList);
    const handleRemove = (id: string) => {
      const newList = list.filter((lit) => lit.id !== id);
      setList(newList);
    }
    //Alert with icon
interface IconAlertLists {
  id: string
  icon?:any
  variant:string
  text:string
}
const IconAlertList:IconAlertLists[] = [
  {
    id: "1",
    icon: <i className="fa fa-check-circle-o me-2" aria-hidden="true"></i>,
    variant: "success",
    text: " Well done! You successfully read this important alert message.",
  },
  {
    id: "2",
    icon: <i className="fa fa-bell-o me-2" aria-hidden="true"></i>,
    variant: "info",
    text: " Heads up! This alert needs your attention, but it's not super important.",
  },
  {
    id: "3",
    icon: <i className="fa fa-exclamation me-2" aria-hidden="true"></i>,
    variant: "warning",
    text: " Warning! Better check yourself, you're not looking too good.",
  },
  {
    id: "4",
    icon: <i className="fa fa-frown-o me-2" aria-hidden="true"></i>,
    variant: "danger",
    text: "Oh snap!Change a few things up and try submitting again.",
  }
];

  const [open2, setOpen2] = useState(false);
  const [list2, setList2] = useState(IconAlertList);
  const handleRemove2 = (id:any) => {
    const newList2 = list2.filter((lit) => lit.id !== id);
    setList2(newList2);

  }
  // Alerts With avatar
const AvatarList = [
  {
    id: "1",
    classname: 'alert-avatar alert-primary alert-dismissible',
    variant: 'primary',
    pic: Imagesdata("users14"),
  },
  {
    id: "2",
    classname: 'alert-avatar alert-success alert-dismissible',
    variant: 'success',
    pic: Imagesdata("users5"),
  },
  {
    id: "3",
    classname: 'alert-avatar alert-warning alert-dismissible',
    variant: 'warning',
    pic: Imagesdata("users15"),
  },
  {
    id: "4",
    classname: 'alert-avatar alert-danger alert-dismissible',
    variant: 'danger',
    pic: Imagesdata("users6"),
  }
];

  const [open3, setOpen3] = useState(false);
  const [list3, setList3] = useState(AvatarList);

  const handleRemove3 = (id:any) => {
    const newList3 = list3.filter((lit) => lit.id !== id);
    setList3(newList3);

  }

  // Alerts With Icons
interface AlertLists {
  id:string
  classname:string
  variant:string
  icon:any
  show:string
}
const AlertList:AlertLists[] = [
  {
    id: "1",
    classname: 'alert-default',
    variant: 'default',
    icon: <i className="fe fe-download"></i>,
    show: "Default!",
  },
  {
    id: "2",
    classname: 'alert-primary',
    variant: 'primary',
    icon: <i className="fe fe-check-square"></i>,
    show: "Primary!",
  },
  {
    id: "3",
    classname: 'alert-success',
    variant: 'success',
    icon: <i className="fe fe-thumbs-up"></i>,
    show: "Success!",
  },
  {
    id: "4",
    classname: 'alert-info',
    variant: 'info',
    icon: <i className="fe fe-bell"></i>,
    show: "Info!",
  },
  {
    id: "5",
    classname: 'alert-warning',
    variant: 'warning',
    icon: <i className="fe fe-info"></i>,
    show: "Warning!",
  },
  {
    id: "6",
    classname: 'alert-danger mb-0',
    variant: 'danger',
    icon: <i className="fe fe-slash"></i>,
    show: "Danger!",
  }
];

  const [open4, setOpen4] = useState(false);

  //Alerts With Icons Dismissing
  interface IconDismissLists {
    id:string
    classname:string
    variant:string
    icon:any
    show:string
  }
const IconDismissList:IconDismissLists[] = [
  {
    id: "1",
    classname: 'alert-default',
    variant: 'default',
    icon: <i className="fe fe-download"></i>,
    show: "Default!",
  },
  {
    id: "2",
    classname: 'alert-primary',
    variant: 'primary',
    icon: <i className="fe fe-check-square"></i>,
    show: "Primary!",
  },
  {
    id: "3",
    classname: 'alert-success',
    variant: 'success',
    icon: <i className="fe fe-thumbs-up"></i>,
    show: "Success!",
  },
  {
    id: "4",
    classname: 'alert-info',
    variant: 'info',
    icon: <i className="fe fe-bell"></i>,
    show: "Info!",
  },
  {
    id: "5",
    classname: 'alert-warning',
    variant: 'warning',
    icon: <i className="fe fe-info"></i>,
    show: "Warning!",
  },
  {
    id: "6",
    classname: 'alert-danger mb-0',
    variant: 'danger',
    icon: <i className="fe fe-slash"></i>,
    show: "Danger!",
  }
];

  const [open5, setOpen5] = useState(false);
  const [list5, setList5] = useState(IconDismissList);
  const handleRemove5 = (id:any) => {
    const newList5 = list5.filter((lit) => lit.id !== id);
    setList5(newList5);
  }
  //  Alerts style START
const AlertData = [
  { id: 1, color: "success", className: 'icon-dimiss', icon: <svg xmlns="http:www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 24 24"><path fill="#13bfa6" d="M10.3125,16.09375a.99676.99676,0,0,1-.707-.293L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328l-6.1875,6.1875A.99676.99676,0,0,1,10.3125,16.09375Z" opacity=".99" /><path fill="#71d8c9" d="M12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm5.207,7.61328-6.1875,6.1875a.99963.99963,0,0,1-1.41406,0L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328Z" /></svg>, Title: "Success message", description: "You successfully read this important alert message." },
  { id: 2, color: "info", className: 'icon-dimiss', icon: <svg xmlns="http:www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 24 24"><path fill="#70a9ee" d="M20.05713,22H3.94287A3.02288,3.02288,0,0,1,1.3252,17.46631L9.38232,3.51123a3.02272,3.02272,0,0,1,5.23536,0L22.6748,17.46631A3.02288,3.02288,0,0,1,20.05713,22Z" /><circle cx="12" cy="17" r="1" fill="#1170e4" /><path fill="#1170e4" d="M12,14a1,1,0,0,1-1-1V9a1,1,0,0,1,2,0v4A1,1,0,0,1,12,14Z" /></svg>, Title: "Info message", description: "This alert needs your attention, but it's not super important." },
  { id: 3, color: "warning", className: 'icon-dimiss', icon: <svg xmlns="http:www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 24 24"><path fill="#fad383" d="M15.728,22H8.272a1.00014,1.00014,0,0,1-.707-.293l-5.272-5.272A1.00014,1.00014,0,0,1,2,15.728V8.272a1.00014,1.00014,0,0,1,.293-.707l5.272-5.272A1.00014,1.00014,0,0,1,8.272,2H15.728a1.00014,1.00014,0,0,1,.707.293l5.272,5.272A1.00014,1.00014,0,0,1,22,8.272V15.728a1.00014,1.00014,0,0,1-.293.707l-5.272,5.272A1.00014,1.00014,0,0,1,15.728,22Z" /><circle cx="12" cy="16" r="1" fill="#f7b731" /><path fill="#f7b731" d="M12,13a1,1,0,0,1-1-1V8a1,1,0,0,1,2,0v4A1,1,0,0,1,12,13Z" /></svg>, Title: "Warning message", description: "Best check yo self, you're not looking too good" },
  { id: 4, color: "danger", className: 'icon-dimiss', icon: <svg xmlns="http:www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 24 24"><path fill="#f07f8f" d="M20.05713,22H3.94287A3.02288,3.02288,0,0,1,1.3252,17.46631L9.38232,3.51123a3.02272,3.02272,0,0,1,5.23536,0L22.6748,17.46631A3.02288,3.02288,0,0,1,20.05713,22Z" /><circle cx="12" cy="17" r="1" fill="#e62a45" /><path fill="#e62a45" d="M12,14a1,1,0,0,1-1-1V9a1,1,0,0,1,2,0v4A1,1,0,0,1,12,14Z" /></svg>, Title: "Danger message", description: "Change a few things up and try submitting again." }
];

  const [idx, setidx] = useState(AlertData);
  const [open6, setOpen6] = useState(false);
  function handleRemove6(id:any) {
    const RemoveData = idx.filter((idx) => idx.id !== id);
    setidx(RemoveData);
  }
  return(

  <div className=''>
    <PageHeader titles="Alerts" active="Alerts" items={['Componets']} />
    <Row>
      <Col xl={3} sm={6}>
      <Alert show={show} className="bg-white border p-0 pb-3 mb-5" >
      <Card.Header className="border-0 pt-3">
        <div className="card-options">
          <Link to="#" onClick={() => setShow(false)}><i className="fe fe-x icon-dimiss"></i></Link>

        </div>
      </Card.Header>

      <Card.Body className="text-center">
        <span className=""><svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="0 0 24 24"><path fill="#f07f8f" d="M20.05713,22H3.94287A3.02288,3.02288,0,0,1,1.3252,17.46631L9.38232,3.51123a3.02272,3.02272,0,0,1,5.23536,0L22.6748,17.46631A3.02288,3.02288,0,0,1,20.05713,22Z" /><circle cx="12" cy="17" r="1" fill="#e62a45" /><path fill="#e62a45" d="M12,14a1,1,0,0,1-1-1V9a1,1,0,0,1,2,0v4A1,1,0,0,1,12,14Z" /></svg></span>
        <h4 className="mb-0 mt-3 text-dark">Warning</h4>
        <Card.Text className="text-dark">Are you sure you want to delete 20 items</Card.Text>
      </Card.Body>
      <Card.Footer className="text-center border-0 pt-0">
        <Row>
          <div className="text-center">
            <Link to="#" className="btn btn-white me-2">cancel</Link>
            <Link to="#" className="btn btn-danger">Delete</Link>
          </div>
        </Row>
      </Card.Footer>

    </Alert>
      </Col>

      <Col xl={3} sm={6}>
      <Alert show={show1} className="bg-white border p-0 pb-3 mb-5" >
      <Card.Header className="border-0 pt-3">
        <div className="card-options">
          <Link to="#" onClick={() => setShow1(false)}><i className="fe fe-x icon-dimiss"></i></Link>

        </div>
      </Card.Header>

      <Card.Body className="text-center">
        <span className=""><svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="0 0 24 24"><path fill="#fad383" d="M15.728,22H8.272a1.00014,1.00014,0,0,1-.707-.293l-5.272-5.272A1.00014,1.00014,0,0,1,2,15.728V8.272a1.00014,1.00014,0,0,1,.293-.707l5.272-5.272A1.00014,1.00014,0,0,1,8.272,2H15.728a1.00014,1.00014,0,0,1,.707.293l5.272,5.272A1.00014,1.00014,0,0,1,22,8.272V15.728a1.00014,1.00014,0,0,1-.293.707l-5.272,5.272A1.00014,1.00014,0,0,1,15.728,22Z" /><circle cx="12" cy="16" r="1" fill="#f7b731" /><path fill="#f7b731" d="M12,13a1,1,0,0,1-1-1V8a1,1,0,0,1,2,0v4A1,1,0,0,1,12,13Z" /></svg></span>
        <h4 className="mb-0 mt-3 text-dark">Alert</h4>
        <Card.Text className="text-dark">Are you sure you want to end current services</Card.Text>
      </Card.Body>
      <Card.Footer className="text-center border-0 pt-0">
        <Row>
          <div className="text-center">
            <Link to="#" className="btn btn-white me-2">cancel</Link>
            <Link to="#" className="btn btn-warning">End</Link>
          </div>

        </Row>
      </Card.Footer>

    </Alert>
      </Col>

      <Col xl={3} sm={6}>
      <Alert show={show2} className="bg-white border p-0 pb-3 mb-5" >
      <Card.Header className="border-0 pt-3">
        <div className="card-options">
          <Link to="#" onClick={() => setShow2(false)}><i className="fe fe-x icon-dimiss"></i></Link>

        </div>
      </Card.Header>

      <Card.Body className="text-center">
        <span className=""><svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="0 0 24 24"><path fill="#13bfa6" d="M10.3125,16.09375a.99676.99676,0,0,1-.707-.293L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328l-6.1875,6.1875A.99676.99676,0,0,1,10.3125,16.09375Z" opacity=".99" /><path fill="#71d8c9" d="M12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm5.207,7.61328-6.1875,6.1875a.99963.99963,0,0,1-1.41406,0L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328Z" /></svg></span>
        <h4 className="mb-0 mt-3 text-dark">Success</h4>
        <Card.Text className="text-dark">Sent successfully</Card.Text>
      </Card.Body>
      <Card.Footer className="text-center border-0 pt-0">
        <Row>
          <div className="text-center">
            <Link to="#" className="btn btn-white me-2">cancel</Link>
            <Link to="#" className="btn btn-success">Close</Link>
          </div>

        </Row>
      </Card.Footer>

    </Alert>

      </Col>
      <Col xl={3} sm={6}>
      <Alert show={show3} className="bg-white border p-0 pb-3 mb-5" >
      <Card.Header className="border-0 pt-3">
        <div className="card-options">
          <Link to="#" onClick={() => setShow3(false)}><i className="fe fe-x icon-dimiss"></i></Link>

        </div>
      </Card.Header>

      <Card.Body className="text-center">
        <span className=""><svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#05c3fb" d="M12 1.99951a.99974.99974 0 0 0-1 1v2a1 1 0 1 0 2 0v-2A.99974.99974 0 0 0 12 1.99951zM12 17.99951a.99974.99974 0 0 0-1 1v2a1 1 0 0 0 2 0v-2A.99974.99974 0 0 0 12 17.99951zM21 10.99951H19a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM6 11.99951a.99974.99974 0 0 0-1-1H3a1 1 0 0 0 0 2H5A.99974.99974 0 0 0 6 11.99951zM17.19629 8.99951a1.0001 1.0001 0 0 0 .86719.5.99007.99007 0 0 0 .499-.13428l1.73145-1a.99974.99974 0 1 0-1-1.73144l-1.73145 1A.9993.9993 0 0 0 17.19629 8.99951zM6.80371 14.99951a.99936.99936 0 0 0-1.36621-.36572l-1.73145 1a.99974.99974 0 1 0 1 1.73144l1.73145-1A.9993.9993 0 0 0 6.80371 14.99951zM15 6.80371a1.0006 1.0006 0 0 0 1.36621-.36621l1-1.73193a1.00016 1.00016 0 1 0-1.73242-1l-1 1.73193A1 1 0 0 0 15 6.80371zM3.70605 8.36523l1.73145 1a.99007.99007 0 0 0 .499.13428.99977.99977 0 0 0 .501-1.86572l-1.73145-1a.99974.99974 0 1 0-1 1.73144zM9 17.1958a.99946.99946 0 0 0-1.36621.36621l-1 1.73194a1.00016 1.00016 0 0 0 1.73242 1l1-1.73194A1 1 0 0 0 9 17.1958zM20.294 15.63379l-1.73145-1a.99974.99974 0 1 0-1 1.73144l1.73145 1a.99.99 0 0 0 .499.13428.99977.99977 0 0 0 .501-1.86572zM16.36621 17.562a1.00016 1.00016 0 1 0-1.73242 1l1 1.73194a1.00016 1.00016 0 1 0 1.73242-1z" /></svg></span>
        <h4 className="mb-0 mt-3 text-dark">Processing</h4>
        <Card.Text className="text-dark">Your process currently in progress</Card.Text>
      </Card.Body>
      <Card.Footer className="text-center border-0 pt-0">
        <Row>
          <div className="text-center">
            <Link to="#" className="btn btn-white me-2">cancel</Link>
            <Link to="#" className="btn btn-secondary">Stop</Link>
          </div>

        </Row>
      </Card.Footer>

    </Alert>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <Card>
          <Card.Header>
            <Card.Title>Default alerts</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Add <code className="highlighter-rouge">className="alert alert-primary|secondary|success|info|warning|danger"</code> use one of the <b>required</b> className.</p>
              <div className="example">
              <Fragment>
      <Form className="mb-3 d-flex ms-auto">
        <Form.Check
          type='switch'
          label="Show Code"
          id="custom-switch"
          onClick={() => setOpen(!open)}
          className="showcode d-flex ms-auto "
        />
      </Form>

      {DefaultAlertList.map((item, k) => (
        <Fragment key={k}>
          <Alert
            className=""
            variant={item.variant}
          >
            {" "}
            {item.text}
          </Alert>
        </Fragment>
      ))}
      <Collapse in={open} className="">
        <div id="example-collapse-text">
          <Tabs
            defaultActiveKey="HTML"
            id="uncontrolled-tab-example"
            className="nav panel-tabs main-nav-line"
          >
            <Tab eventKey="HTML" title="HTML" className="">
              <pre>
                <code>
                  {`
<Card>
<Card.Header>
  <Card.Title>Default alerts</Card.Title>
</Card.Header>
<Card.Body>
  <div className="text-wrap">
    <p>Add <code className="highlighter-rouge">className="alert alert-primary|secondary|success|info|warning|danger"</code> use one of the <b>Imagesdatad</b> className.</p>
    <div className="example">
      <defaultAlert />
    </div>
  </div>
</Card.Body>
</Card>
`}
                </code>
              </pre>
            </Tab>
            <Tab eventKey="TSX" title="TSX">
              <pre>
                <code>
                  {`
  <Fragment>
  {list.map((item, k) => (
    <Fragment key={k}>
      <Alert
        className=""
        variant={item.variant}
      >
        {" "}
         {item.text}
      </Alert>
    </Fragment>
  ))}
</Fragment>
`}
                </code>
              </pre>
            </Tab>
          </Tabs>
        </div>
      </Collapse>
    </Fragment>

              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Header>
            <Card.Title>Links in alerts</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Add <code className="highlighter-rouge">.alert-link</code> className to quickly provide matching colored links within any alert</p>
              <div className="example">
              <Fragment>
      <Form className="mb-3 d-flex ms-auto">
        <Form.Check
          type='switch'
          label="Show Code"
          id="custom-switch"
          onClick={() => setOpen1(!open1)}
          className="showcode d-flex ms-auto "
        />
      </Form>

      {list.map((item, k) => (
        <Fragment key={k}>
          <Alert variant={item.variant} className="alert-dismissible">
            <strong>{item.show}</strong> {item.text} <Alert.Link href="#" className="alert-link">{item.text2}</Alert.Link>
            <span><i className="fe fe-x icon-dimiss" onClick={() => handleRemove(item.id)}></i></span>
          </Alert>
        </Fragment>
      ))}
      <Collapse in={open1} className="">
        <div id="example-collapse-text">
          <Tabs
            defaultActiveKey="HTML"
            id="uncontrolled-tab-example"
            className="nav panel-tabs main-nav-line"
          >
            <Tab eventKey="HTML" title="HTML" className="">
              <pre>
                <code>
                  {`
<Card>
<Card.Header>
  <Card.Title>Default alerts</Card.Title>
</Card.Header>
<Card.Body>
  <div className="text-wrap">
    <p>Add <code className="highlighter-rouge">className="alert alert-primary|secondary|success|info|warning|danger"</code> use one of the <b>Imagesdatad</b> className.</p>
    <div className="example">
      <defaultAlert />
    </div>
  </div>
</Card.Body>
</Card>
`}
                </code>
              </pre>
            </Tab>
            <Tab eventKey="TSX" title="TSX">
              <pre>
                <code>
                  {`
export const LinkAlert = () => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(LinkAlertList);
  const handleRemove =(id)=> {
    const newList = list.filter((lit) =>  lit.id !== id);
    setList(newList);
  }
  return (
    <Fragment>
    {list.map((item, k) => (
      <Fragment key={k}>
        <Alert variant={item.variant}  className="alert-dismissible">
      <strong>{item.show}</strong> {item.text} <Alert.Link href="#" className="alert-link">{item.text2}</Alert.Link>
      <span><i className="fe fe-x icon-dimiss" onClick={() => handleRemove(item.id)}></i></span>
    </Alert>
      </Fragment>
    ))}
    </Fragment>
  );
};
`}
                </code>
              </pre>
            </Tab>
          </Tabs>
        </div>
      </Collapse>
    </Fragment>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <Card>
          <Card.Header>
            <Card.Title>Alert with icon</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Add <code className="highlighter-rouge">.alert-icon</code> className.</p>
              <div className="example">
              <Fragment>
      <Form className="mb-3 d-flex ms-auto">
        <Form.Check
          type='switch'
          label="Show Code"
          id="custom-switch"
          onClick={() => setOpen2(!open2)}
          className="showcode d-flex ms-auto "
        />
      </Form>

      {list2.map((item, k) => (
        <Fragment key={k}>
          <Alert variant={item.variant} className="alert-dismissible">
            {item.icon}{item.text}
            <span><i className="fe fe-x icon-dimiss" onClick={() => handleRemove2(item.id)}></i></span>
          </Alert>
        </Fragment>
      ))}
      <Collapse in={open2} className="">
        <div id="example-collapse-text">
          <Tabs
            defaultActiveKey="HTML"
            id="uncontrolled-tab-example"
            className="nav panel-tabs main-nav-line"
          >
            <Tab eventKey="HTML" title="HTML" className="">
              <pre>
                <code>
                  {`
    <Card>
    <Card.Header>
      <Card.Title>Default alerts</Card.Title>
    </Card.Header>
    <Card.Body>
      <div className="text-wrap">
        <p>Add <code className="highlighter-rouge">className="alert alert-primary|secondary|success|info|warning|danger"</code> use one of the <b>Imagesdatad</b> className.</p>
        <div className="example">
          <defaultAlert />
        </div>
      </div>
    </Card.Body>
    </Card>
    `}
                </code>
              </pre>
            </Tab>
            <Tab eventKey="TSX" title="TSX">
              <pre>
                <code>
                  {`
    export const LinkAlert = () => {
      const [open, setOpen] = useState(false);
      const [list, setList] = useState(LinkAlertList);
      const handleRemove =(id)=> {
        const newList = list.filter((lit) =>  lit.id !== id);
        setList(newList);
      }
      return (
        <Fragment>
        {list.map((item, k) => (
          <Fragment key={k}>
            <Alert variant={item.variant}  className="alert-dismissible">
          <strong>{item.show}</strong> {item.text} <Alert.Link href="#" className="alert-link">{item.text2}</Alert.Link>
          <span><i className="fe fe-x icon-dimiss" onClick={() => handleRemove(item.id)}></i></span>
        </Alert>
          </Fragment>
        ))}
        </Fragment>
      );
    };
    `}
                </code>
              </pre>
            </Tab>
          </Tabs>
        </div>
      </Collapse>
    </Fragment>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Header>
            <Card.Title>Alert with avatar</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Add <code className="highlighter-rouge">.alert-avatar</code> className.</p>
              <div className="example">
              <Fragment>
      <Form className="mb-3 d-flex ms-auto">
        <Form.Check
          type='switch'
          label="Show Code"
          id="custom-switch"
          onClick={() => setOpen3(!open3)}
          className="showcode d-flex ms-auto "
        />
      </Form>
      <Fragment>
        {list3.map((item, k) => (
          <Fragment key={k}>
            <Alert variant={item.variant} className={item.classname}>
              <img className="avatar brround cover-image" alt='' src={item.pic} /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              <span><i className="fe fe-x icon-dimiss" onClick={() => handleRemove3(item.id)}></i></span>
            </Alert>
          </Fragment>
        ))}
      </Fragment>
      <Collapse in={open3} className="">
        <div id="example-collapse-text">
          <Tabs
            defaultActiveKey="HTML"
            id="uncontrolled-tab-example"
            className="nav panel-tabs main-nav-line"
          >
            <Tab eventKey="HTML" title="HTML" className="">
              <pre>
                <code>
                  {`
<Card>
<Card.Header>
  <Card.Title>Alert with avatar</Card.Title>
</Card.Header>
<Card.Body>
  <div className="text-wrap">
    <p>Add <code className="highlighter-rouge">.alert-avatar</code> className.</p>
    <div className="example">
      <AvatarAlert/>
    </div>
  </div>
</Card.Body>
</Card>
`}
                </code>
              </pre>
            </Tab>
            <Tab eventKey="TSX" title="TSX">
              <pre>
                <code>
                  {`
export const LinkAlert = () => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(AvatarList);
  const handleRemove =(id)=> {
    const newList = list.filter((lit) =>  lit.id !== id);
    setList(newList);
  }
  return (
    <Fragment>
       {list.map((item, k) => (
            <Fragment key={k}>
          <Alert variant={item.variant} className={item.classname}>
      <img className="avatar brround cover-image" alt='' src={item.pic} /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      <span><i className="fe fe-x icon-dimiss" onClick={() => handleRemove(item.id)}></i></span>
    </Alert>
            </Fragment>
          ))}
      </Fragment>
  );
};
`}
                </code>
              </pre>
            </Tab>
          </Tabs>
        </div>
      </Collapse>
    </Fragment>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>Alerts With Icons</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Add <code className="highlighter-rouge">.alert-avatar</code> className.</p>
              <div className="example">
              <Fragment>
      <Form className="mb-3 d-flex ms-auto">
        <Form.Check
          type='switch'
          label="Show Code"
          id="custom-switch"
          onClick={() => setOpen4(!open4)}
          className="showcode d-flex ms-auto "
        />
      </Form>

      {AlertList.map((item, k) => (
        <Fragment key={k}>
          <Alert variant={item.variant} className={item.classname} role="alert">
            <span className="alert-inner--icon">{item.icon}</span>
            <span className="alert-inner--text"><strong>{item.show}</strong> This is a warning alert—check it out that has an icon too!</span>
          </Alert>
        </Fragment>
      ))}
      <Collapse in={open4} className="">
        <div id="example-collapse-text">
          <Tabs
            defaultActiveKey="HTML"
            id="uncontrolled-tab-example"
            className="nav panel-tabs main-nav-line"
          >
            <Tab eventKey="HTML" title="HTML" className="">
              <pre>
                <code>
                  {`
<div className="example">
<Alert variant="default" className="alert-default" role="alert">
  <span className="alert-inner--icon"><i className="fe fe-download"></i></span>
  <span className="alert-inner--text"><strong>Default!</strong> This is a warning alert—check it out that has an icon too!</span>
</Alert>
<Alert variant="primary" className="alert-primary" role="alert">
  <span className="alert-inner--icon"><i className="fe fe-check-square"></i></span>
  <span className="alert-inner--text"><strong>Primary!</strong> This is a warning alert—check it out that has an icon too!</span>
</Alert>
<Alert variant="success" className="alert-success" role="alert">
  <span className="alert-inner--icon"><i className="fe fe-thumbs-up"></i></span>
  <span className="alert-inner--text"><strong>Success!</strong> This is a warning alert—check it out that has an icon too!</span>
</Alert>
<Alert variant="info" className="alert-info" role="alert">
  <span className="alert-inner--icon"><i className="fe fe-bell"></i></span>
  <span className="alert-inner--text"><strong>Info!</strong> This is a warning alert—check it out that has an icon too!</span>
</Alert>
<Alert variant="warning" className="alert-warning" role="alert">
  <span className="alert-inner--icon"><i className="fe fe-info"></i></span>
  <span className="alert-inner--text"><strong>Warning!</strong> This is a warning alert—check it out that has an icon too!</span>
</Alert>
<Alert variant="danger" className="alert-danger mb-0" role="alert">
  <span className="alert-inner--icon"><i className="fe fe-slash"></i></span>
  <span className="alert-inner--text"><strong>Danger!</strong> This is a warning alert—check it out that has an icon too!</span>
</Alert>
<MultiIconAlert/>
</div>
`}
                </code>
              </pre>
            </Tab>
            <Tab eventKey="TSX" title="TSX">
              <pre>
                <code>
                  {`
export const LinkAlert = () => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(AlertList);
  const handleRemove =(id)=> {
    const newList = list.filter((lit) =>  lit.id !== id);
    setList(newList);
  }
  return (
    <Fragment>
    {list.map((item, k) => (
      <Fragment key={k}>
      <Alert variant={item.variant} className={item.classname} role="alert">
      <span className="alert-inner--icon">{item.icon}</span>
      <span className="alert-inner--text"><strong>{item.show}</strong> This is a warning alert—check it out that has an icon too!</span>
    </Alert>
      </Fragment>
    ))}
    </Fragment>
  );
};
`}
                </code>
              </pre>
            </Tab>
          </Tabs>
        </div>
      </Collapse>
    </Fragment>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title className="mb-0">Alerts With Icons Dismissing</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <p>Add <code className="highlighter-rouge">.alert-dismissible</code> className.</p>
              <div className="example">
              <Fragment>
      <Form className="mb-3 d-flex ms-auto">
        <Form.Check
          type='switch'
          label="Show Code"
          id="custom-switch"
          onClick={() => setOpen5(!open5)}
          className="showcode d-flex ms-auto "
        />
      </Form>
      <Fragment>
        {list5.map((item, k) => (
          <Fragment key={k}>
            <Alert className={item.classname} variant={item.variant} >
              <span className="alert-inner--icon">{item.icon}</span>
              <span className="alert-inner--text"><strong>{item.show}</strong> This is a default alert—check it out!</span>
              <span><i className="fe fe-x icon-dimiss" onClick={() => handleRemove5(item.id)}></i></span>
            </Alert>
          </Fragment>
        ))}
      </Fragment>
      <Collapse in={open5} className="">
        <div id="example-collapse-text">
          <Tabs
            defaultActiveKey="HTML"
            id="uncontrolled-tab-example"
            className="nav panel-tabs main-nav-line"
          >
            <Tab eventKey="HTML" title="HTML" className="">
              <pre>
                <code>
                  {`
        <Card>
        <Card.Header>
          <Card.Title className="mb-0">Alerts With Icons Dismissing</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="text-wrap">
            <p>Add <code className="highlighter-rouge">.alert-dismissible</code> className.</p>
            <div className="example">
            <IconDissmissbleAlert/>
            </div>
          </div>
        </Card.Body>
      </Card>
`}
                </code>
              </pre>
            </Tab>
            <Tab eventKey="TSX" title="TSX">
              <pre>
                <code>
                  {`
export const LinkAlert = () => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(AlertList);
  const handleRemove =(id)=> {
    const newList = list.filter((lit) =>  lit.id !== id);
    setList(newList);
  }
  return (
    <Fragment>
    {list.map((item, k) => (
    <Fragment key={k}>
    <Alert className={item.classname} variant={item.variant} >
    <span className="alert-inner--icon">{item.icon}</span>
    <span className="alert-inner--text"><strong>{item.show}</strong> This is a default alert—check it out!</span>
    <span><i className="fe fe-x icon-dimiss" onClick={() => handleRemove(item.id)}></i></span>
  </Alert>
      </Fragment>
    ))}
  </Fragment>
  );
};
`}
                </code>
              </pre>
            </Tab>
          </Tabs>
        </div>
      </Collapse>
    </Fragment>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Alerts style</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap mb-4">
              <div className="">
              <div className="users">
      <Form className="mb-3 d-flex ms-auto">
        <Form.Check
          type='switch'
          label="Show Code"
          id="custom-switch"
          onClick={() => setOpen6(!open6)}
          className="showcode d-flex ms-auto "
        />
      </Form>
      {idx.map((item) => (
        <Alert key={item.id} variant={`${item.color}`} onClick={() => handleRemove6(item.id)}>
          {item.icon}
          <strong className='ps-3'>{item.Title}</strong>
          <span className="ms-auto float-end" onClick={() => handleRemove6(item.id)} ><i className={`${item.color} fe fe-x ms-auto`} ></i></span>
          <hr />
          <p>{item.description}</p>
        </Alert>
      ))}
      <Collapse in={open6} className="">
        <div id="example-collapse-text">
          <Tabs
            defaultActiveKey="HTML"
            id="uncontrolled-tab-example"
            className="nav panel-tabs main-nav-line"
          >
            <Tab eventKey="HTML" title="HTML" className="">
              <pre>
                <code>
                  {`
        <Card>
        <Card.Header>
          <Card.Title className="mb-0">Alerts With Icons Dismissing</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="text-wrap">
            <p>Add <code className="highlighter-rouge">.alert-dismissible</code> className.</p>
            <div className="example">
            <IconDissmissbleAlert/>
            </div>
          </div>
        </Card.Body>
      </Card>
`}
                </code>
              </pre>
            </Tab>
            <Tab eventKey="TSX" title="TSX">
              <pre>
                <code>
                  {`
export const LinkAlert = () => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(AlertList);
  const handleRemove =(id)=> {
    const newList = list.filter((lit) =>  lit.id !== id);
    setList(newList);
  }
  return (
    <Fragment>
    {list.map((item, k) => (
    <Fragment key={k}>
    <Alert key={item.id} variant={{item.color}} onClick={() => handleRemove(item.id)} show={show}>
    {item.icon}
    <strong>{item.Title}</strong>
    <span className="d-flex ms-auto" onClick={() => handleRemove(item.id)} ><i className={{item.color} fe fe-x ms-auto} ></i></span>
    <hr />
    <p>{item.description}</p>
  </Alert>
      </Fragment>
    ))}
  </Fragment>
  );
};
`}
                </code>
              </pre>
            </Tab>
          </Tabs>
        </div>
      </Collapse>
    </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

  </div>
)
  };
export default BootstrapAlerts;
