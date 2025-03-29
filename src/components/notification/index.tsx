import { FC } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Badge } from "react-bootstrap";
// import PageHeader from "../../layouts/layoutcomponents/pageheader";
import { Imagesdata } from "../../commondata/commonimages";
import { svg } from "leaflet";

interface NotificationListProps {}

const NotificationList: FC<NotificationListProps> = () => (
  <div className="">
    {/* <PageHeader
      titles="Notifications List"
      active="Notifications List"
      items={["Pages"]}
    /> */}
    <Container>
      <ul className="notification">
        <li>
          <div className="notification-time">
            <span className="date">Today</span>
            <span className="time">02:31</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-time-date mb-2 d-block d-md-none">
            <span className="date">Today</span>
            <span className="time mx-2">02:31</span>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md online">
                <img alt="avatar" className="br-7" src={Imagesdata("users1")} />
              </div>
              <div className="media-body ms-3 d-flex">
                <div className="">
                  <p className="fs-15 text-dark fw-bold mb-0">Dennis Trexy</p>
                  <p className="mb-0 fs-13 text-dark">
                    2 Members Accepted your Request.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted fs-11">2 Hrs ago</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">Yesterday</span>
            <span className="time">18:47</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-time-date mb-2 d-block d-md-none">
            <span className="date">Yesterday</span>
            <span className="time mx-2">18:47</span>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md offline">
                <span className="avatar avatar-md bradius bg-pink me-3">
                  ED
                </span>
              </div>
              <div className="media-body ms-3 d-flex">
                <div className="">
                  <p className="fs-15 text-dark fw-bold mb-0">Eileen Dover</p>
                  <p className="mb-0 fs-13 text-dark">
                    Created New Template for Designing Department.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted fs-11">18:47</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">Yesterday</span>
            <span className="time">06:43</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-time-date mb-2 d-block d-md-none">
            <span className="date">Yesterday</span>
            <span className="time mx-2">06:43</span>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md online">
                <img alt="avatar" className="br-7" src={Imagesdata("users2")} />
              </div>
              <div className="media-body ms-3 d-flex">
                <div className="">
                  <p className="fs-15 text-dark fw-bold mb-0">
                    Elida Distefa
                    <Badge bg="success" className="ms-3 px-2 pb-1 mb-1">
                      New Deal
                    </Badge>
                  </p>
                  <p className="mb-0 fs-13 text-dark">
                    Shipment is Out for Delivery.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted fs-11">06:43</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">23 Oct</span>
            <span className="time">03:15</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-time-date mb-2 d-block d-md-none">
            <span className="date">23 Oct</span>
            <span className="time mx-2">03:15</span>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md online">
                <img
                  alt="avatar"
                  className="br-7"
                  src={Imagesdata("users12")}
                />
              </div>
              <div className="media-body ms-3 d-flex">
                <div className="">
                  <p className="fs-15 text-dark fw-bold mb-0">Harvey Mattos</p>
                  <p className="mb-0 fs-13 text-dark">
                    Mentioned you in a post.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted fs-11">03:15</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">15 Oct</span>
            <span className="time">12:14</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-time-date mb-2 d-block d-md-none">
            <span className="date">15 Oct</span>
            <span className="time mx-2">12:14</span>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md offline">
                <span className="avatar avatar-md bradius me-3 bg-primary">
                  IH
                </span>
              </div>
              <div className="media-body ms-3 d-flex">
                <div className="">
                  <p className="fs-15 text-dark fw-bold mb-0">
                    Catrice Doshier
                  </p>
                  <p className="mb-0 fs-13 text-dark">
                    2 Members Accepted your Request.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted fs-11">12:14</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">30 Sep</span>
            <span className="time">14:04</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-time-date mb-2 d-block d-md-none">
            <span className="date">30 Sep</span>
            <span className="time mx-2">14:04</span>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md offline">
                <img
                  alt="avatar"
                  className="br-7"
                  src={Imagesdata("users13")}
                />
              </div>
              <div className="media-body ms-3 d-flex">
                <div className="">
                  <p className="fs-15 text-dark fw-bold mb-0">
                    Mercy Ritia
                    <Badge bg="danger" className="ms-3 px-2 pb-1 mb-1">
                      Last Deal
                    </Badge>
                  </p>
                  <p className="mb-0 fs-13 text-dark">
                    Created New Template for Designing Department.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted fs-11">14:04</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">18 Sep</span>
            <span className="time">12:26</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-time-date mb-2 d-block d-md-none">
            <span className="date">18 Sep</span>
            <span className="time mx-2">12:26</span>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md online">
                <img alt="avatar" className="br-7" src={Imagesdata("users4")} />
              </div>
              <div className="media-body ms-3 d-flex">
                <div className="">
                  <p className="fs-15 text-dark fw-bold mb-0">Mark Jhon</p>
                  <p className="mb-0 fs-13 text-dark">
                    Shipment is Out for Delivery.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted fs-11">12:26</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">03 Sep</span>
            <span className="time">05:37</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-time-date mb-2 d-block d-md-none">
            <span className="date">03 Sep</span>
            <span className="time mx-2">05:37</span>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md offline">
                <img
                  alt="avatar"
                  className="br-7"
                  src={Imagesdata("users14")}
                />
              </div>
              <div className="media-body ms-3 d-flex">
                <div className="">
                  <p className="fs-15 text-dark fw-bold mb-0">
                    Benedict Vallone
                  </p>
                  <p className="mb-0 fs-13 text-dark">
                    Thanking you for Accepting Request.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted fs-11">05:37</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="notification-time">
            <span className="date">28 Aug</span>
            <span className="time">15:24</span>
          </div>
          <div className="notification-icon">
            <Link to="#"></Link>
          </div>
          <div className="notification-time-date mb-2 d-block d-md-none">
            <span className="date">28 Aug</span>
            <span className="time mx-2">15:24</span>
          </div>
          <div className="notification-body">
            <div className="media mt-0">
              <div className="main-avatar avatar-md online">
                <span className="avatar avatar-md bradius me-3 bg-secondary">
                  IH
                </span>
              </div>
              <div className="media-body ms-3 d-flex">
                <div className="">
                  <p className="fs-15 text-dark fw-bold mb-0">Paul Johny</p>
                  <p className="mb-0 fs-13 text-dark">
                    Invited you to a Group.
                  </p>
                </div>
                <div className="notify-time">
                  <p className="mb-0 text-muted fs-11">15:24</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="text-center mb-4">
        <Button variant="primary" className="ripple w-md">
          Load more
        </Button>
      </div>
    </Container>
  </div>
);

