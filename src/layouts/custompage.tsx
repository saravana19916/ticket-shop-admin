import  { FC, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Switcher1 from '../layouts/layoutcomponents/switcher1';

interface CustomPageProps { }

const CustomPage: FC<CustomPageProps> = () => {

  return(
  <Fragment>
    <div className="">
      <Switcher1/>
      <Outlet />
    </div>
  </Fragment>
)
  };

export default CustomPage;
