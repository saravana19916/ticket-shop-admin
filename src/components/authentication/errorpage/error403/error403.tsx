import  { FC } from 'react';
import { Link } from 'react-router-dom';

interface Error403Props { }

const Error403: FC<Error403Props> = () => {
  const SidSwitcherIcon = () => {
    //leftsidemenu
    document.querySelector(".demo_changer")?.classList.toggle("active");
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
    <div className="page">
      <div className="dropdown float-end custom-layout" onClick={() => RemoveSwitcherIcon()}>
        <div className="demo-icon nav-link icon mt-4">
        </div>
      </div>
      <div className="page-content error-page error2 text-white">
        <div className="container text-center">
          <div className="error-template">
            <h1 className="display-1 mb-2">4<span className="custom-emoji"><svg xmlns="http://www.w3.org/2000/svg" height="140" width="140" data-name="Layer 1" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a2a1ff" /><path fill="#6563ff" d="M14.99951 17.0918a.99473.99473 0 0 1-.64209-.23438 3.766 3.766 0 0 0-4.71484 0 .99955.99955 0 1 1-1.28516-1.53125 5.81162 5.81162 0 0 1 7.28516 0 .99974.99974 0 0 1-.64307 1.76563zM8.25 12a1 1 0 0 1-.707-1.707l.293-.293-.293-.293A.99989.99989 0 0 1 8.957 8.293l1 1a.99962.99962 0 0 1 0 1.41406l-1 1A.99676.99676 0 0 1 8.25 12z" /><path fill="#6563ff" d="M10.25 12a.99676.99676 0 0 1-.707-.293l-1-1a.99962.99962 0 0 1 0-1.41406l1-1A.99989.99989 0 0 1 10.957 9.707l-.293.293.293.293A1 1 0 0 1 10.25 12zM14.25 12a1 1 0 0 1-.707-1.707l.293-.293-.293-.293A.99989.99989 0 0 1 14.957 8.293l1 1a.99962.99962 0 0 1 0 1.41406l-1 1A.99676.99676 0 0 1 14.25 12z" /><path fill="#6563ff" d="M16.25,12a.99676.99676,0,0,1-.707-.293l-1-1a.99962.99962,0,0,1,0-1.41406l1-1A.99989.99989,0,0,1,16.957,9.707l-.293.293.293.293A1,1,0,0,1,16.25,12Z" /></svg></span>3</h1>
            <h5 className="error-details">
              Sorry, an error has occured, Requested page not found!
            </h5>
            <div className="text-center">
              <Link className="btn btn-secondary mt-5 mb-5" to={`${import.meta.env.BASE_URL}dashboard/`}> <i className="fa fa-long-arrow-left"></i> Back to Home </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown float-end custom-layout" onClick={() => SidSwitcherIcon()}>
    <div className="demo-icon nav-link icon mt-4">
        <i className="fe fe-settings fa-spin text_primary" ></i>
    </div>
</div>
  </div>
);
  };
export default Error403;

