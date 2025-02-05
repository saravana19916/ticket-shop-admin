import React, { FC, Fragment, useEffect, useState } from "react";

import { Imagesdata } from "../../../../commondata/commonimages";

import axios from "axios";
import { useTranslation } from "react-i18next";
import { useGeolocated } from "react-geolocated";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ManualLocationTab from "./ManualLocationTab";
import CustomTabButton from "../../../shared/CustomTabButton";
interface IAddListingPageOneProps {}

const AddLocationForListing: FC<IAddListingPageOneProps> = ({}) => {
  const [location, setLocation] = useState<any>({ lat: null, lng: null });
  const [address, setAddress] = useState("");

  const { t, i18n } = useTranslation();
  const [fetchLocation, setFetchLocation] = useState(false);
  const tabList = ["Use Google Maps", "Enter Manually"];

  const customStyles = {
    singleValue: (provided: any) => ({
      ...provided,
      color: "#000",
      fontSize: "14px",
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: "#777",
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: "3px",
    }),
    control: (provided: any) => ({
      ...provided,
      padding: "4px",
      paddingLeft: "14px",
      paddingRight: "14px",
      borderRadius: "50px",
    }),
    multiValue: (provided: any) => ({
      ...provided,
      color: "#000",
      fontSize: "18px",
      margin: "0px",
      padding: "0px",
      backgroundColor: "",
    }),
  };

  const isSeparateUrl =
    window.location?.pathname === "/add-location" ||
    window.location?.pathname.startsWith("/edit-location/");

  const {
    coords,
    isGeolocationAvailable,
    isGeolocationEnabled,
    positionError,
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });

  useEffect(() => {
    if (fetchLocation) {
      if (isGeolocationEnabled) {
        // This will automatically call the geolocation
        // because react-geolocated will start watching
      } else {
        console.log("Geolocation is not enabled.");
      }
    }
  }, [fetchLocation, isGeolocationEnabled]);

  const handleGetLocation = () => {
    setFetchLocation(true);
  };

  console.log(coords);

  const handleLocationFind = async () => {};

  const getAddress = async (lat: any, lng: any) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`
      );
      setAddress(response.data.display_name);
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };
  const [selectedTab, setSelectedTab] = useState<number>(1);

  return (
    <>
      <div
        className={`row px-0 px-md-2 px-lg-4 px-xl-6 mx-xl-3 mx-0 mx-md-1 mx-lg-3 mb-6 ${
          isSeparateUrl ? "mt-7" : ""
        }`}
      >
        <div className="card border p-4 rounded-16px">
          <div className="p-0 p-md-5">
            <div className="row">
              <div className="col-12 mb-3">
                <p className="fw-600 fs-26px text-black mb-3">
                  Your Listing Location
                </p>
              </div>
              <TabGroup
                className="row px-0 px-md-2 px-lg-4 px-xl-4 py-2"
                selectedIndex={selectedTab}
              >
                <TabList className="d-flex align-items-center gap-3 mb-5">
                  {tabList.map((tabName, idx) => (
                    <>
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
                    </>
                  ))}
                </TabList>
                <TabPanels className="p-0">
                  <TabPanel className="p-0">
                    <div className="col-12 mb-7 mt-3 p-0">
                      <div className="img-fluid">
                        <img src={Imagesdata("locationMap")} alt="" />
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <ManualLocationTab />
                  </TabPanel>
                </TabPanels>
              </TabGroup>
              {/* <div className="col-12 mb-3">
                <GetGeoLocation />
              </div>
              <div className="col-12 mb-3">
                <Form.Label className="fs-5 fw-500 text-primary-1">
                  Search address automatically
                </Form.Label>
                <span className="text-gray d-inline-block mb-3 fs-14px">
                  if your address is an existing location in google maps, type
                  it here to have it automatically added.{" "}
                </span>
              </div>
              <div className="col-xl-10 col-lg-11 col-12 mb-4">
                <Form.Group>
                  <Form.Control
                    className="rounded-pill text-black fs-14px"
                    type="text"
                    placeholder="Type your address to search your location"
                    style={{
                      padding: "12px",
                      paddingLeft: "20px",
                      borderColor: "#B3B3B3",
                    }}
                  />
                </Form.Group>
              </div>
              <div className="col-12 mb-3">
                <Form.Label className="fs-5 fw-500 mb-3 text-primary-1">
                  Add address manually
                </Form.Label>
              </div>
              <div className="col-xl-10 col-lg-11 col-12 mb-4">
                <Form.Group>
                  <Form.Control
                    className="rounded-pill text-black fs-14px"
                    type="text"
                    placeholder="Enter location or destination name"
                    style={{
                      padding: "12px",
                      paddingLeft: "20px",
                      borderColor: "#B3B3B3",
                    }}
                  />
                </Form.Group>
              </div>
              <div className="col-xl-10 col-lg-11 col-12 mb-4">
                <Form.Group>
                  <Form.Control
                    className="rounded-pill text-black fs-14px"
                    type="text"
                    placeholder="Enter location address"
                    style={{
                      padding: "12px",
                      paddingLeft: "20px",
                      borderColor: "#B3B3B3",
                    }}
                  />
                </Form.Group>
              </div>
              <div className="col-xl-10 col-lg-11 col-12">
                <Form.Group>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mb-3">
                      <ReactSelect
                        // isClearable
                        isSearchable
                        options={countriesList}
                        placeholder={t("country")}
                        value={
                          sliceCountry?.find(
                            (option: any) => option.value == Number(countryId)
                          ) || null
                        }
                        onChange={(e: any) =>
                          handleCountryChange(e ? e : undefined)
                        }
                        onInputChange={filterCountries}
                        className="city-default fs-12px from-control placeholder-danger-subtle custom-border"
                      />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-3 text-black">
                      <ReactSelect
                        isSearchable
                        options={cityData}
                        placeholder={t("city")}
                        value={cityData?.find(
                          (option: any) => option.value === cityID
                        )}
                        onChange={(e: any) =>
                          handleCityChange(e ? e : undefined)
                        }
                        onInputChange={filterCities}
                        className="city-default fs-12px from-control placeholder-danger-subtle custom-border"
                        styles={{
                          menuPortal: (base) => ({ ...base, zIndex: 999999 }),
                          menu: (base) => ({ ...base, zIndex: 999999 }),
                          menuList: (base) => ({ ...base, zIndex: 999999 }),
                        }}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-3">
                      <Form.Control
                        type="text"
                        placeholder="PO Box / Zip code"
                        className="rounded-pill fs-14px"
                        style={{
                          padding: "12px",
                          paddingLeft: "20px",
                          borderColor: "#B3B3B3",
                          color: "#000",
                        }}
                      />
                    </div>
                  </div>
                </Form.Group>
              </div>
              <div className="col-xl-10 col-lg-11 col-12 mb-4">
                <Form.Group>
                  <Form.Control
                    type="text"
                    className="rounded-pill  text-black  fs-14px"
                    placeholder="Enter location address"
                    style={{
                      padding: "12px",
                      paddingLeft: "20px",
                      borderColor: "#B3B3B3",
                    }}
                  />
                </Form.Group>
              </div>
              <div className="col-xl-10 col-lg-11 col-12 mb-4">
                <Form.Group>
                  <Form.Control
                    className="rounded-pill text-black fs-14px"
                    type="text"
                    placeholder="Insert google map link here"
                    style={{
                      padding: "12px",
                      paddingLeft: "20px",
                      borderColor: "#B3B3B3",
                    }}
                  />
                </Form.Group>
              </div>
               */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddLocationForListing;
