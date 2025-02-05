import React, { Fragment, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./layouts/layoutcomponents/loader";
import "./index.scss";
import "react-image-crop/dist/ReactCrop.css";
import { RouterData } from "./commondata/routingdata";
import SwitcherStyle1 from "./components/pages/switcher/switcherstyle1/switcherstyle1";
const Auth = lazy(
  () => import("./components/authentication/firebaseauth/auth")
);
const App = lazy(() => import("./layouts/app"));
const Error401 = lazy(
  () => import("./components/authentication/errorpage/error401/error401")
);
const Error403 = lazy(
  () => import("./components/authentication/errorpage/error403/error403")
);
const Error404 = lazy(
  () => import("./components/authentication/errorpage/error404/error404")
);
const Error503 = lazy(
  () => import("./components/authentication/errorpage/error503/error503")
);
const ForgotPassword = lazy(
  () => import("./components/authentication/forgot password/forgotpassword")
);
const LockScreen = lazy(
  () => import("./components/authentication/lockscreen/lockscreen")
);
const Register = lazy(
  () => import("./components/authentication/register/register")
);
const UnderConstruction = lazy(
  () =>
    import("./components/pages/extension/underconstruction/underconstruction")
);
const CustomPage = lazy(() => import("./layouts/custompage"));
const Error400 = lazy(
  () => import("./components/authentication/errorpage/error400/error400")
);
const Error500 = lazy(
  () => import("./components/authentication/errorpage/error500/error500")
);
const Login = lazy(() => import("./components/authentication/login/login"));
const AuthenticationPage = lazy(() => import("./layouts/authenticationpage"));
const ErrorPages = lazy(() => import("./layouts/errorpages"));
const Switcherapp = lazy(() => import("./layouts/switcherapp"));
const Landing = lazy(() => import("./layouts/landing"));
// Have to change the auth login
const AuthLogin = lazy(
  () => import("./components/authentication/signInOptions")
);
const SignUp = lazy(
  () => import("./components/authentication/firebaseauth/signup")
);

const container: HTMLElement | any = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Fragment>
    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path={`${import.meta.env.BASE_URL}`} element={<Auth />}>
            <Route index element={<AuthLogin />} />
            <Route
              path={`${
                import.meta.env.BASE_URL
              }Authentication/firebaseAuth/login`}
              element={<AuthLogin />}
            />
            <Route
              path={`${
                import.meta.env.BASE_URL
              }Authentication/firebaseAuth/SignUp`}
              element={<SignUp />}
            />
          </Route>
          <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
            {RouterData.map((idx) => (
              <Route
                path={idx.path}
                element={idx.element}
                key={Math.random()}
              />
            ))}
          </Route>

          {/* Authentication Pages */}
          <Route
            path={`${import.meta.env.BASE_URL}`}
            element={<AuthenticationPage />}
          >
            <Route
              path={`${import.meta.env.BASE_URL}authentication/login`}
              element={<Login />}
            />
            <Route
              path={`${import.meta.env.BASE_URL}authentication/register`}
              element={<Register />}
            />
            <Route
              path={`${import.meta.env.BASE_URL}authentication/forgotpassword`}
              element={<ForgotPassword />}
            />
            <Route
              path={`${import.meta.env.BASE_URL}authentication/lockscreen`}
              element={<LockScreen />}
            />
            ,
          </Route>

          {/* Custom Pages for UnderConstruction */}

          <Route path={`${import.meta.env.BASE_URL}`} element={<CustomPage />}>
            <Route
              path={`${
                import.meta.env.BASE_URL
              }pages/extension/underconstruction`}
              element={<UnderConstruction />}
            />
          </Route>

          {/* Authentication Error Pages */}
          <Route path={`${import.meta.env.BASE_URL}`} element={<ErrorPages />}>
            <Route
              path={`${
                import.meta.env.BASE_URL
              }authentication/errorpage/error400`}
              element={<Error400 />}
            />
            <Route
              path={`${
                import.meta.env.BASE_URL
              }authentication/errorpage/error401`}
              element={<Error401 />}
            />
            <Route
              path={`${
                import.meta.env.BASE_URL
              }authentication/errorpage/error403`}
              element={<Error403 />}
            />
            <Route
              path={`${
                import.meta.env.BASE_URL
              }authentication/errorpage/error404`}
              element={<Error404 />}
            />
            <Route
              path={`${
                import.meta.env.BASE_URL
              }authentication/errorpage/error500`}
              element={<Error500 />}
            />
            <Route
              path={`${
                import.meta.env.BASE_URL
              }authentication/errorpage/error503`}
              element={<Error503 />}
            />
            <Route path="*" element={<Error500 />} />
          </Route>
          <Route>
            <Route
              path={`${import.meta.env.BASE_URL}landingPage/landingPage`}
              element={<Landing />}
            />
          </Route>
          {/* Switcher*/}
          <Route path={`${import.meta.env.BASE_URL}`} element={<Switcherapp />}>
            <Route
              path={`${import.meta.env.BASE_URL}pages/switcher/SwitcherStyle1`}
              element={<SwitcherStyle1 />}
            />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </Fragment>
);