interface IProps {}
const index: FC<IProps> = () => {
  return (
    <>
      <div className="row mb-4">
        <div className="col-12 mb-3 mt-3">
          <span className="fw-600 fs-2">Notification</span>
        </div>
      </div>
      <div className="m-auto w-75">
        <div className="row gap-4">
          <div className="col-12">
            <div className="card mb-3 notify-border-start-warning">
              <div className="d-flex p-3">
                <div className="d-sm-flex">
                  <div className="">
                    <svg
                      className="me-4  bg-warning-transparent  alt-notify"
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#ffce6d"
                        d="M18,13.18463V10c0-3.31372-2.68628-6-6-6s-6,2.68628-6,6v3.18463C4.83832,13.59863,4.00146,14.69641,4,16v2c0,0.00037,0,0.00073,0,0.00116C4.00031,18.5531,4.44806,19.00031,5,19h14c0.00037,0,0.00073,0,0.00116,0C19.5531,18.99969,20.00031,18.55194,20,18v-2C19.99854,14.69641,19.16168,13.59863,18,13.18463z"
                      ></path>
                      <path
                        fill="#ffae0c"
                        d="M8.14233 19c.4472 1.72119 1.99689 2.99817 3.85767 3 1.86078-.00183 3.41046-1.27881 3.85767-3H8.14233zM12 4c.34149 0 .67413.03516 1 .08997V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v1.08997C11.32587 4.03516 11.65851 4 12 4z"
                      ></path>
                    </svg>
                  </div>
                  <div className="mt-0 text-start">
                    <span className="fs-14 fw-semibold">
                      New Notification
                      <span className="badge bg-success  badge-notify ms-2">
                        Update
                      </span>
                    </span>
                    <p className="fs-13 text-muted mb-0">
                      Warning! Better check yourself, you're not looking too
                      goodWarning! Better check yourself,
                      <a
                        href="javascript:void(0);"
                        className="ms-3 text-primary d-inline-flex"
                      >
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
                <a href="javascript:void(0);" className="ms-auto">
                  <i className="fe fe-x text-muted border rounded-2 p-1 fs-12"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card mb-3 notify-border-start-success">
              <div className="d-flex p-3 ">
                <div className="d-sm-flex">
                  <div className="">
                    <svg
                      className="me-4  bg-success-transparent  alt-notify"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#75cfa5"
                        d="m20.34 9.32-13.99-7a3 3 0 0 0-4.08 3.9L4.41 11l.26.59a1.06 1.06 0 0 1 0 .82l-.26.59-2.14 4.78a2.954 2.954 0 0 0 .67 3.38A2.966 2.966 0 0 0 5 22a3.141 3.141 0 0 0 1.35-.32l13.99-7a2.993 2.993 0 0 0 0-5.36Z"
                      ></path>
                      <path
                        fill="#198754"
                        d="M14.46 12a.997.997 0 0 1-1 1H4.41l.26-.59a1.06 1.06 0 0 0 0-.82L4.41 11h9.05a.997.997 0 0 1 1 1Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="mt-0 text-start">
                    <span className="fs-14 fw-semibold">New Notification</span>
                    <p className="fs-13 text-muted mb-0">
                      Warning! Better check yourself, you're not looking too
                      goodWarning! Better check yourself,
                      <a
                        href="javascript:void(0);"
                        className="ms-3 text-primary d-inline-flex"
                      >
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
                <a href="javascript:void(0);" className="ms-auto">
                  <i className="fe fe-x text-muted border rounded-2 p-1 fs-12"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card mb-3 notify-border-start-danger">
              <div className="d-flex p-3 ">
                <div className="d-sm-flex">
                  <div className="">
                    <svg
                      className="me-4  bg-danger-transparent  alt-notify"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#ff9ea7"
                        d="M20.057 22H3.943a3.023 3.023 0 0 1-2.618-4.534L9.382 3.511a3.023 3.023 0 0 1 5.236 0l8.057 13.955A3.023 3.023 0 0 1 20.057 22Z"
                      ></path>
                      <circle cx="12" cy="17" r="1" fill="#dc3545"></circle>
                      <path
                        fill="#dc3545"
                        d="M12 14a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="mt-0 text-start">
                    <span className="fs-14 fw-semibold">New Notification</span>
                    <p className="fs-13 text-muted mb-0">
                      Warning! Better check yourself, you're not looking too
                      goodWarning! Better check yourself,
                      <a
                        href="javascript:void(0);"
                        className="ms-3 text-primary d-inline-flex"
                      >
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
                <a href="javascript:void(0);" className="ms-auto">
                  <i className="fe fe-x text-muted border rounded-2 p-1 fs-12"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card mb-3 notify-border-start-info">
              <div className="d-flex p-3 ">
                <div className="d-sm-flex">
                  <div className="">
                    <svg
                      className="me-4  bg-info-transparent  alt-notify"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#9ddbff"
                        d="M9.243 18H5a1 1 0 0 1-1-1v-4.243a1 1 0 0 1 .293-.707l9.76-9.757a1 1 0 0 1 1.414 0l4.24 4.24a1 1 0 0 1 0 1.414l-9.757 9.76a1 1 0 0 1-.707.293Z"
                      ></path>
                      <path
                        fill="#49b6f5"
                        d="M15.467 2.293a1 1 0 0 0-1.414 0l-3.54 3.539 5.654 5.654.006-.004 3.534-3.535a1 1 0 0 0 0-1.414zM21 22H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"
                      ></path>
                    </svg>
                  </div>
                  <div className="mt-0 text-start">
                    <span className="fs-14 fw-semibold">
                      New Notification
                      <span className="badge bg-info  badge-notify ms-2">
                        Update
                      </span>
                    </span>
                    <p className="fs-13 text-muted mb-0">
                      Warning! Better check yourself, you're not looking too
                      goodWarning! Better check yourself,
                      <a
                        href="javascript:void(0);"
                        className="ms-3 text-primary d-inline-flex"
                      >
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
                <a href="javascript:void(0);" className="ms-auto">
                  <i className="fe fe-x text-muted border rounded-2 p-1 fs-12"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
// export default NotificationList;
