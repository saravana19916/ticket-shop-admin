import  { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, InputGroup } from 'react-bootstrap';
import { Imagesdata } from '../../../commondata/commonimages';

interface LockScreenProps { }

const LockScreen: FC<LockScreenProps> = () => {
     const [passwordshow,setpasswordshow] = useState(false);  
  document.querySelector(".app")?.classList.remove("layout-boxed");

  const SwitcherIcons = () => {
    //leftsidemenu
    document.querySelector(".demo_changer")?.classList.add("active");
    const Rightside: any = document.querySelector(".demo_changer");
    Rightside.style.insetInlineEnd = "0px";
};
  const RemoveSwitcherIcon: any = () => {
    //leftsidemenu
    document.querySelector(".demo_changer")?.classList.remove("active");
    const Rightside: any = document.querySelector(".demo_changer");
    Rightside.style.insetInlineEnd = "-270px";
};
  return(

  <div className=''>
    <div className="container-login100"  onClick={() => RemoveSwitcherIcon()}>
      <div className="wrap-login100 p-6">
        <Form className="login100-form validate-form">
          <div className="text-center mb-4">
            <img src={Imagesdata("users21")} alt="lockscreen pic" className="avatar avatar-xxl brround mb-2"/>
              <h4>Percy Kewshun</h4>
          </div>
          <InputGroup className="wrap-input100 validate-input" id="Password-toggle">
                        <InputGroup.Text id="basic-addon2" onClick={()=>setpasswordshow(!passwordshow)} className="bg-white p-0">
                            <Link to='#'   className='bg-white text-muted p-3'><i className={`zmdi ${passwordshow ? 'zmdi-eye' : 'zmdi-eye-off'} text-muted`} aria-hidden="true" ></i></Link>
                        </InputGroup.Text>
                        <Form.Control className="input100 border-start-0 ms-0"  type={(passwordshow) ? 'text' : "password"}  placeholder="Password" />
                    </InputGroup>
          
          <div className="container-login100-form-btn pt-0">
            <Link to={`${import.meta.env.BASE_URL}dashboard/`} className="login100-form-btn btn-primary">
              Unlock
            </Link>
          </div>
          <div className="text-center pt-2">
            <span className="txt1 me-3">
              I Forgot Password
            </span>
            <Link className="" to={`${import.meta.env.BASE_URL}authentication/forgotpassword/`}>
              Give me a Hint
            </Link>
          </div>
          <label className="login-social-icon"><span>OR</span></label>
          <div className="d-flex justify-content-center">
            <Link to="#">
              <div className="social-login me-4 text-center">
                <i className="fa fa-google"></i>
              </div>
            </Link>
            <Link to="#">
              <div className="social-login me-4 text-center">
                <i className="fa fa-facebook"></i>
              </div>
            </Link>
            <Link to="#">
              <div className="social-login text-center">
                <i className="fa fa-twitter"></i>
              </div>
            </Link>
          </div>
        </Form>
      </div>
    </div>
    <div className="dropdown float-end custom-layout" onClick={() => SwitcherIcons()}>
    <div className="demo-icon nav-link icon mt-4">
        <i className="fe fe-settings fa-spin text_primary" ></i>
    </div>
</div>
  </div>
);
  };
export default LockScreen;
