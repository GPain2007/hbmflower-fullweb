import React from "react";
import { Container, Button, Col, Form, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

function Contact({ show }) {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),

    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    textarea: yup.string().required(),
  });
  const date = new Date();

  return (
    <>
      {!show && (
        <>
          <div className="desktopView">
            <Container style={{ marginBottom: "30px" }}>
              <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                  firstName: "",
                  lastName: "",
                  city: "",
                  state: "",
                  zip: "",
                  textarea: "",
                }}
              >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
                }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik01"
                      >
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          isValid={touched.firstName && !errors.firstName}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik02"
                      >
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          isValid={touched.lastName && !errors.lastName}
                        />

                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik03"
                      >
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="City"
                          name="city"
                          value={values.city}
                          onChange={handleChange}
                          isInvalid={!!errors.city}
                        />

                        <Form.Control.Feedback type="invalid">
                          {errors.city}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik04"
                      >
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="State"
                          name="state"
                          value={values.state}
                          onChange={handleChange}
                          isInvalid={!!errors.state}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.state}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationFormik05"
                      >
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Zip"
                          name="zip"
                          value={values.zip}
                          onChange={handleChange}
                          isInvalid={!!errors.zip}
                        />

                        <Form.Control.Feedback type="invalid">
                          {errors.zip}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <div className="mb-3" key={"trail"}>
                        <Form.Check
                          type="radio"
                          name="group1"
                          id={`trail-2`}
                          label="Wedding"
                        />

                        <Form.Check
                          type="radio"
                          name="group1"
                          id={`trail-1`}
                          label="Event"
                        />

                        <Form.Check
                          type="radio"
                          name="group1"
                          id={`trail-1`}
                          label="Home"
                        />

                        <Form.Check
                          type="radio"
                          name="group1"
                          id={`trail-1`}
                          label="Special Occasion"
                        />
                      </div>
                      <div>
                        <label>
                          Choose your preferred event date:
                          <span> </span>
                          <input
                            type="date"
                            name="event"
                            min={date}
                            max="2099-12-31"
                            required
                          />
                        </label>
                      </div>
                      <div>
                        <label htmlFor="balloons">Price Range:</label>
                        <input
                          id="price-Range"
                          type="number"
                          name="price"
                          min="1000"
                          max="10000"
                          required
                        />
                        <span className="validity"></span>
                      </div>
                    </Row>
                    <Row>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Comments</Form.Label>
                        <Form.Control as="textarea" rows={3} className="mb-3" />
                      </Form.Group>
                    </Row>

                    <Button type="submit">Submit form</Button>
                  </Form>
                )}
              </Formik>
            </Container>
          </div>
          <div className="mobileView">
            <Container style={{ marginBottom: "30px" }}>
              <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                  firstName: "",
                  lastName: "",
                  city: "",
                  state: "",
                  zip: "",
                  textarea: "",
                }}
              >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
                }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik01"
                      >
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          isValid={touched.firstName && !errors.firstName}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik02"
                      >
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          isValid={touched.lastName && !errors.lastName}
                        />

                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik03"
                      >
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="City"
                          name="city"
                          value={values.city}
                          onChange={handleChange}
                          isInvalid={!!errors.city}
                        />

                        <Form.Control.Feedback type="invalid">
                          {errors.city}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik04"
                      >
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="State"
                          name="state"
                          value={values.state}
                          onChange={handleChange}
                          isInvalid={!!errors.state}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.state}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationFormik05"
                      >
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Zip"
                          name="zip"
                          value={values.zip}
                          onChange={handleChange}
                          isInvalid={!!errors.zip}
                        />

                        <Form.Control.Feedback type="invalid">
                          {errors.zip}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <div className="mb-3" key={"trail"}>
                        <Form.Check
                          type="radio"
                          name="group1"
                          id={`trail-2`}
                          label="Wedding"
                        />

                        <Form.Check
                          type="radio"
                          name="group1"
                          id={`trail-1`}
                          label="Event"
                        />

                        <Form.Check
                          type="radio"
                          name="group1"
                          id={`trail-1`}
                          label="Home"
                        />

                        <Form.Check
                          type="radio"
                          name="group1"
                          id={`trail-1`}
                          label="Special Occasion"
                        />
                      </div>
                      <div>
                        <label>
                          Choose your preferred event date:
                          <span> </span>
                          <input
                            type="date"
                            name="event"
                            min={date}
                            max="2099-12-31"
                            required
                          />
                        </label>
                      </div>
                      <div>
                        <label htmlFor="balloons">Price Range:</label>
                        <input
                          id="price-Range"
                          type="number"
                          name="price"
                          min="1000"
                          max="10000"
                          required
                        />
                        <span className="validity"></span>
                      </div>
                    </Row>
                    <Row>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Comments</Form.Label>
                        <Form.Control as="textarea" rows={3} className="mb-3" />
                      </Form.Group>
                    </Row>

                    <Button type="submit">Submit form</Button>
                  </Form>
                )}
              </Formik>
            </Container>
          </div>
        </>
      )}
    </>
  );
}

export default Contact;
