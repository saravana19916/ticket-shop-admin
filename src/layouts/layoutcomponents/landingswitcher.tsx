import { FC, useEffect } from 'react';
import * as Landingswicherdata from '../../commondata/landingswitcherdata'
import PerfectScrollbar from 'react-perfect-scrollbar';
import "react-perfect-scrollbar/dist/css/styles.css";
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


interface LandingSwitcherProps { }


const LandingSwitcher: FC<LandingSwitcherProps> = () => {

useEffect(() => {
  Landingswicherdata.localStorageBackUp1();
})
  return (
    <div className=''>
      <div className="switcher-wrapper">
        <div className="demo_changer">
          <div className="form_holder sidebar-right1">
            <PerfectScrollbar  options={{suppressScrollX:true, useBothWheelAxes:false}}>
              <Row>
                <div className="predefined_styles">
                  <div className="swichermainleft text-center">
                    <div className="p-3 d-grid gap-2">
                    <Link to="https://react.spruko.com/sash/" className="btn ripple btn-primary mt-0">View Demo</Link>
                      <Link to='https://themeforest.net/user/spruko/portfolio' className="btn ripple btn-secondary">Buy Now</Link>
                      <Link to="https://themeforest.net/user/spruko/portfolio" className="btn ripple btn-pink">Our Portfolio</Link>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>LTR and RTL VERSIONS</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">LTR Version</span>
                          <p className="onoffswitch2"><input type="radio" name="onoffswitch7"
                            onClick={() => Landingswicherdata.RtltoLtr()}
                            id="myonoffswitch23" className="onoffswitch2-checkbox" defaultChecked />
                            <label htmlFor="myonoffswitch23" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">RTL Version</span>
                          <p className="onoffswitch2"><input type="radio" onClick={() => Landingswicherdata.LtrtoRtl()} name="onoffswitch7" id="myonoffswitch24" className="onoffswitch2-checkbox" />
                            <label htmlFor="myonoffswitch24" className="onoffswitch2-label"></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Light Theme Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                            <span className="me-auto">Light Theme</span>
                            <p className="onoffswitch2"><input type="radio" name="onoffswitch1" id="myonoffswitch1" className="onoffswitch2-checkbox" defaultChecked onClick={() => Landingswicherdata.LightTheme()} />
                              <label htmlFor="myonoffswitch1" className="onoffswitch2-label"></label>
                            </p>
                          </div>
                          <div className="switch-toggle d-flex">
                            <span className="me-auto">Dark Theme</span>
                            <p className="onoffswitch2"><input type="radio" name="onoffswitch1" id="myonoffswitch2" className="onoffswitch2-checkbox" onClick={() => Landingswicherdata.dark()} />
                              <label htmlFor="myonoffswitch2" className="onoffswitch2-label"></label>
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Reset All Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section my-4">
                        <button className="btn btn-danger btn-block"
                          onClick={() => {
                            localStorage.clear();
                            Landingswicherdata.resetData();
                          }}

                          type="button">Reset All
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div >
  )
};

export default LandingSwitcher;


