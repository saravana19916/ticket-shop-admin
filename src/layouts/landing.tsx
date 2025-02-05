import { FC, Fragment } from 'react';
import BacktoTop from '../layouts/layoutcomponents/backtotop';
import LandingPage from '../components/landingpage/landingpage';
import Switcher1 from './layoutcomponents/switcher1';


interface LandingProps { }

const Landing: FC<LandingProps> = () => {
  
  document.querySelector("body")?.classList.add('app','landing-page' ,'horizontal');
  document.querySelector("body")?.classList.remove( 'sidebar-mini', 'transparent-mode', 'layout-boxed');
  
  return(
    <Fragment>
    <Switcher1/>
   <LandingPage/>
   <BacktoTop />
  </Fragment>
  )
  };

export default Landing;
