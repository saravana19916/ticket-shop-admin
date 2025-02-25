import React, { FC } from "react";

import { Accordion, ProgressBar } from "react-bootstrap";

import { ISingleGuestInvitationList } from "../type";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import StyledTicketIndicate from "../../styledComponents/ticket-indicat";
import {
  AccordionButton,
  AccordionBodyTop,
} from "../../styledComponents/accordion";

interface IProps {
  item: ISingleGuestInvitationList;
  index: string;
}

const SingleGuestListAccordion: FC<IProps> = ({ item, index }) => {
  return (
    <>
      <Accordion.Item
        eventKey={index}
        className="border overflow-hidden p-0"
        style={{ borderRadius: "16px" }}
      >
        <Accordion.Header
          style={{ borderRadius: "16px" }}
          className="custom-toggle-button px-2"
        >
          <div className="d-flex p-3 w-100">
            <div className="row align-items-center flex-fill gap-2">
              <div className="col-12 col-md-5 col-lg-3 d-flex align-items-center gap-4">
                <StyledTicketIndicate
                  status={
                    item.ticket as
                      | "Bronze Ticket"
                      | "Silver Ticket"
                      | "Gold Ticket"
                      | "Platinum Ticket"
                      | "VIP Ticket"
                      | "VIP Lounge"
                  }
                >
                  <i className="fa fa-circle fs-3" aria-hidden="true"></i>
                </StyledTicketIndicate>

                <h4 className="fw-600 m-0 text-black">{item.ticket}</h4>
              </div>

              <div className="col-12 col-md-5 col-lg-4">
                <ProgressBar
                  className="h-5 mt-2 mb-2"
                  animated
                  now={item.availabilityPercentage}
                  label={item.availabilityPercentage}
                  variant="green-1"
                />
              </div>
              <div className="col-6 ms-auto col-lg-2 d-flex justify-content-around bg-light-gray rounded-pill px-3 py-2 mt-4">
                <MinusIcon className="w-4 h-4 me-1 mb-1px fw-bold" />
                <span className="fw-bold">{item.count}</span>
                <PlusIcon className="w-4 h-4 me-1 mb-1px fw-bold" />
              </div>
              <div className="col-6 col-lg-2 d-flex flex-column align-self-end ms-auto">
                <h4 className="m-0 fw-600 text-black">AED {item.amount}</h4>
                <p className="m-0 text-black" style={{ fontSize: "10px" }}>
                  net of all taxes
                </p>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="p-2 pb-6">
          <AccordionBodyTop className="row px-3 px-lg-7 py-7 mx-md-1 mx-lg-2 mb-0 mt-3">
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-2">
                <h5 className="m-0 fw-bold">Age Limit : </h5>
                <p className="m-0">{item.ageLimit}</p>
              </div>
              <div className="w-75 d-flex flex-column gap-3">
                <span className="d-flex border-bottom border-grey my-2"></span>
                <h4 className="m-0 fw-bold">Inclusions</h4>
                <div
                  className="mt-2 d-flex flex-column align-items-start flex-wrap"
                  style={{ gap: "0.5rem 0rem" }}
                >
                  {item?.inclusions?.map((inclusion) => (
                    <>
                      <span>{inclusion}</span>
                    </>
                  ))}
                </div>
              </div>
              <div className="d-flex flex-wrap filter-container my-5">
                <AccordionButton
                  className="btn px-6 py-2"
                  style={{ minWidth: "138px" }}
                >
                  Ticket Rules
                </AccordionButton>
                <AccordionButton
                  className="btn px-6 py-2"
                  style={{ minWidth: "138px" }}
                >
                  Floor Plan
                </AccordionButton>
              </div>
            </div>
          </AccordionBodyTop>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default SingleGuestListAccordion;
