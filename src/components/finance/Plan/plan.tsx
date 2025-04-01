import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import EventPlans from "./eventPlans"; // Assuming this component exists
import AttractionPlans from "./attractionPlans";

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
        return <h3>Merchandise Details Coming Soon...</h3>;
      case "hotel":
        return <h3>Find the Best Hotels Nearby...</h3>;
      case "accommodation":
        return <h3>Explore Accommodation Options...</h3>;
      case "flights":
        return <h3>Flight Booking Options...</h3>;
      case "cruises":
        return <h3>Check Out the Best Cruise Deals...</h3>;
      default:
        return <h3>Coming Soon...</h3>;
    }
  };

  return (
    <>
      {/* Toggle Button Group */}
      <ButtonGroup className="bg-pink-lighter p-2">
        {tabs.map((tab) => (
          <ToggleButton
            key={tab}
            type="radio"
            variant={activeTab === tab.toLowerCase() ? "primary" : "light"}
            className="fw-semibold"
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
