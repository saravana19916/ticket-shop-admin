import React, { FC, useEffect, useState } from "react";
import AddListingHeader from "./AddListingHeader";
import { useNavigate } from "react-router-dom";
import AddListingInfo from "./AddListingInfo";
import AddLocation from "./AddLocation";
import AddShowDateAndTime from "./Shows/AddShowDateAndTime";
import AddZoningAndCapacity from "./AddZoningAndCapacity";
import AddPricing from "./AddPricing";
import AddInclusions from "./AddInclusions";
import AddShops from "./AddShop";
import { toast } from "react-toastify";
import DynamicPricingStrategy from "./DynamicPricingStrategy";
import AddMaterialMarketing from "./AddMaterialMarketing";
import AddRulesAndPolicies from "./AddRulesAndPolicies";
import AddPolicies from "./Policies/AddPolicies";
import AddRules from "./AddRules";
interface IAddListing {}

const index: FC<IAddListing> = () => {
  const [page, setPage] = useState<number>(1);
  const listingPages = [
    "/add-listing/info",
    "/add-listing/location",
    "/add-listing/date-show-time",
    "/add-listing/products",
    "/add-listing/zoning-and-capacity",
    "/add-listing/shops",
    // "/add-listing/dynamic-pricing",
    "/add-listing/marketing-material",
    "/add-listing/rules",
    "/add-listing/add-policies",
  ];
  const pathName = window.location.pathname;

  useEffect(() => {
    if (pathName) {
      const currentPage = listingPages.indexOf(pathName) + 1;
      setPage(currentPage);
    }
  }, [pathName]);

  const maximumNumberOfPages = listingPages?.length;
  const [currentPageName, setCurrentPageName] =
    useState<string>("Listing Info");
  const navigate = useNavigate();

  const _handleGoBack = () => {
    if (pathName === "/add-listing/info") {
      navigate("/listings");
    } else {
      const currentPage = listingPages.indexOf(pathName) - 1;
      navigate(listingPages[currentPage]);
    }
  };
  const _handleContinue = () => {
    if (pathName === "/add-listing/add-policies") {
      navigate("/listings");
    } else {
      const currentPage = listingPages.indexOf(pathName) + 1;
      navigate(listingPages[currentPage]);
    }
  };
  const _handleSaveDraft = (isAgain?: boolean) => {
    !isAgain &&
      setDraftPages((prev) => {
        return [page, ...prev];
      });
    toast.success(`${currentPageName} saved as draft successfully!`, {
      autoClose: 3000,
    });
  };
  const [draftPages, setDraftPages] = useState<(string | number)[]>([]);
  const GetAddListingPage = () => {
    switch (pathName) {
      case "/add-listing/info":
        setCurrentPageName("Listing Info");
        return <AddListingInfo />;
      case "/add-listing/location":
        setCurrentPageName("Listing location");
        return <AddLocation />;
      case "/add-listing/date-show-time":
        setCurrentPageName("Show date and time");
        return <AddShowDateAndTime />;
      case "/add-listing/products":
        setCurrentPageName("Pricing");
        return <AddPricing />;
      case "/add-listing/zoning-and-capacity":
        setCurrentPageName("Zoning and capacity");
        return <AddZoningAndCapacity />;
      case "/add-listing/shops":
        setCurrentPageName("Shop");
        return <AddShops />;
      case "/add-listing/dynamic-pricing":
        setCurrentPageName("Dynamic Pricing Strategy");
        return <DynamicPricingStrategy />;
      case "/add-listing/marketing-material":
        setCurrentPageName("Material Marketing");
        return <AddMaterialMarketing />;
      case "/add-listing/rules":
        setCurrentPageName("Rules");
        return <AddRules />;
      case "/add-listing/add-policies":
        setCurrentPageName("Policies");
        return <AddPolicies />;
      default:
        return;
    }
  };

  return (
    <>
      <div className="center-container">
        <AddListingHeader
          pageNumber={page}
          maximumNumberOfPages={maximumNumberOfPages}
          onGoBack={_handleGoBack}
          onContinue={_handleContinue}
          onSaveDraft={_handleSaveDraft}
          isDrafted={draftPages.includes(page)}
        />
        <GetAddListingPage />
      </div>
    </>
  );
};

export default index;
