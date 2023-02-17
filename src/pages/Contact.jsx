import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs, { send } from "emailjs-com";
import { Container, Row, Col, Button } from "react-bootstrap";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters")
    .required("Message is required"),
  reason: Yup.string().required("Reason is required"),
  state: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be less than 50 characters long")
    .required("State is required"),
  city: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("City required"),
  zipcode: Yup.string()
    .min(5, "Must have a vaild Zip Code")
    .max(12, "No more than 12 characters")
    .required("Must enter a Zip code"),
  date: Yup.date().required("Date is required"),
  budget: Yup.number().positive("Budget must be a positive number"),
  venue: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  phone: Yup.number().required("Phone number is required"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
  reason: "",
  city: "",
  state: "",
  zipcode: "",
  date: "",
  budget: "",
  venue: "",
  phone: "",
};

const sendEmail = (values, actions) => {
  const {
    name,
    email,
    message,
    reason,
    city,
    state,
    zipcode,
    date,
    budget,
    venue,
    phone,
  } = values;
  emailjs
    .send(
      "service_cfl2l94",
      "template_hlvwoss",
      {
        from_name: name,
        from_email: email,
        message,
        reason,
        from_city: city,
        from_state: state,
        from_zipcode: zipcode,
        from_date: date,
        from_budget: budget,
        from_venue: venue,
        from_phone: phone,
      },
      "4G1ZboWGj8Eab1SFK"
    )
    .then(
      (response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        alert("Your message has been sent! We will get back with you shortly.");
      },
      (error) => {
        actions.setSubmitting(false);
        alert("Failed to send message. Please try again later.");
      }
    );
  console.log(send);
};

const ContactForm = () => {
  return (
    <Container>
      <Row>
        {/* <Col md={{ span: 8, offset: 2 }}> */}
        <Col md={8} lg={6}>
          <h2 className="mt-5">Contact Us</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              sendEmail(values, actions);
            }}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className={`form-control ${
                      touched.name && errors.name ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className={`form-control ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <Field
                    type="text"
                    name="city"
                    className={`form-control ${
                      touched.name && errors.name ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <Field
                    type="text"
                    name="state"
                    className={`form-control ${
                      touched.name && errors.name ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="state"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="zipcode" className="form-label">
                    Zip Code:
                  </label>
                  <Field
                    type="number"
                    name="zipcode"
                    className={`form-control ${
                      touched.name && errors.name ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="zipcode"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="budget" className="form-label">
                    Budget:
                  </label>
                  <Field
                    type="number"
                    name="budget"
                    className={`form-control ${
                      touched.name && errors.name ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="budget"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Date of Event:
                  </label>
                  <Field
                    type="date"
                    name="date"
                    format="MM-dd-yyyy"
                    className={`form-control ${
                      touched.name && errors.name ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="venue" className="form-label">
                    Name of venue:
                  </label>
                  <Field
                    type="text"
                    name="venue"
                    className={`form-control ${
                      touched.name && errors.name ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="venue"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone:
                  </label>
                  <Field
                    type="tel"
                    name="phone"
                    className={`form-control ${
                      touched.name && errors.name ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Type of Event:</label>
                  <div role="group" aria-labelledby="reason-group">
                    <div>
                      <label>
                        <Field type="radio" name="reason" value="Wedding" />{" "}
                        Wedding
                      </label>
                    </div>
                    <div>
                      <label>
                        <Field
                          type="radio"
                          name="reason"
                          value="Office Party"
                        />{" "}
                        Office Party
                      </label>
                    </div>
                    <div>
                      <label>
                        <Field type="radio" name="reason" value="Funeral" />{" "}
                        Funeral
                      </label>
                    </div>
                    <div>
                      <label>
                        <Field type="radio" name="reason" value="Other" /> Other
                      </label>
                    </div>
                  </div>
                  <ErrorMessage
                    name="reason"
                    component="div"
                    className="invalid-feedback d-block"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Comments
                  </label>
                  <Field
                    name="message"
                    as="textarea"
                    className={`form-control ${
                      touched.message && errors.message ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="mb-5"
                >
                  Send
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
