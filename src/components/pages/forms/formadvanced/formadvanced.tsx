import { FC, useState } from 'react';
import PageHeader from '../../../../layouts/layoutcomponents/pageheader';
import { Col, Form, Row, Card, Button, InputGroup } from 'react-bootstrap';
import { FilePond } from 'react-filepond';
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import 'filepond/dist/filepond.min.css';
import Select from 'react-select';
import makeAnimated from "react-select/animated";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { MultiSelect } from "react-multi-select-component";
import Creatable from "react-select/creatable";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {option1, options, options1,option3, option4, Groupeddata, option5, Groupeddata1, option6,groupeddata} from '../../../../commondata/selectdata';
import { BasicStyle, DualList, PalettesStyle, SelectBox, SelectBoxwithLabel, SketchExample, option8} from '../../../../commondata/commondata';
import DatePicker from "react-datepicker";

interface FormAdvancedProps { }

const FormAdvanced: FC<FormAdvancedProps> = () => {
  //file upload
	const [files] = useState([]);
  	//file uploader
	const uploader = Uploader({
		apiKey: "free"
	});
  //userslist 
  const animatedComponents = makeAnimated();
  	//Time picker with default value
	const [value1, setValue1] = useState<Dayjs | null>(
		dayjs('2018-01-01T00:00:00.000Z'),
	);
  	//Data month and year range picker
	const [dates, setDates] = useState<any>();
  //Default date picker
  const [value] = useState<Date | null>(null);
  //multi select styles
  const [selected, setSelected] = useState([]);
// single group multiselect
const [selected1, setSelected1]:any = useState([]);
// Multiple Items With Group-Option
const [selected2, setSelected2]:any = useState([]);
//multi select
const [selected3, setSelected3] = useState([]);
//multiselect with icon 
const [selected4, setSelected4]:any = useState([]);
  // Multiple coustom Style
  const styles = {
    option: (provided:any, state:any) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "black",
      backgroundColor: state.data.color,
      fontSize: state.selectProps.myFontSize
    }),
    singleValue: (provided:any, state:any) => ({
      ...provided,
      color: state.data.color,
      fontSize: state.selectProps.myFontSize
    })
  }
