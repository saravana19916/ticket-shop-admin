import React, { FC } from "react";
interface ICreativeGuidelines {
  guideLines: string[];
}
const CreativeGuidelines: FC<ICreativeGuidelines> = ({ guideLines }) => {
  return (
    <>
      <div className="col-12">
        <h5 className="fw-semibold">Creative Guidelines</h5>
      </div>
      <div className="col-12">
        <ol>
          {guideLines?.map((guideLine: string) => (
            <>
              <li className="fs-12px fw-light">{guideLine}</li>
            </>
          ))}
        </ol>
      </div>
    </>
  );
};

export default CreativeGuidelines;
