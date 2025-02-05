import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col } from "react-bootstrap";
import { Imagesdata } from "../../../commondata/commonimages";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomToastContainer from "../../shared/CustomToastContainer";

interface ForgotPasswordProps {}

const ForgotPassword: FC<ForgotPasswordProps> = () => {
  const navigate = useNavigate();
  document.querySelector(".app")?.classList.remove("layout-boxed");
  // const SwitcherIcons = () => {
  //   //leftsidemenu
  //   document.querySelector(".demo_changer")?.classList.add("active");
  //   const Rightside: any = document.querySelector(".demo_changer");
  //   Rightside.style.insetInlineEnd = "0px";
  // };
  // const RemoveSwitcherIcon: any = () => {
  //   //leftsidemenu
  //   document.querySelector(".demo_changer")?.classList.remove("active");
  //   const Rightside: any = document.querySelector(".demo_changer");
  //   Rightside.style.insetInlineEnd = "-270px";
  // };
  const [emailId, setEmailId] = useState<undefined | string>(undefined);
  const _handleEmailIdOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    if (value) {
      setEmailId(value);
    } else {
      setEmailId(undefined);
    }
  };
  const _handleOnSubmit = (): void => {
    toast.error("Please enter email id!");
  };
  return (
    <>
      <CustomToastContainer />
      <div className="">
        <Col className="col-login mx-auto">
          <div className="text-center">
            <Link to={`${import.meta.env.BASE_URL}dashboard/`}>
              <img
                src={Imagesdata("logowhite")}
                className="header-brand-img m-0"
                alt=""
              />
            </Link>
          </div>
        </Col>
        <div
          className="container-login100"
          //  onClick={() => RemoveSwitcherIcon()}
        >
          <div className="wrap-login100 p-6">
            <form className="login100-form validate-form">
              <span className="login100-form-title pb-5">Forgot Password</span>
              <p className="text-muted">
                Enter the email address registered on your account
              </p>
              <div
                className="wrap-input100 validate-input input-group"
                data-bs-validate="Valid email is required: ex@abc.xyz"
              >
                <Link to="#" className="input-group-text bg-white text-muted">
                  <i className="zmdi zmdi-email" aria-hidden="true"></i>
                </Link>
                <input
                  className="input100 border-start-0 ms-0 form-control"
                  type="email"
                  placeholder="Email"
                  value={emailId}
                  onChange={_handleEmailIdOnChange}
                />
              </div>
              <div className="submit">
                {emailId ? (
                  <>
                    <Link
                      className="btn btn-primary d-grid p-3 fs-6"
                      to={`${import.meta.env.BASE_URL}dashboard/`}
                    >
                      Submit
                    </Link>
                  </>
                ) : (
                  <>
                    <Button
                      className="btn btn-primary w-100 p-3 fs-6"
                      onClick={_handleOnSubmit}
                    >
                      Submit
                    </Button>
                  </>
                )}
              </div>
              <div className="text-center mt-4">
                <p className="text-dark mb-0">
                  Remember It?
                  <Link className="text-primary ms-1" to="/">
                    Send me Back
                  </Link>
                </p>
              </div>
              {/* <label className="login-social-icon">
              <span>OR</span>
            </label>
            <div className="d-flex justify-content-center">
              <Link to={`${import.meta.env.BASE_URL}dashboard/`}>
                <div className="social-login me-4 text-center">
                  <i className="fa fa-google"></i>
                </div>
              </Link>
              <Link to={`${import.meta.env.BASE_URL}dashboard/`}>
                <div className="social-login me-4 text-center">
                  <i className="fa fa-facebook"></i>
                </div>
              </Link>
              <Link to={`${import.meta.env.BASE_URL}dashboard/`}>
                <div className="social-login text-center">
                  <i className="fa fa-twitter"></i>
                </div>
              </Link>
            </div> */}
            </form>
          </div>
        </div>
        {/* <div
        className="dropdown float-end custom-layout"
        onClick={() => SwitcherIcons()}
      >
        <div className="demo-icon nav-link icon mt-4">
          <i className="fe fe-settings fa-spin text_primary"></i>
        </div>
      </div> */}
      </div>
    </>
  );
};
export default ForgotPassword;
