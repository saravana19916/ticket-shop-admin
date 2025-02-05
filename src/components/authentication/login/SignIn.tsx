import React, { FC, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Col, Tabs, Form, Tab, InputGroup, Spinner } from "react-bootstrap";
import { Imagesdata } from "../../../commondata/commonimages";
import { Link } from "react-router-dom";
import Input from "../../shared/input";
import Button from "../../shared/Button";
import facebook from "../../../assets/images/facebook.svg";
import apple from "../../../assets/images/apple.svg";
import instagram from "../../../assets/images/instagram.svg";
import google from "../../../assets/images/google.svg";
import SocialAuthButton from "../../shared/SocialAuthButton";
import { useNavigate } from "react-router-dom";
import CustomToastContainer from "../../shared/CustomToastContainer";

interface ILoginProps {}
interface socialSignInType {
  title: string;
  brand: string;
  href: string;
  logo: any;
}
const SignIn: FC<ILoginProps> = () => {
  const navigate = useNavigate();
  const socialSignIn: socialSignInType[] = [
    {
      title: "Sign in with",
      brand: "Google",
      href: "",
      logo: google,
    },
    {
      title: "Sign in with",
      brand: "Apple",
      href: "",
      logo: apple,
    },
    {
      title: "Sign in with",
      brand: "Instagram",
      href: "",
      logo: instagram,
    },
    {
      title: "Sign in with",
      brand: "Facebook",
      href: "",
      logo: facebook,
    },
  ];
  const _handleOnClick = (
    type: "Google" | "Apple" | "Instagram" | "Facebook" | "login" | string,
    e?: any
  ) => {
    e?.preventDefault();
    if (type === "login") {
      navigate("/dashboard");
    } else {
      navigate("/dashboard");
    }
  };
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const _handleOnChange = (e: any, type: "email" | "password") => {
    if (type === "email") {
      setEmail(e.target.value);
    } else if (type === "password") {
      setPassword(e.target.value);
    }
  };
  return (
    <>
      <CustomToastContainer />
      <div className="row">
        <div className="col-lg-4 col-md-3 col-12"></div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="p-6">
            <form className="login100-form ">
              <div className="row">
                <div className="col-12 mb-3">
                  <span className="fw-bold fs-4 pb-5 login-inputs">
                    Sign In
                  </span>
                </div>
                <div className="col-12 mb-3">
                  <Input
                    type="text"
                    placeholder="Email address or mobile number"
                    bgColorClass="bg-danger-subtle"
                    handleChange={(e: any) => _handleOnChange(e, "email")}
                    value={email}
                  />
                </div>
                <div className="col-12 mb-1">
                  <Input
                    type="password"
                    placeholder="Password"
                    bgColorClass="bg-danger-subtle"
                    handleChange={(e: any) => _handleOnChange(e, "password")}
                    value={password}
                  />
                </div>
                <div className=" col-12 mb-3 text-end">
                  <span>Forgot password?</span>
                </div>
                <div className="col-12 mb-3">
                  <Button
                    title="Sign In"
                    className="bg-primary text-white w-100 text-center fs-6 p-3"
                    style=""
                    type="submit"
                    onClick={(e: any) => {
                      _handleOnClick("login", e);
                    }}
                  />
                </div>
                <div className="col-12 m-3 text-center ">
                  <span>or sign in with</span>
                </div>
                {socialSignIn?.map((signInOptions: socialSignInType) => (
                  <>
                    <div className="col-12 mb-3">
                      <SocialAuthButton
                        className="btn-light w-100 p-3 fw-semibold text-start d-flex align-items-center justify-content-center gap-3"
                        title={signInOptions?.title}
                        logo={signInOptions?.logo}
                        brand={signInOptions?.brand}
                        onClick={_handleOnClick}
                        // style={{ marginLeft: "120px" }}
                      />
                    </div>
                  </>
                ))}
              </div>
              <div className="col-12 m-3 text-center ">
                <span>
                  Don't have account?{" "}
                  <Link to="/signup" className="text-primary">
                    Sign Up Here
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4 col-md-3 col-12"></div>
      </div>
    </>
  );
};

export default SignIn;
