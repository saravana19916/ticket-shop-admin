import { TabPanel } from "@headlessui/react";
import { EllipsisHorizontalIcon, PlusIcon } from "@heroicons/react/24/outline";
import React, { FC, useEffect, useState } from "react";
import { Badge, Dropdown } from "react-bootstrap";
import ShareModal from "./ShareModal";
import { toast } from "react-toastify";
import moment from "moment";
import { ButtonPrimary } from "../../styledComponents/styledButton";
interface ISharedAccessProps {}
export interface ISharedAccessDataProps {
  status: string;
  fullName: string;
  company: string;
  cellPhone: string;
  expireDate: string;
  tickets: string;
  language: string;
  id: number | string;
}

const sharedAccessData: ISharedAccessDataProps[] = [
  {
    status: "Expired",
    fullName: "Rahul",
    company: "Qtickets",
    cellPhone: "97477829686",
    expireDate: "2022-09-09",
    tickets: "1",
    language: "en",
    id: 1,
  },
  {
    status: "Expired",
    fullName: "Aisha",
    company: "EventPro",
    cellPhone: "12345678910",
    language: "es",
    expireDate: "2022-10-09",
    tickets: "2",
    id: 2,
  },
  {
    status: "Expired",
    fullName: "John Doe",
    company: "TicketMaster",
    cellPhone: "442071234567",
    language: "fr",
    expireDate: "2023-10-01",
    tickets: "3",
    id: 3,
  },
];

const index: FC<ISharedAccessProps> = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(sharedAccessData);
  const [editData, setEditData] = useState<ISharedAccessDataProps | undefined>(
    undefined
  );

  // Function to delete an item based on the index
  const handleDelete = (index: number) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
    toast.success("Deleted successfully.");
  };

  // Function to duplicate an item based on the index
  const handleDuplicate = (index: number) => {
    const duplicatedItem = { ...data[index] };
    setData((prevData) => [...prevData, duplicatedItem]);
    toast.success("Duplicated successfully.");
  };

  const handleEdit = (data: ISharedAccessDataProps) => {
    setEditData(data);
    setModalOpen(true);
  };
  const _handleAddShareAccess = () => {
    setEditData(undefined);
    setModalOpen(true);
  };

  return (
    <>
      <ShareModal
        show={isModalOpen}
        handleClose={setModalOpen}
        setData={setData}
        data={data}
        editData={editData}
      />
      <TabPanel>
        <div className="row">
          <div className="col-md-6 col-12 mb-4">
            <div className="d-flex gap-3">
              <div className="input-group mb-3 rounded-pill">
                <span
                  className="input-group-text bg-light-gray border-end-0 rounded-start-pill"
                  id="searchAccess"
                  style={{
                    borderEndStartRadius: "50px",
                    borderStartStartRadius: "50px",
                  }}
                >
                  <i className="fe fe-search" aria-hidden="false"></i>
                </span>
                <input
                  type="text"
                  name="search"
                  id="searchAccess"
                  className="form-control border-start-0 rounded-end-pill bg-light-gray"
                  placeholder="Search"
                  style={{
                    borderStartEndRadius: "50px",
                    borderEndEndRadius: "50px",
                  }}
                />
              </div>
              <select
                className="form-select rounded-pill w-50"
                aria-label="status"
              >
                <option selected>All statuses</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <ButtonPrimary
              style={{ padding: "6px 24px" }}
              type="button"
              className="float-end mt-2 btn"
              onClick={_handleAddShareAccess}
            >
              <span>Share</span>
            </ButtonPrimary>
            {/* <div className="float-end">
              <button type="button" className="btn btn-primary rounded-pill">
                Share
              </button>
            </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-3">
            <div className="">
              <table className="table text-nowrap table-striped-columns">
                <thead>
                  <tr>
                    <th className="fw-bold text-center border-end text-capitalize">
                      Status
                    </th>
                    <th className="fw-bold text-center border-end text-capitalize">
                      Full Name
                    </th>
                    <th className="fw-bold text-center border-end text-capitalize">
                      Company
                    </th>
                    <th className="fw-bold text-center border-end text-capitalize">
                      Cellphone
                    </th>
                    <th className="fw-bold text-center border-end text-capitalize">
                      Expiry Date
                    </th>
                    <th className="fw-bold text-center border-end text-capitalize">
                      Tickets
                    </th>
                    <th className="fw-bold text-center text-capitalize">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((l: ISharedAccessDataProps, i: number) => (
                    <tr key={i}>
                      <td className="text-center">
                        <Badge
                          className="bg-light text-dark border p-2"
                          style={{ fontSize: "14px" }}
                        >
                          {l.status}
                        </Badge>
                      </td>
                      <td className="text-center">
                        <span className="d-inline-block mt-2">
                          {l.fullName}
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="d-inline-block mt-2">{l.company}</span>
                      </td>
                      <td className="text-center">
                        <span className="d-inline-block mt-2">
                          {l.cellPhone ? `+${l.cellPhone}` : ""}
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="d-inline-block mt-2">
                          {l.expireDate
                            ? moment(l.expireDate).format("DD MMMM YYYY")
                            : ""}
                        </span>
                      </td>
                      <td className="text-center border-end">
                        <span className="d-inline-block mt-2">
                          {l.tickets} Ticket Types
                        </span>
                      </td>
                      <td className="text-center position-relative">
                        <Dropdown>
                          <Dropdown.Toggle className=" no-caret" as="a">
                            <i className="bi bi-three-dots fs-4"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-start"
                            align="start"
                            style={{
                              position: "absolute",
                              top: "100%",
                              right: 0,
                              zIndex: 10050,
                            }}
                          >
                            <Dropdown.Item onClick={() => handleDuplicate(i)}>
                              <i className="fe fe-copy me-1"></i> Duplicate
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDelete(i)}>
                              <i className="fe fe-trash-2 me-1"></i> Delete
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleEdit(l)}>
                              <i className="fe fe-edit me-1"></i> Edit
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </TabPanel>
    </>
  );
};

export default index;
