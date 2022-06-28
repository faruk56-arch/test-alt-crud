import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const TachForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Rquired"),
    prenom: Yup.string()
      .required("Rquired"),
      TachToDo: Yup.string()
      .required("Rquired"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <p>Name:</p>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <p>prenom:</p>
            <Field name="prenom" type="text" className="form-control" />
            <ErrorMessage
              name="prenom"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <p>TachToDo:</p>
            <Field name="TachToDo" type="text" className="form-control" />
            <ErrorMessage
              name="TachToDo"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button className="update-btn" size="lg" block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default TachForm;
