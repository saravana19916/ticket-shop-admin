import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import EventPlans from "./eventPlans"; // Assuming this component exists
import AttractionPlans from "./attractionPlans";
import MerchandisePlans from "./merchandisePlans";
import HotelPlans from "./hotelPlans";
import AccommodationPlans from "./accommodationPlans";
import FlightPlans from "./flightPlans";
import CruisesPlans from "./cruisesPlans";

const TabbedContent = () => {
  const [activeTab, setActiveTab] = useState("events");

  const tabs = [
    "Events",
    "Attractions",
    "Merchandise",
    "Hotel",
    "Accommodation",
    "Flights",
    "Cruises",
  ];

  // Define content for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "events":
        return <EventPlans />;
      case "attractions":
        return <AttractionPlans />;
      case "merchandise":
        return <MerchandisePlans />;
      case "hotel":
        return <HotelPlans />;
      case "accommodation":
        return <AccommodationPlans />;
      case "flights":
        return <FlightPlans />;
      case "cruises":
        return <CruisesPlans />;
      default:
        return <h3>Coming Soon...</h3>;
    }
  };

  return (
    <>
      {/* Toggle Button Group */}
      <ButtonGroup className="bg-pink-lighter p-3">
        {tabs.map((tab) => (
          <ToggleButton
            key={tab}
            type="radio"
            variant={activeTab === tab.toLowerCase() ? "primary" : "light"}
            className="fw-semibold p-3"
            checked={activeTab === tab.toLowerCase()}
            onClick={() => setActiveTab(tab.toLowerCase())}
            id={tab.toLowerCase()}
            value={tab.toLowerCase()}
          >
            {tab}
          </ToggleButton>
        ))}
      </ButtonGroup>

      {/* Tab Content */}
      <div className="mt-3">{renderTabContent()}</div>
    </>
  );
};

export default TabbedContent;
