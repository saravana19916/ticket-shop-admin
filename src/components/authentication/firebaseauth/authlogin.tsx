import { useState } from "react";
import { Form, InputGroup, Tab, Nav, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../layouts/firebase/firebase";
import { Imagesdata } from "../../../commondata/commonimages";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthenticationService from "../../../service/authentication.service";
import UtilityService from "../../../service/utility.service";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomToastContainer from "../../shared/CustomToastContainer";

const SignIn = () => {
  const [err, setError] = useState("");
  const [loading, setLoader] = useState(false);
  const [passwordshow, setpasswordshow] = useState(false);
  const [data, setData] = useState({
    email: "adminreact@gmail.com",
    password: "1234567890",
  });
  const { email, password } = data;
  const changeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };
  const Login = (e: any) => {
    setLoader(true);
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(err);
        console.log(user);
        RouteChange();
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoader(false);
      });
  };
  const RouteChange = () => {
    const path = `${import.meta.env.BASE_URL}dashboard`;
    navigate(path);
  };

  const Login1 = (_e: any) => {
    if (data.email == "adminreact@gmail.com" && data.password == "1234567890") {
      RouteChange();
    } else {
      setError("The Auction details did not Match");
      setData({
        email: "adminreact@gmail.com",
        password: "1234567890",
      });
    }
  };
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // LOGIN ONCHANGE
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const handleonChangeLoginForm = (e: any) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };
  // LOGIN FORM VALIDATION
  const loginSchema = z.object({
    email: z
      .string()
      .email("Invalid email")
      .min(1, "The email field is required."),
    password: z.string().min(1, "The password field is required."),
  });
  type loginSchemaType = z.infer<typeof loginSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (dataLogin: any) => {
    console.log(dataLogin);
    setIsLoading(true);
    try {
      const data = await AuthenticationService.login(
        dataLogin.email,
        dataLogin.password
      );
      console.log(data);
      setIsLoading(false);
      if (data.success) {
        UtilityService.storeResponse(data);
        toast.success(data.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
        navigate("/dashboard");
      }
    } catch (error: any) {
      setIsLoading(false);
      console.log(error);
      toast.error(error.response.data.error.message, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    }
  };
  return (
    <div className="login-img">
      <CustomToastContainer />
      <div className="page">
        {/*<div className="col-login mx-auto mt-7">
          <div className="text-center">
            <img
              src={Imagesdata("logowhite")}
              className="header-brand-img"
              alt="TixBox"
            />
          </div>
        </div>*/}
        <div className="container-login100">
          <div className="wrap-login100 p-6">
            <Tab.Container id="left-tabs-example" defaultActiveKey="react">
              <Nav
                variant="pills"
                className="justify-content-center authentication-tabs"
              >
                <img src={Imagesdata("react1")} style={{ width: "32px" }} />

                {/*<Nav.Item>
                  <Nav.Link eventKey="firebase">
                    {" "}
                    <img src={Imagesdata("firebase")} alt="logo1" />
                  </Nav.Link>
                </Nav.Item>*/}
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="react">
                  <form
                    className="login100-form validate-form"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <span className="login100-form-title pb-5 mt-5">
                      {" "}
                      Login
                    </span>
                    <div
                      className="wrap-input100 validate-input input-group"
                      data-bs-validate="Valid email is required: ex@abc.xyz"
                    >
                      <Link
                        to="#"
                        className="input-group-text bg-white text-muted"
                      >
                        <i
                          className="zmdi zmdi-email text-muted"
                          aria-hidden="true"
                        ></i>
                      </Link>
                      <input
                        className="input100 border-start-0 form-control ms-0"
                        type="email"
                        placeholder="Email"
                        id="email"
                        {...register("email")}
                        name="email"
                        onChange={handleonChangeLoginForm}
                      />
                      {errors.email && (
                        <small className="w-100 text-danger">
                          {errors.email?.message}
                        </small>
                      )}
                    </div>
                    <InputGroup
                      className="wrap-input100 validate-input"
                      id="Password-toggle"
                    >
                      <InputGroup.Text
                        id="basic-addon2"
                        onClick={() => setpasswordshow(!passwordshow)}
                        className="bg-white p-0"
                      >
                        <Link to="#" className="bg-white text-muted p-3">
                          <i
                            className={`zmdi ${
                              passwordshow ? "zmdi-eye" : "zmdi-eye-off"
                            } text-muted`}
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </InputGroup.Text>
                      <input
                        className="input100 border-start-0 form-control ms-0"
                        type={passwordshow ? "text" : "password"}
                        placeholder="Password"
                        id="password"
                        {...register("password")}
                        name="password"
                        onChange={handleonChangeLoginForm}
                      />
                      {errors.password && (
                        <small className="w-100 text-danger">
                          {errors.password?.message}
                        </small>
                      )}
                    </InputGroup>
                    <div className="container-login100-form-btn">
                      <button
                        type="submit"
                        className="login100-form-btn btn-primary"
                      >
                        {isLoading && (
                          <Spinner
                            className="me-1"
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                        )}
                        Login
                      </button>
                    </div>
                    <div className="text-center pt-3">
                      {/*<p className="text-dark mb-0 fs-13">
                        Not a member?
                        <Link
                          to={`${
                            import.meta.env.BASE_URL
                          }authentication/register/`}
                          className="text-primary ms-1"
                        >
                          Sign UP
                        </Link>
                      </p>*/}
                    </div>
                    <label className="login-social-icon">
                      <span>Login with Social</span>
                    </label>
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
                        <div className="social-login text-center mb-5">
                          <i className="fa fa-twitter"></i>
                        </div>
                      </Link>
                    </div>
                  </form>
                </Tab.Pane>
                <Tab.Pane eventKey="firebase">
                  <form className="login100-form validate-form">
                    <span className="login100-form-title pb-5 mt-5">
                      {" "}
                      Login
                    </span>
                    <div>
                      <div className="wrap-input100 validate-input input-group">
                        <Link
                          to="#"
                          className="input-group-text bg-white text-muted"
                        >
                          <i
                            className="zmdi zmdi-email text-muted"
                            aria-hidden="true"
                          ></i>
                        </Link>
                        <Form.Control
                          className="input100 border-start-0 form-control ms-0"
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={email}
                          onChange={changeHandler}
                          required
                        />{" "}
                      </div>

                      <InputGroup
                        className="wrap-input100 validate-input"
                        id="Password-toggle"
                      >
                        <InputGroup.Text
                          id="basic-addon2"
                          className="bg-white p-0"
                          onClick={() => setpasswordshow(!passwordshow)}
                        >
                          <Link to="#" className="bg-white text-muted p-3">
                            <i
                              className={`zmdi ${
                                passwordshow ? "zmdi-eye" : "zmdi-eye-off"
                              } text-muted`}
                            ></i>
                          </Link>
                        </InputGroup.Text>
                        <Form.Control
                          className="input100 border-start-0 ms-0"
                          type={passwordshow ? "text" : "password"}
                          name="password"
                          placeholder="Password"
                          value={password}
                          onChange={changeHandler}
                          required
                        />{" "}
                      </InputGroup>

                      <div className="container-login100-form-btn">
                        <Link
                          to="#"
                          onClick={Login}
                          className="login100-form-btn btn-primary"
                        >
                          Login
                          {loading ? (
                            <span
                              role="status"
                              aria-hidden="true"
                              className="spinner-border spinner-border-sm ms-2"
                            ></span>
                          ) : (
                            ""
                          )}
                        </Link>
                      </div>

                      {/*<div className="text-center pt-3">
                        <p className="text-dark mb-0">
                          Not a member?{" "}
                          <Link
                            to={`${
                              import.meta.env.BASE_URL
                            }Authentication/firebaseAuth/SignUp/`}
                          >
                            Sign UP
                          </Link>
                        </p>
                      </div>*/}
                      <div className="text-center pt-3"></div>
                      <label className="login-social-icon">
                        <span>Login with Social</span>
                      </label>
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
                    </div>
                  </form>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
};

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
