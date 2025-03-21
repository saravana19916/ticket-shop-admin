import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

interface FormData {
  listingName: string;
  listingType: string;
  listingDate: string;
  venue: string;
  country: string;
  city: string;
  listingCategory: string;
  tileImage: File | null;
}

const AddListing = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [imageName, setImageName] = useState("");

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageName(file.name);
    }
  };

  return (
    <Container>
      <h2 className="mt-4">Add Record</h2>
      <Form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <Form.Group controlId="listingName" className="mb-3">
          <Form.Label>Listing Name</Form.Label>
          <Form.Control type="text" placeholder="Type the listing name" {...register("listingName", { required: true })} />
          {errors.listingName && <span className="text-danger">This field is required</span>}
        </Form.Group>

        <Form.Group controlId="listingType" className="mb-3">
          <Form.Label>Listing Type</Form.Label>
          <Form.Select {...register("listingType", { required: true })}>
            <option value="Event">Event</option>
            <option value="Concert">Concert</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="listingDate" className="mb-3">
          <Form.Label>Listing Date</Form.Label>
          <Form.Control type="date" {...register("listingDate", { required: true })} />
        </Form.Group>

        <Form.Group controlId="venue" className="mb-3">
          <Form.Label>Venue</Form.Label>
          <Form.Control type="text" placeholder="Type the venue" {...register("venue", { required: true })} />
        </Form.Group>

        <Form.Group controlId="country" className="mb-3">
          <Form.Label>Country</Form.Label>
          <Form.Select {...register("country", { required: true })}>
            <option value="UAE">United Arab Emirates</option>
            <option value="USA">United States</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="city" className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Select {...register("city", { required: true })}>
            <option value="Dubai">Dubai</option>
            <option value="Abu Dhabi">Abu Dhabi</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="listingCategory" className="mb-3">
          <Form.Label>Listing Category</Form.Label>
          <Form.Select {...register("listingCategory", { required: true })}>
            <option value="Theatre">Theatre & Performing Arts</option>
            <option value="Music">Music</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="tileImage" className="mb-3">
          <Form.Label>Tile Image</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
          {imageName && <p className="mt-2 text-success">{imageName} ✅</p>}
        </Form.Group>

        <Row className="mt-4">
          <Col>
            <Button variant="primary" type="button" className="me-4">
              Save Draft
            </Button>
            <Button variant="primary" type="button" className="me-4">
              Preview
            </Button>
            <Button variant="primary" type="submit" className="me-4">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddListing;
