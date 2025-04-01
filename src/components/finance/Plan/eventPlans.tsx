import React from "react";
import { Container, Table, Button, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const pricingPlans = [
  {
    name: "Basic",
    price: "$99",
    annualPrice: "$1,199",
    activation: "0% + $99",
    support: { label: "1 Year", variant: "primary" },
    storage: { label: "1 TB", variant: "success" },
    domains: "2 Free Domain names",
    features: [true, false, false, false, false],
  },
  {
    name: "Pro",
    price: "$299",
    annualPrice: "$3,499",
    activation: "5% + $149",
    support: { label: "5 Year", variant: "primary" },
    storage: { label: "5 TB", variant: "success" },
    domains: "5 Free Domain names",
    features: [true, true, true, false, true],
  },
  {
    name: "Premium",
    price: "$499",
    annualPrice: "$5,499",
    activation: "10% + $259",
    support: { label: "Life Long", variant: "primary" },
    storage: { label: "10 TB", variant: "success" },
    domains: "10 Free Domain names",
    features: [true, true, true, true, true],
  },
];

const EventPlans = () => {
  return (
    <Container className="mt-5">
      <div className="shadow-lg p-4 bg-white rounded">
        <Table bordered className="text-center">
          {/* Header Row */}
          <thead>
            <tr className="bg-light">
              <th className="text-start fw-bold">Check Our Plans</th>
              {pricingPlans.map((plan) => (
                <th key={plan.name} className="fw-bold">{plan.name}</th>
              ))}
            </tr>
          </thead>

          {/* Main Features */}
          <tbody>
            <tr>
              <td className="fw-bold">Main Features</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}></td>
              ))}
            </tr>
            <tr>
              <td>24/7 support</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>
                  <Badge bg={plan.support.variant}>{plan.support.label}</Badge>
                </td>
              ))}
            </tr>
            <tr>
              <td>Storage Capacity</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>
                  <Badge bg={plan.storage.variant}>{plan.storage.label}</Badge>
                </td>
              ))}
            </tr>

            {/* Complete Features */}
            <tr>
              <td className="fw-bold">Complete Features</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}></td>
              ))}
            </tr>
            <tr>
              <td>Domains</td>
              {pricingPlans.map((plan, index) => (
                <td key={index} className="fw-bold">{plan.domains}</td>
              ))}
            </tr>
            {["Money Back Guarantee", "App Integrations", "Future Updates", "Team Management", "Customer Support"].map(
              (feature, featureIndex) => (
                <tr key={featureIndex}>
                  <td>{feature}</td>
                  {pricingPlans.map((plan, index) => (
                    <td key={index}>
                      {plan.features[featureIndex] ? (
                        <FaCheckCircle color="green" />
                      ) : (
                        <FaTimesCircle color="red" />
                      )}
                    </td>
                  ))}
                </tr>
              )
            )}

            {/* Pricing */}
            <tr>
              <td className="fw-bold">Pricing</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}></td>
              ))}
            </tr>
            <tr>
              <td>Net Price</td>
              {pricingPlans.map((plan, index) => (
                <td key={index} className="fw-bold">{plan.price}</td>
              ))}
            </tr>
            <tr>
              <td>Annual Subscription</td>
              {pricingPlans.map((plan, index) => (
                <td key={index} className="fw-bold">{plan.annualPrice}</td>
              ))}
            </tr>
            <tr>
              <td>Activation Charges</td>
              {pricingPlans.map((plan, index) => (
                <td key={index}>{plan.activation}</td>
              ))}
            </tr>

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

export default EventPlans;
