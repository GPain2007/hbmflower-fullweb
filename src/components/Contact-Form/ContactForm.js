import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs, { send } from "emailjs-com";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

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

const ContactForm = (props) => {
  return (
    <Modal {...props} size="lg" className="contact_page_form">
      <Modal.Header class="text-center">
        <Modal.Title class="text-center">
          <h1 className="mt-5 text-center" style={{ marginLeft: "147px" }}>
            <strong>Wedding and Floral Inquiry</strong>
          </h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Please fill out the following inquiry form, providing as many details
          as you can. If you need to get into contact with us directly for other
          matters, please email us at{" "}
          <a href="mailto:hbmflowercity@gmail.com">hbmflowercity@gmail.com</a>.
          Once your inquiry is received, please allow 5-7 business days for us
          to get in touch. Thank you so much for your consideration.
        </p>

        <Container>
          <Row>
            <Col md={{ span: 8, offset: 3 }} lg={6}>
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
                        style={{ backgroundColor: "white" }}
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
                      <label className="form-label">Florals for:</label>
                      <div role="group" aria-labelledby="reason-group">
                        <div>
                          <label>
                            <Field
                              type="radio"
                              name="reason"
                              value="Wedding"
                              //   onChange={handleReasonChange}
                            />{" "}
                            Wedding
                          </label>
                          {/* Inner radio selector for Wedding option */}
                          {/* {selectedReason === "Wedding" && ( */}

                          <Field name="reason">
                            {({ field }) => (
                              //   field.value === "Wedding" && (
                              <div
                                style={{
                                  marginLeft: "25px",
                                  display:
                                    field.value === "Wedding"
                                      ? "block"
                                      : "none",
                                }}
                              >
                                <label>
                                  <Field
                                    type="radio"
                                    name="weddingType"
                                    value="FullService"
                                  />{" "}
                                  Full Service
                                </label>
                                <label>
                                  <Field
                                    type="radio"
                                    name="weddingType"
                                    value="ALaCart"
                                  />{" "}
                                  A La Cart (just purchasing a bouquet, altar
                                  arrangements, etc)
                                </label>
                              </div>
                            )}
                          </Field>
                        </div>
                        <div>
                          <label>
                            <Field type="radio" name="reason" value="Event" />{" "}
                            Event
                          </label>
                        </div>
                        <div>
                          <label>
                            <Field
                              type="radio"
                              name="reason"
                              value="Floral Arrangment"
                            />{" "}
                            Floral Arrangment
                          </label>
                        </div>

                        <div>
                          <label>
                            <Field type="radio" name="reason" value="Other" />{" "}
                            Other
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
                        What details would you like to share about about your
                        event?
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactForm;
