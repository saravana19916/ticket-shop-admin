import React, { FC } from "react";

import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import { ISingleGuestInvitationList } from "../type";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import StyledTicketIndicate from "../../styledComponents/ticket-indicat";

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

                <h4 className="fw-bold m-0">{item.ticket}</h4>
              </div>

              <div className="col-12 col-md-5 col-lg-3">
                <p className="m-0">availability</p>
                <div className="d-flex align-items-center justify-content-between bg-light-gray px-3 py-2 rounded-pill gap-5">
                  <small className="bg-white px-4 py-1 rounded-pill w-100 text-dark">
                    {item.availability}
                  </small>
                  <h6 className="m-0 fw-bold">
                    {item.availabilityPercentage}%
                  </h6>
                </div>
              </div>
              <div className="col-6 ms-auto col-lg-2 d-flex justify-content-around bg-light-gray rounded-pill px-3 py-2 mt-4">
                <MinusIcon className="w-4 h-4 me-1 mb-1px fw-bold" />
                <span className="fw-bold">{item.count}</span>
                <PlusIcon className="w-4 h-4 me-1 mb-1px fw-bold" />
              </div>
              <div className="col-6 col-lg-2 d-flex flex-column align-self-end ms-auto">
                <h4 className="m-0 fw-bold">AED {item.amount}</h4>
                <p className="m-0">net of all taxes</p>
              </div>
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="p-2 pb-6">
          <div className="d-flex flex-column gap-3">
            <div className="d-flex align-items-center gap-2">
              <h5 className="m-0 fw-bold">Age Limit : </h5>
              <p className="m-0">{item.ageLimit}</p>
            </div>
            <div className="w-75 d-flex flex-column gap-3">
              <span className="d-flex border-bottom border-grey my-2"></span>
              <h5 className="m-0 fw-bold">Inclusions</h5>
              <div
                className="ms-3 d-flex flex-column flex-md-row align-items-start align-items-md-center flex-wrap"
                style={{ gap: "2rem 4rem" }}
              >
                {item?.inclusions?.map((inclusion) => (
                  <>
                    <span>{inclusion}</span>
                  </>
                ))}
              </div>
            </div>
            <div className="filter-container my-5">
              <Link to="#" className="btn btn-default btn-pill">
                Ticket Rules
              </Link>
              <Link to="#" className="btn btn-default btn-pill">
                Floor Plan
              </Link>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default SingleGuestListAccordion;
