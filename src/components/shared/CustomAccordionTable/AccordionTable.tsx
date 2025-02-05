import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { FC, ReactHTMLElement } from "react";
import { Dropdown } from "react-bootstrap";
import "./style.css";
interface IAccordionTableDataProps {
  id: number | string;
  title: string;
  subTitle?: string;
  tag?: string;
  accordionBody: any;
}
interface IAccordionTableProps {
  accordionName: string;
  data: IAccordionTableDataProps[];
  selectedAccordionId: number | string | null;
  handleSelectAccordion: (value: number) => void;
  setAccordionId: (value: number) => void;
  remove: boolean;
  edit: boolean;
  duplicate: boolean;
  handleRemove?: (id: number | string) => void;
  handleDuplicated?: (l: number | string) => void;
  handleEdit?: (id: number | string) => void;
}
const AccordionTable: FC<IAccordionTableProps> = ({
  accordionName,
  data,
  selectedAccordionId,
  handleSelectAccordion,
  setAccordionId,
  edit,
  duplicate,
  remove,
  handleRemove,
  handleDuplicated,
  handleEdit,
}) => {
  return (
    <>
      <div className="accordion" id="pricingTableAccordion">
        {data?.map((l: IAccordionTableDataProps, index: number) => (
          <>
            <div
              className="accordion-item border-2 mb-2 text-nowrap overflow-auto "
              key={l.id}
              style={{ borderRadius: "16px" }}
            >
              <div
                className={`accordion-header d-flex ${
                  selectedAccordionId === index
                    ? "selected-accordion-table-bg-color"
                    : `${
                        index === 0
                          ? "accordion-table-bg-color"
                          : "border-top accordion-table-bg-color"
                      }`
                }`}
              >
                <div
                  className="p-5"
                  onClick={() => handleSelectAccordion(index)}
                >
                  {selectedAccordionId === index ? (
                    <>
                      <ChevronUpIcon className="w-5 h-5" />
                    </>
                  ) : (
                    <>
                      <ChevronDownIcon className="w-5 h-5" />
                    </>
                  )}
                </div>
                <span
                  className="fs-4 fw-600 d-flex align-items-center justify-content-center w-8 accordion-id-section"
                  onClick={() => handleSelectAccordion(index)}
                >
                  {l.id}
                </span>
                <div
                  className="row flex-grow-1 align-items-center"
                  onClick={() => handleSelectAccordion(index)}
                >
                  <div className={`${l.tag ? "col-8" : "col-12"}`}>
                    <span className="fw-600 ms-lg-6 ps-lg-3">
                      {l.title}&nbsp; {l.subTitle ? `-  ${l.subTitle}` : ""}
                    </span>
                  </div>
                  {l.tag && (
                    <>
                      <div className="col-4">
                        <span className="badge rounded-pill py-1 accordion-tag-section">
                          {l.tag}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <div
                  className="d-flex align-items-center justify-content-center me-5 cursor-pointer"
                  onClick={() => setAccordionId(index)}
                >
                  <Dropdown>
                    <Dropdown.Toggle className=" fs-4 no-caret" as="a">
                      <i className="bi bi-three-dots fs-4"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className="dropdown-start position-absolute right-0 top-0 z-3"
                      align="start"
                    >
                      {duplicate && handleDuplicated && (
                        <Dropdown.Item onClick={() => handleDuplicated(l.id)}>
                          <i className="fe fe-copy me-1"></i> Duplicate
                        </Dropdown.Item>
                      )}
                      {remove && handleRemove && (
                        <>
                          <Dropdown.Item onClick={() => handleRemove(l.id)}>
                            <i className="fe fe-trash-2 me-1"></i> Delete
                          </Dropdown.Item>
                        </>
                      )}
                      {edit && (
                        <>
                          <Dropdown.Item
                            onClick={() => {
                              handleEdit && handleEdit(l.id);
                            }}
                          >
                            <i className="fe fe-edit me-1"></i> Edit
                          </Dropdown.Item>
                        </>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div
                id="collapseOne"
                className={`accordion-collapse collapse ${
                  selectedAccordionId === index ? "show" : ""
                }`}
                data-bs-parent={`#${accordionName}`}
              >
                {l.accordionBody}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default AccordionTable;
