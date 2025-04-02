import React from "react";
import { Container, Table, Button, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const pricingPlans = [
  {
    name: "Basic",
    commitment: "6 Months",
    frequency: "Daily",
    commission: "15.00%",
    listingFee: "$250.00",
    transactionFee: "$3.00",
    bankingCharges: "3.50%",
    processFee: "$2.9",
    services: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      false,
    ],
  },
  {
    name: "Premium",
    commitment: "One Year",
    frequency: "Daily",
    commission: "10.00%",
    listingFee: "$250.00",
    transactionFee: "$2.50",
    bankingCharges: "3.25%",
    processFee: "$2.9",
    services: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
    ],
  },
  {
    name: "White Label",
    commitment: "Two Year",
    frequency: "Daily",
    commission: "2.00%",
    listingFee: "$45.00",
    transactionFee: "$1.50",
    bankingCharges: "2.75%",
    processFee: "$2.9",
    services: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ],
  },
];

const features = [
  "Main Page Listing",
  "Categorized Listing",
  "Dedicated Page",
  "Payment Options",
  "Premium Security",
  "Organizer Pannel",
  "Post on Social media",
  "Inclusion on newsletter (Shared)",
  "Genre recommendation",
  "Home Page Billboard",
  "Sponsored Listing",
  "Revenue Sharing",
];

const marketing = [
  {
    name: "System Notification",
    value: "$0.50",
    whiteValue: "$0.40"
  },
  {
    name: "Dedicated Email Blast",
    value: "$0.70",
    whiteValue: "$0.56"
  },
  {
    name: "Tixbox Newsletter",
    value: "$0.50",
    whiteValue: "$0.40"
  },
  {
    name: "SMS Blast",
    value: "$0.90",
    whiteValue: "$0.72"
  },
  {
    name: "Whatsapp",
    value: "$0.70",
    whiteValue: "$0.56"
  },
  {
    name: "Messenger",
    value: "$0.70",
    whiteValue: "$0.56"
  },
  {
    name: "We Chat",
    value: "$0.70",
    whiteValue: "$0.56"
  },
  {
    name: "Telegram",
    value: "$0.70",
    whiteValue: "$0.56"
  },
  {
    name: "Customized Database Marketing bundles Available",
    value: "charged",
    whiteValue: "charged"
  }
];

const customer = [
  {
    name: "Physical Ticket",
    value: "charged",
  },
  {
    name: "SMS Ticket",
    value: "charged",
  },
  {
    name: "Whatsapp Ticket",
    value: "charged",
  },
  {
    name: "Storage Box",
    value: "charged",
  },
  {
    name: "Courier",
    value: "charged",
  },
  {
    name: "Ticket Refund",
    value: "charged",
  },
  {
    name: "Event Cancellation",
    value: "charged",
  },
  {
    name: "Flexible Ticket",
    value: "charged",
  },
  {
    name: "Upgrades",
    value: "charged",
  },
  {
    name: "Downgrades",
    value: "charged",
  },
  {
    name: "Manual Seat Selection",
    value: "$5.00",
  },
  {
    name: "Reservation",
    value: "$10.00",
  },
  {
    name: "Installment Plan",
    value: "charged",
  },
];

const organizer = [
  {
    name: "Customized Reporting",
    value: "",
  },
  {
    name: "Customized Design",
    value: "",
  },
  {
    name: "Dynamic Pricing",
    value: "",
  },
  {
    name: "Advance Funding",
    value: "5.00%",
    small: "Optional"
  },
  {
    name: "Early Settlement",
    value: "25.00%",
    small: "Optional"
  },
  {
    name: "Dedicated Chatbot Service",
    value: "$250.00",
    small: "per communication"
  },
  {
    name: "On Site Services",
    value: "",
  },
  {
    name: "Marketing Services",
    value: "",
  },
  {
    name: "Advertisement Services",
    value: "",
  },
  {
    name: "PRO Services",
    value: "",
  },
  {
    name: "Creative Services",
    value: "",
  },
  {
    name: "Sales Centres",
    value: "",
  },
];

