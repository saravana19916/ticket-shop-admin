import React from "react";
import { Container, Table, Button, Badge } from "react-bootstrap";
import CustomTooltip from "../../shared/CustomTooltip";

const pricingPlans = [
  {
    name: "Basic",
    commitment: "One Event",
    frequency: "One Time",
    commission: "8%",
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
    commitment: "5 Envents",
    frequency: "5 Times",
    commission: "6.00%",
    listingFee: "$150.00",
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
      false,
      false,
      false,
    ],
  },
  {
    name: "White Label",
    commitment: "2 Year",
    frequency: "5 times +",
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
    whiteValue: "$0.40",
  },
  {
    name: "Dedicated Email Blast",
    value: "$0.70",
    whiteValue: "$0.56",
  },
  {
    name: "Tixbox Newsletter",
    value: "$0.50",
    whiteValue: "$0.40",
  },
  {
    name: "SMS Blast",
    value: "$0.90",
    whiteValue: "$0.72",
  },
  {
    name: "Whatsapp",
    value: "$0.70",
    whiteValue: "$0.56",
  },
  {
    name: "Messenger",
    value: "$0.70",
    whiteValue: "$0.56",
  },
  {
    name: "We Chat",
    value: "$0.70",
    whiteValue: "$0.56",
  },
  {
    name: "Telegram",
    value: "$0.70",
    whiteValue: "$0.56",
  },
  {
    name: "Customized Database Marketing bundles Available",
    value: "charged",
    whiteValue: "charged",
  },
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
    small: "Optional",
  },
  {
    name: "Early Settlement",
    value: "25.00%",
    small: "Optional",
  },
  {
    name: "Dedicated Chatbot Service",
    value: "$250.00",
    small: "per communication",
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

const EventPlans = () => {
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
              <td>
                Commission
                <CustomTooltip title="per issued" />
              </td>
              {pricingPlans.map((plan, index) => (
                <td key={index} className="text-danger">
                  {plan.commission}{" "}
                </td>
              ))}
            </tr>
            <tr>
              <td>
                Listing Fee
                <CustomTooltip title="per year" />
              </td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>{plan.listingFee} </td>
              ))}
            </tr>
            <tr>
              <td>
                Invitation
                <CustomTooltip title="per issued" />
              </td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>{plan.transactionFee} </td>
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
              <td>
                Banking Charges
                <CustomTooltip title="Compulsory" />
              </td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>{plan.bankingCharges} </td>
              ))}
            </tr>
            <tr>
              <td>
                Process Fee (Per Order)
                <CustomTooltip title="Compulsory" />
              </td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>{plan.processFee} </td>
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
                <td>
                  {feature}
                  {(featureIndex === 6 ||
                    featureIndex === 7 ||
                    (featureIndex >= 9 && featureIndex <= 11)) && (
                    <CustomTooltip
                      title={
                        featureIndex === 6
                          ? "One time"
                          : featureIndex === 7
                          ? "One post"
                          : "Charges apply"
                      }
                    />
                  )}
                </td>
                {pricingPlans.map((plan, index) => (
                  <td key={index}>
                    {plan.services[featureIndex] ? (
                      <>
                        <span className="text-success">Yes</span>
                      </>
                    ) : (
                      <span className="text-danger">No</span>
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
                    {plan.name === "White Label"
                      ? feature.whiteValue
                      : feature.value}
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
                <td>
                  {feature.name}
                  {featureIndex >= customer.length - 3 && (
                    <CustomTooltip title="Sharable" />
                  )}
                </td>
                {pricingPlans.map((plan) => (
                  <td key={plan.name}>{feature.value}</td>
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
                <td>
                  {feature.name}
                  {feature.small && <CustomTooltip title={feature.small} />}
                </td>
                {pricingPlans.map((plan) => (
                  <td key={plan?.name}>{feature.value}</td>
                ))}
              </tr>
            ))}
            {/* Action Buttons */}
            <tr>
              <td></td>
              {pricingPlans.map((plan) => (
                <td key={plan.name}>
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

export default EventPlans;
