import React, { useState } from "react";
import { useGeolocated } from "react-geolocated";

const GetGeoLocation = () => {
  const [forceUpdate, setForceUpdate] = useState(0); // This will trigger a re-render and re-fetch location

  // const {
  //   coords,
  //   isGeolocationAvailable,
  //   isGeolocationEnabled,
  //   positionError,
  // } = useGeolocated({
  //   positionOptions: {
  //     enableHighAccuracy: true,
  //   },
  //   userDecisionTimeout: 5000,
  //   suppressLocationOnMount: true, // Don't automatically fetch on mount
  // });

  const handleGetLocation = () => {
    setForceUpdate((prev) => prev + 1); // Trigger re-fetch by updating the state
  };

  return (
    <>
      <span
        className="badge badge-pill rounded-pill text-dark border fs-6 fw-normal ps-3 pe-5 cursor-pointer"
        onClick={handleGetLocation}
      >
        <i
          className="typcn typcn-location me-2 fs-5"
          title="typcn typcn-location"
          style={{ color: "#45474B" }}
        ></i>
        Use current location
      </span>

      {/* <div>
        {coords ? (
          <div>
            <p>Latitude: {coords.latitude}</p>
            <p>Longitude: {coords.longitude}</p>
          </div>
        ) : positionError ? (
          <p>Error: {positionError.message}</p>
        ) : (
          <p>Click the button to get your location...</p>
        )}
      </div>

      {!isGeolocationAvailable && (
        <p>Your browser does not support Geolocation.</p>
      )}
      {!isGeolocationEnabled && <p>Geolocation is not enabled.</p>} */}
    </>
  );
};

export default GetGeoLocation;