const AccommodationPlans = () => {
  return (
    <Container className="mt-5">
      <div className="shadow-lg p-4 bg-white rounded">
        <Table bordered className="text-center" id="plan-table">
          <thead>
            <tr className="bg-light">
              <th className="text-center fw-bold">Check Our Plans</th>
              {pricingPlans.map((plan) => (
                <th key={plan.name} className="fw-bold">
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {/* Commitment & Frequency */}
            <tr>
              <td
                className="fw-bold text-center"
                colSpan={pricingPlans.length + 1}
              >
                Commitment
              </td>
            </tr>
            <tr>
              <td>Commitment</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>{plan.commitment}</td>
              ))}
            </tr>
            <tr>
              <td>Frequency</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>{plan.frequency}</td>
              ))}
            </tr>

            {/* Service Fees */}
            <tr>
              <td
                className="fw-bold text-center"
                colSpan={pricingPlans.length + 1}
              >
                Service Fees
              </td>
            </tr>
            <tr>
              <td>Commission</td>
              {pricingPlans.map((plan, index) => (
                <td key={index} className="text-danger">
                  {plan.commission}{" "}
                  <span className="text-gray small">per issued</span>
                </td>
              ))}
            </tr>
            <tr>
              <td>Listing Fee</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>
                  {plan.listingFee}{" "}
                  <span className="text-gray small">per year</span>
                </td>
              ))}
            </tr>
            <tr>
              <td>Invitation</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>
                  {plan.transactionFee}{" "}
                  <span className="text-gray small">per issued</span>
                </td>
              ))}
            </tr>

            {/* System Charges & Fees */}
            <tr>
              <td
                className="fw-bold text-center"
                colSpan={pricingPlans.length + 1}
              >
                System Charges & Fees
              </td>
            </tr>
            <tr>
              <td>Banking Charges</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>
                  {plan.bankingCharges}{" "}
                  <span className="text-gray small">Compulsory</span>
                </td>
              ))}
            </tr>
            <tr>
              <td>Process Fee (Per Order)</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>
                  {plan.processFee}{" "}
                  <span className="text-gray small">Compulsory</span>
                </td>
              ))}
            </tr>

            {/* Complementary Services */}
            <tr>
              <td
                className="fw-bold text-center"
                colSpan={pricingPlans.length + 1}
              >
                Complementary Services
              </td>
            </tr>
            {features.map((feature, featureIndex) => (
              <tr key={featureIndex}>
                <td>{feature}</td>
                {pricingPlans.map((plan, index) => (
                  <td key={index}>
                    {plan.services[featureIndex] ? (
                      <>
                        <span className="text-success">Yes</span>
                        {featureIndex === 6 && <span className="text-gray small"> One time</span>}
                        {featureIndex === 7 && <span className="text-gray small"> One post</span>}
                        {featureIndex === 9 && <span className="text-gray small"> conditions</span>}
                        {featureIndex === 10 && <span className="text-gray small"> conditions</span>}
                        {featureIndex === 11 && <span className="text-gray small"> conditions</span>}
                      </>
                    ) : (
                      <span className="text-danger">
                        No <span className="text-gray small">charges apply</span>
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}

            {/* Database Marketing */}
            <tr>
              <td
                className="fw-bold text-center"
                colSpan={pricingPlans.length + 1}
              >
                Database Marketing
              </td>
            </tr>
            {marketing.map((feature, featureIndex) => (
              <tr key={featureIndex}>
                <td>{feature.name}</td>
                {pricingPlans.map((plan, index) => (
                  <td key={index}>
                    {plan.name === "White Label" ? feature.whiteValue : feature.value}
                  </td>
                ))}
              </tr>
            ))}

            {/* Customer Add Ons */}
            <tr>
              <td
                className="fw-bold text-center"
                colSpan={pricingPlans.length + 1}
              >
                Customer Add Ons
              </td>
            </tr>
            {customer.map((feature, featureIndex) => (
              <tr key={featureIndex}>
                <td>{feature.name}</td>
                {pricingPlans.map((plan, index) => (
                  <td key={index}>
                    {feature.value}
                    {featureIndex >= customer.length - 3 && ( // Show only for last 3 records
                      <span className="text-gray small ms-2">Sharable</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}

            {/* Organizer Add Ons */}
            <tr>
              <td
                className="fw-bold text-center"
                colSpan={pricingPlans.length + 1}
              >
                Organizer Add Ons
              </td>
            </tr>
            {organizer.map((feature, featureIndex) => (
              <tr key={featureIndex}>
                <td>{feature.name}</td>
                {pricingPlans.map((plan, index) => (
                  <td key={index}>{feature.value}  <span className="text-gray small">{feature.small}</span></td>
                ))}
              </tr>
            ))}
            {/* Action Buttons */}
            <tr>
              <td></td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>
                  <Button variant="primary" className="fw-bold">
                    Choose Plan
                  </Button>
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default AccommodationPlans;
