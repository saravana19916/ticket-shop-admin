import { Offcanvas, Form } from "react-bootstrap";
import { ButtonPrimary } from "../../styledComponents/styledButton";
import { FormLabelStyled } from "../../styledComponents/styledForm";
import SelectDropDown from "../../shared/SelectDropDown";
import DateFlatpickr from "../../shared/DateFlatpickr";
import { scanUserType } from "../../../commondata/addListingPageOne";
import { Filter } from "react-feather";

const OffcanvasFilter = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  return (
    <Offcanvas placement="end" show={show} onHide={onClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="fs-4 fw-semibold pt-3">Filter</Offcanvas.Title>
        <span className="d-flex ms-auto" onClick={onClose}>
          <i className="fe fe-x ms-auto fs-4"></i>
        </span>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="row">
          <div className="col-12 mb-5">
            <Form.Group>
              <FormLabelStyled>Between</FormLabelStyled>
              <DateFlatpickr
                type="range"
                placeholder=""
                value={null}
                onChange={() => {}}
              />
            </Form.Group>
          </div>
          <div className="col-12 mb-5">
            <Form.Group>
              <FormLabelStyled>Scan Service</FormLabelStyled>
              <SelectDropDown
                options={scanUserType}
                placeholder="Select a Scan service"
                classNamePrefix="Select"
                className="mt-1"
              />
            </Form.Group>
          </div>
          <div className="col-12 mb-5">
            <Form.Group>
              <FormLabelStyled>Ticket pool</FormLabelStyled>
              <SelectDropDown
                options={scanUserType}
                placeholder="Make sure to select a ticket pool"
                classNamePrefix="Select"
                className="mt-1"
              />
            </Form.Group>
          </div>
        </div>
        <ButtonPrimary
          type="submit"
          className="btn mt-3"
          style={{ minWidth: "118px" }}
        >
          <Filter className="w-5 h-5" /> Filter
        </ButtonPrimary>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffcanvasFilter;
