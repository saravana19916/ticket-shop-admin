import React, { FC } from "react";
import { Dropdown } from "react-bootstrap";
import Buttons from "../../bootstrap/buttons/buttons";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../styledComponents/styledButton";
interface AddListingHeaderProps {
  pageNumber: number;
  onGoBack: () => void;
  onContinue: () => void;
  onSaveDraft: (isAgain?: boolean) => void;
  isDrafted: boolean;
  maximumNumberOfPages: number;
}
const AddListingHeader: FC<AddListingHeaderProps> = ({
  pageNumber,
  onGoBack,
  onContinue,
  onSaveDraft,
  isDrafted,
  maximumNumberOfPages,
}) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-7 mt-4 px-0 px-md-2 px-lg-4 px-xl-6 mx-0 mx-md-1 mx-lg-3 mx-xl-3">
        <div>
          <span className="fs-4">
            <span className="fs-1 fw-bold">{pageNumber}</span>/
            {maximumNumberOfPages}
          </span>
        </div>
        <div>
          <div className="float-end d-flex gap-3 gsp-md-3">
            <ButtonSecondary
              type="button"
              className="btn "
              onClick={() => (isDrafted ? onSaveDraft(true) : onSaveDraft())}
            >
              <i
                className="fa fa-floppy-o d-block d-md-none"
                aria-hidden="true"
              ></i>
              <span className="d-none d-md-block">
                {isDrafted ? "Saved draft" : "Save draft"}
              </span>
            </ButtonSecondary>
            <ButtonSecondary type="button" className="btn " onClick={onGoBack}>
              <i
                className="fa fa-arrow-left d-block d-md-none"
                aria-hidden="true"
              ></i>
              <span className="d-none d-md-block">Go Back</span>
            </ButtonSecondary>
            {pageNumber === maximumNumberOfPages ? (
              <>
                <ButtonPrimary type="button" className="btn">
                  <i className="fa fa-check" aria-hidden="true"></i>
                  <span>Complete</span>
                </ButtonPrimary>
              </>
            ) : (
              <>
                <ButtonPrimary
                  type="button"
                  className="btn"
                  onClick={onContinue}
                >
                  <i
                    className="fa fa-arrow-right d-block d-md-none"
                    aria-hidden="true"
                  ></i>{" "}
                  <span>Continue</span>
                </ButtonPrimary>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddListingHeader;