//multiple months
const [startDate, setStartDate] = useState<any>(new Date());
//Month picker
const renderMonthContent = (_month : any, shortMonth : any, longMonth : any) => {
  const tooltipText = `Tooltip for month: ${longMonth}`;
  return <span title={tooltipText}>{shortMonth}</span>;
};
//year picker
const [endDate, setEndDate] = useState(new Date("2024/04/08"));
  return(

  <div className=''>
    <PageHeader titles="Form Advanced" active="Form Advanced" items={['Forms']} />
    <Row>
      <Col xl={12} md={12}>
        <Form method="post" className="card">
          <Card.Header>
            <Card.Title as='h3'>File Upload</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row className="mb-5">
              <Col lg={4} sm={12} className="mb-4 mb-lg-0">
              <FilePond
											files={files}
											allowMultiple={true}
											maxFiles={3}
											server="/api"
											name="files"
											labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
										/>
              </Col>
              <Col lg={4} sm={12} className="mb-4 mb-lg-0 Upload-button">
              <UploadButton uploader={uploader}
											onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
											{({ onClick }) =>
												<span onClick={onClick}>
													Drag & Drop your files or <span className="">Browse</span>
												</span>
											}
										</UploadButton>
              </Col>
              <Col lg={4} sm={12}>
              <FilePond disabled files={files} allowMultiple={true} maxFiles={3} server="/api" name="files" labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'/>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label className="form-label mt-0">Single File input Upload</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Multiple files input Upload</Form.Label>
              <Form.Control type="file" id="formFileMultiple" multiple />
            </Form.Group>
            <Form.Group className="mb-0 mt-3">
            <FilePond files={files} allowMultiple={true} maxFiles={3} server="/api" name="files" />
            </Form.Group>
          </Card.Body>
        </Form>
      </Col>
      <Col xl={12} md={12}>
        <Form method="post" className="card">
          <Card.Header>
            <Card.Title as='h3'>Select2 elements</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form.Group>
              <Form.Label>Basic</Form.Label>
              <Select options={options} placeholder='choose one' classNamePrefix='Select'/>
            </Form.Group>
            <Form.Group>
              <Form.Label> Select2 with search box</Form.Label>
              <Select
        className="basic-single"
        classNamePrefix="Select"
        defaultValue={options1[0]}
        name="color"
        options={options1}
      />
            </Form.Group>
            <Form.Group>
              <Form.Label>Users list</Form.Label>
          <Select
        className="basic-single"
        closeMenuOnSelect={false}
          components={animatedComponents}
        classNamePrefix="Select"
        defaultValue={option1[3]}
        name="color"
        options={option1}
      />
            </Form.Group>
          </Card.Body>
        </Form>
      </Col>
          <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Time Picker</Card.Title>
          </Card.Header>
          <Card.Body>

            <div className="wd-150 mg-b-30">
										<label>Default Time Picker:</label>
										<div className="wd-150 mg-b-30">
											<LocalizationProvider dateAdapter={AdapterDayjs}>
												<DemoContainer components={['TimePicker']}>
													<TimePicker label="Basic time picker" />
												</DemoContainer>
											</LocalizationProvider>
										</div>
										<label className="mt-4">Set the scroll position to local time if no defaultValue
											selected:</label>
										<div className="wd-150 mg-b-30">
											<div className="input-group">
												<LocalizationProvider dateAdapter={AdapterDayjs}>
													<TimePicker value={value1} onChange={setValue1} />
												</LocalizationProvider>
											</div>
										</div>
										<label className="mt-4 ">Dynamically set the time using a Javascript Date
											object:</label>
										<div className="d-flex">
											<div className="input-group wd-150">
												<LocalizationProvider dateAdapter={AdapterDayjs}>
													<TimePicker ampm={false} openTo="hours" views={['hours', 'minutes', 'seconds']} format="HH:mm:ss" label="With seconds" value={value1} onChange={(newValue) => { setValue1(newValue); }} />

												</LocalizationProvider>
												<button className="btn btn btn-primary br-ts-0 br-bs-0"
													id="setTimeButton">Set Current Time</button>

											</div>
										</div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <Card.Header>
            <Card.Title as='h3'>Color Picker</Card.Title>
          </Card.Header>
          <Card.Body>
            <BasicStyle />
            <SketchExample />
            <PalettesStyle />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>Date, Month, Year Range Picker</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
									<Col md={4} mt={4} className="col-md-4 mt-4 mt-md-0">
										<InputGroup>
											<InputGroup.Text>
												<span className="fe fe-clock"></span>
											</InputGroup.Text>
											<DatePicker className="form-control br-ts-0 br-bs-0" placeholder="Date Range" value={dates} onChange={setDates} multiple numberOfMonths={1} />
										</InputGroup>
									</Col>
									<Col md={4} mt={4} className="col-md-4 mt-4 mt-md-0">
										<InputGroup>
											<InputGroup.Text>
												<span className="fe fe-clock"></span>
											</InputGroup.Text>
                      <DatePicker className="form-control br-ts-0 br-bs-0"
      selected={new Date()}
      renderMonthContent={renderMonthContent}
      showMonthYearPicker
      dateFormat="MM/yyyy"
    />
										</InputGroup>
									</Col>
									<Col md={4} mt={4} className="col-md-4 mt-4 mt-md-0">
										<InputGroup>
											<InputGroup.Text>
												<span className="fe fe-clock"></span>
											</InputGroup.Text>
                      <DatePicker className="form-control br-ts-0 br-bs-0"
        selected={endDate}
        onChange={(date : any) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        dateFormat="yyyy"
        showYearPicker
      />
										</InputGroup>
									</Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <Card.Title>Default Date picker</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="wd-200 mg-b-30">
              <InputGroup>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
   <DatePicker className="form-control"
        placeholder="DD/MM/YY"
        value={value}
      />
    </LocalizationProvider>
              </InputGroup>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
      <Card>
									<Card.Header>
										<Card.Title>Multiple Months </Card.Title>
									</Card.Header>
									<Card.Body>
                     <DatePicker className="form-control"
      selected={startDate}
      onChange={(date: any) => setStartDate(date)}
      monthsShown={2}
    />
									</Card.Body>
								</Card>
      </Col>
      <Col md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Multiple Select Styles</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={6}>
                <Form.Group>
                  <Form.Label>Basic MutipleSelect</Form.Label>
                  <MultiSelect value={selected} onChange={setSelected} labelledBy="Select"  options={option3}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Disabled MutipleSelect</Form.Label>
                  <MultiSelect
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      disableSearch={true}
      options={option4}
      disabled={true}
    />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Single Group Disabled MutipleSelect</Form.Label>
                  <Creatable
        classNamePrefix="Select"
        options={groupeddata}
        value={selected1}
        onChange={setSelected1}
      />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Multiple Items With Group-Option</Form.Label>
                  <Creatable
        isMulti
        classNamePrefix="Select"
        options={Groupeddata}
        value={selected2}
        onChange={setSelected2}
      />
                </Form.Group>

              </Col>
              <Col lg={6}>
                <Form.Group>
                  <Form.Label>MutipleSelect</Form.Label>
                  <MultiSelect
      value={selected3} className="multi-select"
      onChange={setSelected3}
      labelledBy="Select"
      disableSearch={true}
      options={option5}
    />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Group-Option MutipleSelect</Form.Label>
                  <Creatable
        isMulti
        classNamePrefix="Select"
        options={Groupeddata1}
        value={selected4}
        onChange={setSelected4}
      />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Custom style1</Form.Label>
                  <Select classNamePrefix='Select' options={option6}  />
                </Form.Group>
                <Form.Group className="mb-0">
                  <Form.Label>Custom style2</Form.Label>
                  <Select classNamePrefix="Select" isMulti onChange={(e) => console.log(e)} options={option8} styles={styles} />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Dual List Box</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={12}>
                <Card className="shadow-none border">
                  <Card.Body>
                 <div className="transfer"></div>
                    <DualList/>
         </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Select Box</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={6} md={12}>
                <Form.Group className="mb-5 mb-lg-0">
                  <SelectBox />
                </Form.Group>
              </Col>
              <Col lg={6} md={12}>
                <Form.Group>
                  <SelectBoxwithLabel />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header> 
            <Card.Title>Country selector</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form className='CountrySelector'>
              <PhoneInput
        country={"us"}
        value="1425652"
        onChange={phone => console.log({ phone })}
      />
       <Button className="btn btn-primary py-1 px-4 mb-1">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>

)
          };

export default FormAdvanced;
