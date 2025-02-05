import { Fragment } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../layouts/layoutcomponents/pageheader";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import {
  Card,
  Col,
  OverlayTrigger,
  ProgressBar,
  Row,
  Tooltip,
  Table,
  Tab,
  Nav,
  Button,
} from "react-bootstrap";
import {
  SalesAnalytics,
  RecentOrder,
  TotalUser,
  TotalProfit,
  TotalExpenses,
  TotalCost,
} from "../../commondata/chartdata";
import { Imagesdata } from "../../commondata/commonimages";
import { activitys } from "../../commondata/commondata";
import { Worldmap } from "../maps/simplemaps/simplemapdata/worldmap";
import {
  COLUMNS1,
  DATATABLE1,
  GlobalFilter,
  Data,
  Data2,
  Data3,
} from "../../commondata/dashboarddata";
function Dashboard() {
  const tableInstance = useTable(
    {
      columns: COLUMNS1,
      data: DATATABLE1,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  }: any = tableInstance;
  const { globalFilter, pageIndex, pageSize } = state;
  return (
    <Fragment>
      <PageHeader titles="Dashboard" active="Dashboard" items={["Home"]} />
      <Row>
        <Col lg={12} md={12} sm={12} xl={12}>
          <Row>
            <Col lg={6} md={6} sm={12} xl={3}>
              <Card className="overflow-hidden">
                <Card.Body>
                  <div className="d-flex">
                    <div className="mt-2">
                      <h6 className="">Total Users</h6>
                      <h2 className="mb-0 number-font">44,278</h2>
                    </div>
                    <div className="ms-auto">
                      <div className="chart-wrapper mt-1">
                        <TotalUser />
                      </div>
                    </div>
                  </div>
                  <span className="text-muted fs-12">
                    <span className="text-secondary me-2">
                      <i className="fe fe-arrow-up-circle  text-secondary"></i>
                      5%
                    </span>
                    Last month
                  </span>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6} sm={12} xl={3}>
              <div className="card overflow-hidden">
                <Card.Body>
                  <div className="d-flex">
                    <div className="mt-2">
                      <h6 className="">Total Orders</h6>
                      <h2 className="mb-0 number-font">67,987</h2>
                    </div>
                    <div className="ms-auto">
                      <div className="chart-wrapper mt-1">
                        <TotalCost />
                      </div>
                    </div>
                  </div>
                  <span className="text-muted fs-12">
                    <span className="text-pink me-2">
                      <i className="fe fe-arrow-down-circle text-pink"></i>
                      0.75%
                    </span>
                    Last 30 days
                  </span>
                </Card.Body>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xl={3}>
              <div className="card overflow-hidden">
                <Card.Body>
                  <div className="d-flex">
                    <div className="mt-2">
                      <h6 className="">Total Sales</h6>
                      <h2 className="mb-0 number-font">$76,965</h2>
                    </div>
                    <div className="ms-auto">
                      <div className="chart-wrapper mt-1">
                        <TotalExpenses />
                      </div>
                    </div>
                  </div>
                  <span className="text-muted fs-12">
                    <span className="text-green me-2">
                      <i className="fe fe-arrow-up-circle text-green"></i>
                      0.9%
                    </span>
                    Last 10 days
                  </span>
                </Card.Body>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xl={3}>
              <Card className="overflow-hidden">
                <Card.Body>
                  <div className="d-flex">
                    <div className="mt-2">
                      <h6 className="">Tickets sold</h6>
                      <h2 className="mb-0 number-font">$59,765</h2>
                    </div>
                    <div className="ms-auto">
                      <div className="chart-wrapper mt-1">
                        <TotalProfit />
                      </div>
                    </div>
                  </div>
                  <span className="text-muted fs-12">
                    <span className="text-warning me-2">
                      <i className="fe fe-arrow-up-circle text-warning"></i>
                      0.6%
                    </span>
                    Last year
                  </span>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={12} xl={8} xxl={9}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Sales Analytics</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="chartjs-wrapper-demo myChartSaah">
                <SalesAnalytics />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} sm={12} lg={12} xl={4} xxl={3}>
          <Card className="overflow-hidden">
            <Card.Body className="pb-0 bg-recentorder">
              <Card.Title as="h3" className="text-white">
                Recent Orders
              </Card.Title>
              <div className="chartjs-wrapper-demo">
                <RecentOrder />
              </div>
            </Card.Body>
            <div id="flotback-chart" className="flot-background"></div>
            <Card.Body>
              <div className="d-flex mb-4 mt-3">
                <div className="avatar avatar-md bg-secondary-transparent text-secondary bradius me-3">
                  <i className="fe fe-check"></i>
                </div>
                <div className="">
                  <h6 className="mb-1 fw-semibold">Delivered Orders</h6>
                  <p className="fw-normal fs-12">
                    <span className="text-success me-1">3.5%</span>
                    increased
                  </p>
                </div>
                <div className=" ms-auto my-auto">
                  <p className="fw-bold fs-20">1,768</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="avatar  avatar-md bg-pink-transparent text-pink bradius me-3">
                  <i className="fe fe-x"></i>
                </div>
                <div className="">
                  <h6 className="mb-1 fw-semibold">Cancelled Orders</h6>
                  <p className="fw-normal fs-12">
                    <span className="text-success me-1">1.2%</span>
                    increased
                  </p>
                </div>
                <div className=" ms-auto my-auto">
                  <p className="fw-bold fs-20 mb-0">3,675</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="col-12">
          <Card>
            <Card.Header>
              <h4 className="card-title">Orders</h4>
            </Card.Header>
            <Card.Body>
              <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="AllProducts"
              >
                <Nav variant="pills" className="product-sale">
                  <Nav.Item>
                    <Nav.Link eventKey="All" className="text-dark">
                      All
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Settled" className="text-dark">
                      Shipped
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Onhold" className="text-dark">
                      On-Hold
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Removed" className="text-dark">
                      Removed
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Refund" className="text-dark">
                      Refund
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="AllProducts">
                    <Card.Body className="pt-0 example1-table">
                      <div className="table-responsive">
                        <>
                          <div className="d-flex">
                            <select
                              className=" mb-4 selectpage border me-1"
                              value={pageSize}
                              onChange={(e) =>
                                setPageSize(Number(e.target.value))
                              }
                            >
                              {" "}
                              {[10, 25, 50].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                  Show {pageSize}{" "}
                                </option>
                              ))}{" "}
                            </select>
                            <GlobalFilter
                              filter={globalFilter}
                              setFilter={setGlobalFilter}
                            />
                          </div>
                          <table
                            {...getTableProps()}
                            className="table table-bordered text-nowrap mb-0"
                          >
                            <thead>
                              {" "}
                              {headerGroups.map((headerGroup: any) => (
                                <tr
                                  {...headerGroup.getHeaderGroupProps()}
                                  key={Math.random()}
                                >
                                  {" "}
                                  {headerGroup.headers.map((column: any) => (
                                    <th
                                      {...column.getHeaderProps(
                                        column.getSortByToggleProps()
                                      )}
                                      className={column.className}
                                      key={Math.random()}
                                    >
                                      <span className="tabletitle">
                                        {" "}
                                        {column.render("Header")}
                                      </span>
                                      <span>
                                        {" "}
                                        {column.isSorted ? (
                                          column.isSortedDesc ? (
                                            <i className="fa fa-angle-down"></i>
                                          ) : (
                                            <i className="fa fa-angle-up"></i>
                                          )
                                        ) : (
                                          ""
                                        )}{" "}
                                      </span>
                                    </th>
                                  ))}{" "}
                                </tr>
                              ))}{" "}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                              {" "}
                              {page.map((row: any) => {
                                prepareRow(row);
                                return (
                                  <tr
                                    className="text-center"
                                    {...row.getRowProps()}
                                    key={Math.random()}
                                  >
                                    {" "}
                                    {row.cells.map((cell: any) => {
                                      return (
                                        <td
                                          {...cell.getCellProps()}
                                          key={Math.random()}
                                        >
                                          {" "}
                                          {cell.render("Cell")}
                                        </td>
                                      );
                                    })}{" "}
                                  </tr>
                                );
                              })}{" "}
                            </tbody>
                          </table>
                          <div className="d-block d-sm-flex mt-4 align-items-center">
                            <span className="">
                              Page{" "}
                              <strong>
                                {" "}
                                {pageIndex + 1}
                                of {pageOptions.length}{" "}
                              </strong>{" "}
                            </span>
                            <span className="ms-sm-auto ">
                              <Button
                                variant=""
                                className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
                                onClick={() => gotoPage(0)}
                                disabled={!canPreviousPage}
                              >
                                {" "}
                                {" Previous "}{" "}
                              </Button>
                              <Button
                                variant=""
                                className="btn-default tablebutton me-2 my-1"
                                onClick={() => {
                                  previousPage();
                                }}
                                disabled={!canPreviousPage}
                              >
                                {" "}
                                {" << "}{" "}
                              </Button>
                              <Button
                                variant=""
                                className="btn-default tablebutton me-2 my-1"
                                onClick={() => {
                                  previousPage();
                                }}
                                disabled={!canPreviousPage}
                              >
                                {" "}
                                {" < "}{" "}
                              </Button>
                              <Button
                                variant=""
                                className="btn-default tablebutton me-2 my-1"
                                onClick={() => {
                                  nextPage();
                                }}
                                disabled={!canNextPage}
                              >
                                {" "}
                                {" > "}{" "}
                              </Button>
                              <Button
                                variant=""
                                className="btn-default tablebutton me-2 my-1"
                                onClick={() => {
                                  nextPage();
                                }}
                                disabled={!canNextPage}
                              >
                                {" "}
                                {" >> "}{" "}
                              </Button>
                              <Button
                                variant=""
                                className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
                                onClick={() => gotoPage(pageCount - 1)}
                                disabled={!canNextPage}
                              >
                                {" "}
                                {" Next "}{" "}
                              </Button>
                            </span>
                          </div>
                        </>
                      </div>
                    </Card.Body>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Shipped">
                    <Data />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Pending">
                    <Data2 />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Cancelled">
                    <Data3 />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
export default Dashboard;
