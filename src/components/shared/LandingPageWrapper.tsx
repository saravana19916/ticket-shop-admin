import { FC, ReactNode } from "react";
interface IProps {
  children: ReactNode;
}
const LandingPageWrapper: FC<IProps> = ({ children }) => {
  return (
    <>
      <div className={`row px-0 px-md-2 px-lg-4 px-xl-6 mx-0 mt-8`}>
        <div className="">
          <div className="p-0 p-md-3">{children} </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageWrapper;
