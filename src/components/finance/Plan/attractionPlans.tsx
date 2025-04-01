import React from "react";
import { Container, Table, Button, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const pricingPlans = [
  {
    name: "Basic",
    commitment: "6 Months",
    frequency: "Daily",
    commission: "15%",
    listingFee: "$1.50",
    transactionFee: "$2.50",
    breakingCharges: "2.75%",
    processFee: "$0.50",
    services: [true, true, true, true, true, true, true, true, true, false, false, false],
  },
  {
    name: "Premium",
    commitment: "One Year",
    frequency: "Daily",
    commission: "10%",
    listingFee: "$2.50",
    transactionFee: "$3.50",
    breakingCharges: "2.25%",
    processFee: "$0.75",
    services: [true, true, true, true, true, true, true, true, true, false, false],
  },
  {
    name: "White Label",
    commitment: "One Year",
    frequency: "Daily",
    commission: "2%",
    listingFee: "$2.00",
    transactionFee: "$2.75",
    breakingCharges: "2.75%",
    processFee: "$1.00",
    services: [true, true, true, true, true, true, true, true, true, true, true],
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
      "name": "System Notification",
      "value": "$0.50"
    },
    {
      "name": "Dedicated Email Blast",
      "value": "$0.70"
    },
    {
      "name": "Tixbox Newsletter",
      "value": "$0.50"
    },
    {
      "name": "SMS Blast",
      "value": "$0.90"
    },
    {
      "name": "Whatsapp",
      "value": "$0.70"
    },
    {
      "name": "Messenger",
      "value": "$0.70"
    },
    {
      "name": "We Chat",
      "value": "$0.70"
    },
    {
      "name": "Telegram",
      "value": "$0.70"
    },
    {
      "name": "Customized Database",
      "value": "charged"
    },
    {
      "name": "Marketing bundles Available",
      "value": "charged"
    }
  ]

const customer = [
    {
      "name": "Physical Ticket",
      "value": "charged"
    },
    {
      "name": "SMS Ticket",
      "value": "charged"
    },
    {
      "name": "Whatsapp Ticket",
      "value": "charged"
    },
    {
      "name": "Storage Box",
      "value": "charged"
    },
    {
      "name": "Courier",
      "value": "charged"
    },
    {
      "name": "Ticket Refund",
      "value": "charged"
    },
    {
      "name": "Event Cancellation",
      "value": "charged"
    },
    {
      "name": "Flexible Ticket",
      "value": "charged"
    },
    {
      "name": "Upgrades",
      "value": "charged"
    },
    {
      "name": "Downgrades",
      "value": "charged"
    },
    {
      "name": "Manual Seat Selection",
      "value": "$5.00"
    },
    {
      "name": "Reservation",
      "value": "$10.00"
    },
    {
      "name": "Installment Plan",
      "value": "charged"
    }
  ]

const organizer =[
    {
      "name": "Customized Reporting",
      "value": ""
    },
    {
      "name": "Customized Design",
      "value": ""
    },
    {
      "name": "Dynamic Pricing",
      "value": ""
    },
    {
      "name": "Advance Funding",
      "value": "5.00%"
    },
    {
      "name": "Early Settlement",
      "value": "25.00%"
    },
    {
      "name": "Dedicated Chatbot Service",
      "value": "$250.00"
    },
    {
      "name": "On Site Services",
      "value": ""
    },
    {
      "name": "Marketing Services",
      "value": ""
    },
    {
      "name": "Advertisement Services",
      "value": ""
    },
    {
      "name": "PRO Services",
      "value": ""
    },
    {
      "name": "Creative Services",
      "value": ""
    },
    {
      "name": "Sales Centres",
      "value": ""
    }
  ]

const AttractionPlans = () => {
  return (
    <Container className="mt-5">
      <div className="shadow-lg p-4 bg-white rounded">
        <Table bordered className="text-center">
          <thead>
            <tr className="bg-light">
              <th className="text-start fw-bold">Check Our Plans</th>
              {pricingPlans.map((plan) => (
                <th key={plan.name} className="fw-bold">{plan.name}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {/* Commitment & Frequency */}
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
              <td className="fw-bold">Service Fees</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}></td>
              ))}
            </tr>
            <tr>
              <td>Commission</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>{plan.commission}</td>
              ))}
            </tr>
            <tr>
              <td>Listing Fee</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>{plan.listingFee}</td>
              ))}
            </tr>
            <tr>
              <td>Invitation</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>{plan.transactionFee}</td>
              ))}
            </tr>

            {/* System Charges & Fees */}
            <tr>
              <td className="fw-bold">System Charges & Fees</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}></td>
              ))}
            </tr>
            <tr>
              <td>Banking Charges</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>{plan.breakingCharges}</td>
              ))}
            </tr>
            <tr>
              <td>Process Fee (Per Order)</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>{plan.processFee}</td>
              ))}
            </tr>

            {/* Complementary Services */}
            <tr>
              <td className="fw-bold">Complementary Services</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}></td>
              ))}
            </tr>
            {features.map((feature, featureIndex) => (
              <tr key={featureIndex}>
                <td>{feature}</td>
                {pricingPlans.map((plan, index) => (
                  <td key={index}>
                    {plan.services[featureIndex] ? (
                      <span className="text-success">Yes</span>
                    ) : (
                        <span className="text-danger">No</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}

{/* Database Marketing */}
<tr>
              <td className="fw-bold">Database Marketing</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}></td>
              ))}
            </tr>
            {marketing.map((feature, featureIndex) => (
              <tr key={featureIndex}>
                <td>{feature.name}</td>
                {pricingPlans.map((plan, index) => (
                  <td key={index}>
                    {feature.value}
                  </td>
                ))}
              </tr>
            ))}

            {/* Customer Add Ons */}
<tr>
              <td className="fw-bold">Customer Add Ons</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}></td>
              ))}
            </tr>
            {customer.map((feature, featureIndex) => (
              <tr key={featureIndex}>
                <td>{feature.name}</td>
                {pricingPlans.map((plan, index) => (
                  <td key={index}>
                    {feature.value}
                  </td>
                ))}
              </tr>
            ))}

{/* Organizer Add Ons */}
<tr>
              <td className="fw-bold">Organizer Add Ons</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}></td>
              ))}
            </tr>
            {organizer.map((feature, featureIndex) => (
              <tr key={featureIndex}>
                <td>{feature.name}</td>
                {pricingPlans.map((plan, index) => (
                  <td key={index}>
                    {feature.value}
                  </td>
                ))}
              </tr>
            ))}
            {/* Action Buttons */}
            <tr>
              <td></td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>
                  <Button variant="primary" className="fw-bold">Choose Plan</Button>
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default AttractionPlans;
