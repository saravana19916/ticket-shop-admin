import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Form, InputGroup } from 'react-bootstrap';
import { Imagesdata } from '../../../commondata/commonimages';

interface RegisterProps { }

const Register: FC<RegisterProps> = () => {
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
    <div>
    <Col className="col-login mx-auto mt-7">
      <div className="text-center">
      <Link to={`${import.meta.env.BASE_URL}dashboard`}>
        <img src={Imagesdata("logowhite")} className="header-brand-img m-0" alt=""/>
        </Link>
      </div>
    </Col>
    <div className="container-login100"  onClick={() => RemoveSwitcherIcon()}>
      <div className="wrap-login100 p-6">
        <form className="login100-form validate-form">
          <span className="login100-form-title">
            Registration
          </span>
          <div className="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
            <Link to="#" className="input-group-text bg-white text-muted">
              <i className="mdi mdi-account" aria-hidden="true"></i>
            </Link>
            <input className="input100 border-start-0 ms-0 form-control" type="text" placeholder="User name"/>
          </div>
          <div className="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
            <Link to="#" className="input-group-text bg-white text-muted">
              <i className="zmdi zmdi-email" aria-hidden="true"></i>
            </Link>
            <input className="input100 border-start-0 ms-0 form-control" type="email" placeholder="Email"/>
          </div>
          <InputGroup className="wrap-input100 validate-input" id="Password-toggle">
                        <InputGroup.Text id="basic-addon2" onClick={()=>setpasswordshow(!passwordshow)} className="bg-white p-0">
                            <Link to='#'  className='bg-white text-muted p-3'><i className={`zmdi ${passwordshow ? 'zmdi-eye' : 'zmdi-eye-off'} text-muted`} aria-hidden="true" ></i></Link>
                        </InputGroup.Text>
                        <Form.Control className="input100 border-start-0 ms-0"  type={(passwordshow) ? 'text' : "password"}  placeholder="Password" />
                    </InputGroup>
          <label className="custom-control custom-checkbox mt-4">
            <input type="checkbox" className="custom-control-input"/>
              <span className="custom-control-label">Agree the <Link to={`${import.meta.env.BASE_URL}pages/extension/term/`}>terms and policy</Link></span>
          </label>
          <div className="container-login100-form-btn">
            <Link to={`${import.meta.env.BASE_URL}Dashboard/`}className="login100-form-btn btn-primary">
              Register
            </Link>
          </div>
          <div className="text-center pt-3">
            <p className="text-dark mb-0">Already have account?<Link to={`${import.meta.env.BASE_URL}authentication/login/`} className="text-primary ms-1 d-inline-block">Sign In</Link></p>
          </div>
          <label className="login-social-icon"><span>Register with Social</span></label>
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
        </form>
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
export default Register;
