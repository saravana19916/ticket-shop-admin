import { FC, Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../layouts/layoutcomponents/footer";
import Header from "../layouts/layoutcomponents/header";
import Header1 from "../layouts/layoutcomponents/header1";
import Rightside from "../layouts/layoutcomponents/rightside";
import Switcher from "../layouts/layoutcomponents/switcher";
import * as SwitcherData from "../commondata/switcherdata";
import BacktoTop from "../layouts/layoutcomponents/backtotop";
// import { Sidebar } from "../layouts/layoutcomponents/sidebar3";
import store from "../redux/store";
import { Provider } from "react-redux";
import "../utils/i18next";
import CustomToastContainer from "../components/shared/CustomToastContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { Sidebar1 } from "./layoutcomponents/sidebar1";
import { Sidebar } from "./layoutcomponents/sidebar";
interface AppProps {}
const queryClient = new QueryClient();

const App: FC<AppProps> = () => {
  document
    .querySelector("body")
    ?.classList.remove("login-img", "landing-page", "horizontal");
  document.querySelector("body")?.classList.add(
    "app",
    "sidebar-mini",
    "ltr",
    "light-mode"
    // "sidenav-toggled"
  );
  const location = window.location?.pathname;
  return (
    <Fragment>
      <CustomToastContainer />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <div className="horizontalMenucontainer">
            <Switcher />
            <div className="page">
              <div className="page-main">
                <Header1 />
                {location === "/signinoptions" ? (
                  <></>
                ) : (
                  <>
                    <div className="sticky" style={{ paddingTop: "-74px" }}>
                      <Sidebar />
                    </div>
                  </>
                )}

                <div
                  className="jumps-prevent"
                  style={{ paddingTop: "74px" }}
                ></div>
                <div
                  className="main-content app-content mt-0"
                  onClick={() => SwitcherData.responsiveSidebarclose()}
                >
                  <div className="side-app">
                    <div className="main-container custom-container">
                      <Outlet />
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
            <Rightside />
            <BacktoTop />
          </div>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Fragment>
  );
};

export default App;
