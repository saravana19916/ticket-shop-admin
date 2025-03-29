import React, { useState } from "react";
import { Card, Dropdown, InputGroup, FormControl } from "react-bootstrap";
import { Edit2, Eye, Mail, Slash, Trash2 } from "react-feather";
import {
  IconButtonPrimary,
  ButtonPrimary,
} from "../../styledComponents/styledButton";
import { ArrowDownTrayIcon, WifiIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { Download, Filter } from "react-feather";
import { ButtonPrimaryLight } from "../../styledComponents/styledButton";
import { SuccessBadge } from "../../styledComponents/badge";
import SearchBar from "../../shared/SearchBar";
import CustomDropdownMenu from "../../shared/CustomDropdownMenu";
import { FaFingerprint } from "react-icons/fa";
import { TabPanel } from "@headlessui/react";
import { Imagesdata } from "../../../commondata/commonimages";
import InviteUserModal from "./InviteUserModal";
import EditUserModel from "./EditUserModel";

const index = () => {
  const navigate = useNavigate();
  const users = [
    {
      name: "Fati Karimi",
      email: "fati@alchemyproject.co",
      role: "Platform Owner",
    },
    {
      name: "Fiona primavera",
      email: "fiona.primavera",
      role: "Platform Owner",
    },
    {
      name: "Gwen Riemens",
      email: "istiaque@tixbox.com",
      role: "Platform Owner",
    },
    {
      name: "Josh Pow",
      email: "josh.pow",
      role: "Platform Owner",
    },
    {
      name: "Mac S far",
      email: "mac@alchemyproject.co",
      role: "Platform Owner",
    },
    {
      name: "Sandeep polavarapu",
      email: "sandeep.polavarapu",
      role: "Platform Owner",
    },
    {
      name: "Sandra Crowley",
      email: "sandra.crowley",
      role: "Platform Owner",
    },
  ];

  const history = [
    {
      full_name: "Vijay Bhargav",
      function_title: "Software Engineer",
      time_access: "12/03/2025, 17:30 ",
      valid_until: "12/03/2025, 17:30 ",
      access_reason: "Provide technical support",
    },
  ];

  const handleEdit = (id: number) => {
    setSelectedUser(id);
    setShowEditUserModal((prev) => !prev);
  };

  const handleDelete = (id: number) => {
    navigate(`${import.meta.env.BASE_URL}view-order/${id}`);
  };
  const [showInviteUserModal, setShowInviteUserModal] =
    useState<boolean>(false);
  const handleInviteModal = () => setShowInviteUserModal((prev) => !prev);

  const [showEditUserModal, setShowEditUserModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<number>(0);
  const handleEditModal = () => {
    setShowEditUserModal((prev) => !prev);
  };
  return (
    <>
      <TabPanel>
        <InviteUserModal
          show={showInviteUserModal}
          handleClose={handleInviteModal}
        />

        <div className="row pt-lg-5 pt-0 px-0 pt-xl-5">
          <p className="fw-600 fs-26px text-black mb-6">Users</p>
          <div className="col-12 col-md-6 mb-6">
            <div className="row">
              <div className="col-8">
                <SearchBar />
                <p className="mt-3 ms-3">
                  A minimum of four characters is required
                </p>
              </div>
              <div className="col-4">
                <ButtonPrimaryLight className="btn py-2">
                  <Filter className="w-5 h-5" />
                </ButtonPrimaryLight>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 text-end mb-6">
            <ButtonPrimary
              type="button"
              className="btn m-3"
              style={{ minWidth: "118px" }}
              onClick={handleInviteModal}
            >
              Invite User
            </ButtonPrimary>
            <IconButtonPrimary className="btn" style={{ width: "118px" }}>
              <ArrowDownTrayIcon className="w-5 h-5 me-2 mb-1" />
              <span>Export</span>
            </IconButtonPrimary>
          </div>
          <div className="col-12 table-responsive">
            <table className="table table-striped table-hover bordered text-nowrap">
              <thead className="border-0">
                <tr>
                  <th className="fw-bold text-start border-end text-capitalize">
                    Name
                  </th>
                  <th className="fw-bold text-start border-end text-capitalize">
                    Email
                  </th>
                  <th className="fw-bold text-start border-end text-capitalize">
                    Role
                  </th>
                  <th className="fw-bold text-start text-capitalize">Action</th>
                </tr>
              </thead>
              <tbody className="border-0">
                {users.map((row) => (
                  <tr>
                    <td className="text-start align-middle">
                      <i className="fa fa-user-circle me-3"></i>
                      {row.name}
                    </td>
                    <td className="text-start align-middle">{row.email}</td>
                    <td className="text-start align-middle">{row.role}</td>
                    <td className="text-start align-middle">
                      <CustomDropdownMenu
                        menuItems={[
                          {
                            itemName: "Edit",
                            onClick: () => handleEdit(1),
                            icon: <Edit2 size={20} />,
                          },
                          {
                            itemName: "Delete",
                            onClick: () => {},
                            icon: <Trash2 size={20} />,
                          },
                        ]}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row pt-lg-5 pt-0 px-0 pt-xl-5 mt-8">
          <p className="fw-600 fs-26px text-black mb-6">
            Temporary Access History
          </p>
          <p>
            For your convenience, certain Tixbox.com employees may get temporary
            access to your account without an invitation in the case its
            considered necessary. Data is shown for the past 90
          </p>
          <p>Get a weekly email if Tixbox.com employees accessed my account</p>
          <div className="col-12 col-md-6 mb-6">
            <div className="row">
              <div className="col-8">
                <SearchBar />
                <p className="mt-3 ms-3">
                  A minimum of four characters is required
                </p>
              </div>
              <div className="col-4">
                <ButtonPrimaryLight className="btn py-2">
                  <Filter className="w-5 h-5" />
                </ButtonPrimaryLight>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 text-end mb-6">
            <IconButtonPrimary className="btn" style={{ width: "118px" }}>
              <ArrowDownTrayIcon className="w-5 h-5 me-2 mb-1" />
              <span>Export</span>
            </IconButtonPrimary>
          </div>
          <div className="col-12 table-responsive">
            <table className="table table-striped table-hover bordered text-nowrap">
              <thead className="border-0">
                <tr>
                  <th className="fw-bold text-start border-end text-capitalize">
                    Full Name
                  </th>
                  <th className="fw-bold text-start border-end text-capitalize">
                    Function Title
                  </th>
                  <th className="fw-bold text-start border-end text-capitalize">
                    Time access granted
                  </th>
                  <th className="fw-bold text-start border-end text-capitalize">
                    Access valid until
                  </th>
                  <th className="fw-bold text-start border-end text-capitalize">
                    Access reason
                  </th>
                  <th className="fw-bold text-start text-capitalize">Action</th>
                </tr>
              </thead>
              <tbody className="border-0">
                {history.map((row) => (
                  <tr>
                    <td className="text-start align-middle">{row.full_name}</td>
                    <td className="text-start align-middle">
                      {row.function_title}
                    </td>
                    <td className="text-start align-middle">
                      {row.time_access}
                    </td>
                    <td className="text-start align-middle">
                      {row.valid_until}
                    </td>
                    <td className="text-start align-middle">
                      {row.access_reason}
                    </td>
                    <td className="text-start align-middle">
                      <CustomDropdownMenu
                        menuItems={[
                          {
                            itemName: "Edit",
                            onClick: () => handleEdit(1),
                            icon: <Eye size={20} />,
                          },
                          {
                            itemName: "Delete",
                            onClick: () => handleDelete(1),
                            icon: <Mail size={20} />,
                          },
                        ]}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </TabPanel>
      <EditUserModel
        show={showEditUserModal}
        onClose={handleEditModal}
        userId={selectedUser}
      />
    </>
  );
};

export default index;
