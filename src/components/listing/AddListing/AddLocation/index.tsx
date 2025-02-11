import React, { FC, Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useGeolocated } from "react-geolocated";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ManualLocationTab from "./ManualLocationTab";
import CustomTabButton from "../../../shared/CustomTabButton";
import { Accordion, Form } from "react-bootstrap";
import { IAddLocationProps } from "./type";
import LocationAccordion from "./LocationAccordion";
import { locationAccordionData } from "./helper";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FormInputStyled } from "../../../styledComponents/styledForm";

const mapContainerStyle = {
  width: "100%",
  height: "300px",
};
const defaultCenter = { lat: 37.7749, lng: -122.4194 };
const AddLocationForListing: FC = () => {
  const [location, setLocation] = useState<any>({ lat: null, lng: null });
  const [address, setAddress] = useState("");
  const [formValues, setFormValues] = useState({ locationName: "" });

  const { t } = useTranslation();
  const [fetchLocation, setFetchLocation] = useState(false);
  const tabList = ["Use Google Maps", "Enter Manually"];
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });

  useEffect(() => {
    if (fetchLocation && coords) {
      setLocation({ lat: coords.latitude, lng: coords.longitude });
    }
  }, [fetchLocation, coords]);

  const handleGetLocation = () => setFetchLocation(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  return (
    <div className={`row px-0 px-md-2 px-lg-4 mx-0 mb-6`}>
      <div className="card border p-4 rounded-16px">
        <div className="p-0 p-md-5">
          <div className="row">
            <div className="col-12 mb-3">
              <p className="fw-600 fs-26px text-black mb-3">
                Your Listing Location
              </p>
            </div>
            <TabGroup className="row px-0 py-2" selectedIndex={selectedTab}>
              <TabList className="d-flex align-items-center gap-3 mb-5">
                {tabList.map((tabName, idx) => (
                  <Tab as={Fragment} key={idx}>
                    {({ selected }) => (
                      <CustomTabButton
                        tabName={tabName}
                        selected={selected}
                        index={idx}
                        setSelectedTab={setSelectedTab}
                      />
                    )}
                  </Tab>
                ))}
              </TabList>
              <TabPanels>
                <TabPanel>
                  <div className="col-12 mb-7 mt-3">
                    <Form.Group>
                      <Form.Label>Search from Google</Form.Label>
                      <FormInputStyled
                        type="text"
                        placeholder="Search here"
                        className="form-control mb-6"
                        value={formValues.locationName}
                        name="locationName"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <LoadScript googleMapsApiKey="&callback=initMap">
                      <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={
                          location.lat && location.lng
                            ? location
                            : defaultCenter
                        }
                        zoom={location.lat && location.lng ? 15 : 10}
                      >
                        {location.lat && location.lng && (
                          <Marker position={location} />
                        )}
                      </GoogleMap>
                    </LoadScript>
                  </div>
                </TabPanel>
                <TabPanel>
                  <ManualLocationTab />
                </TabPanel>
              </TabPanels>
            </TabGroup>
            <div className="mt-6">
              <Accordion className="panel-default d-flex flex-column gap-4">
                {locationAccordionData?.map(
                  (item: IAddLocationProps, index: number) => (
                    <LocationAccordion
                      key={index}
                      item={item}
                      index={`${index}`}
                      status={index % 2 === 0 ? "active" : "in-active"}
                    />
                  )
                )}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLocationForListing;
