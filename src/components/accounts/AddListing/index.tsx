import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import {
  FormInputStyled,
  FormLabelStyled,
  FormFileInputStyled,
} from "../../styledComponents/styledForm";
import SelectDropDown from "../../shared/SelectDropDown";
import DateFlatpickr from "../../shared/DateFlatpickr";
import { GetCountries } from "react-country-state-city";
import { SuccessIcon } from "../../styledComponents/styledIcons";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../styledComponents/styledButton";
import BackBreadCrumb from "../../shared/BackBreadCrumb/BackBreadCrumb";

interface FormData {
  listingName: string;
  listingType: string;
  listingDate: string;
  venue: string;
  country: string;
  city: string;
  listingCategory: string;
  tileImage: File | null;
}

const AddListing = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [imageName, setImageName] = useState("");
  const [listingType, setListingType] = useState([
    { label: 'Event', value: 'Event'},
    { label: 'Concert', value: 'Concert'}
  ]);
  const [countriesList, setCountriesList] = useState([]);
  const [cityList, setCityList] = useState([
    { label: 'Dubai', value: 'Dubai'},
    { label: 'Abu Dhabi', value: 'Abu Dhabi'}
  ]);
  const [listingCategory, setListingCategory] = useState([
    { label: 'Theatre & Performing Arts', value: 'Theatre'},
    { label: 'Music', value: 'Music'}
  ]);

  const [fileName, setFileName] = useState<string | undefined>(undefined);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageName(file.name);
    }
  };

  useEffect(() => {
    GetCountries().then((result: any) => {
      const data = result.map((country: any) => {
        return {
          value: country.id,
          label: country.name,
        };
      });
      setCountriesList(data);
    });
  }, []);

  const tileImageFileRef = useRef<HTMLInputElement | null>(null);
  const handleFileInputClick = () => tileImageFileRef?.current?.click();

  return (
    <>
      <div className="row p-0 p-md-2 p-lg-4 p-xl-4">
        <BackBreadCrumb />
        <div className="col-12 mb-3 mt-3">
          <span className="fw-600 fs-26px">Add Record</span>
        </div>
      </div>

      <Form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <div className="col-lg-9 col-12 mb-6">
          <Form.Group>
            <FormLabelStyled>Listing Name</FormLabelStyled>
            <FormInputStyled type="text" className="form-control" placeholder="Type the listing name" />
          </Form.Group>
        </div>

        <div className="col-lg-9 col-12 mb-6">
          <Form.Group>
            <FormLabelStyled>Listing Type</FormLabelStyled>
            <SelectDropDown
              options={listingType}
              placeholder="Select Type"
              classNamePrefix="Select"
              className="mb-2"
            />
          </Form.Group>
        </div>

        <div className="col-lg-9 col-12 mb-6">
          <Form.Group>
            <FormLabelStyled>Listing Date</FormLabelStyled>
            <DateFlatpickr
              type="date"
              placeholder=""
              value={null}
              onChange={() => {}}
            />
          </Form.Group>
        </div>

        <div className="col-lg-9 col-12 mb-6">
          <Form.Group>
            <FormLabelStyled>Venue</FormLabelStyled>
            <FormInputStyled type="text" className="form-control" placeholder="Type the venue" />
          </Form.Group>
        </div>

        <div className="col-lg-9 col-12 mb-6">
          <Form.Group>
            <FormLabelStyled>Country</FormLabelStyled>
            <SelectDropDown
              options={countriesList}
              placeholder="Select Country"
              classNamePrefix="Select"
              className="mb-2"
            />
          </Form.Group>
        </div>

        <div className="col-lg-9 col-12 mb-6">
          <Form.Group>
            <FormLabelStyled>City</FormLabelStyled>
            <SelectDropDown
              options={cityList}
              placeholder="Select City"
              className="city-default fs-12px from-control placeholder-danger-subtle"
            />
          </Form.Group>
        </div>

        <div className="col-lg-9 col-12 mb-6">
          <Form.Group>
            <FormLabelStyled>Listing Category</FormLabelStyled>
            <SelectDropDown
              options={listingCategory}
              placeholder="Select Listing Category"
              className="city-default fs-12px from-control placeholder-danger-subtle"
            />
          </Form.Group>
        </div>

        <div className="col-lg-9 col-12 mb-6">
          <Form.Group>
            <FormLabelStyled>Tile Image</FormLabelStyled>
            <FormFileInputStyled
              onClick={handleFileInputClick}
              className={`form-control cursor-pointer ${
                fileName ? "text-black" : "text-color-gray-1"
              } ${isSubmitted ? "" : "py-4"}`}
            >
              {fileName || "No file chosen"}
              {isSubmitted && (
                <>
                  <SuccessIcon className="bi bi-check-circle-fill fs-5" />
                </>
              )}
            </FormFileInputStyled>
            <input
              type="file"
              ref={tileImageFileRef}
              accept="image/png, image/jpeg, image/jpg"
              className="d-none"
              // onChange={handleFileChange}
            />
          </Form.Group>
        </div>

        <div className="col-lg-9 col-12 mb-6 text-end">
          <ButtonSecondary
            type="button"
            className="btn m-3"
          >
            Save draft
          </ButtonSecondary>

          <ButtonSecondary
            type="button"
            className="btn m-3"
          >
            Preview
          </ButtonSecondary>

          <ButtonPrimary
            type="submit"
            className="btn m-3"
            style={{ minWidth: "118px" }}
          >
            Submit
          </ButtonPrimary>
        </div>
      </Form>
    </>
  );
};

export default AddListing;
