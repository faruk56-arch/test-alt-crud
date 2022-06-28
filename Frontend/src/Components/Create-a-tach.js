// Createtach Component for add new tach

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import TachForm from "./TachForm";

// Createtach Component
const CreateTach = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    prenom: "",
    TachToDo: "",
  });
  // onSubmit handler
  const onSubmit = (tachObject) => {
    axios
      .post("http://localhost:8001/taches/add", tachObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Task successfully added");
          /* Redirecting to the tach list page. */
          props.history.push("/tach-list");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert("Something went wrong"));
  };

  // Return tach form
  return (
    <TachForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Create A Tach
    </TachForm>
  );
};

// Export CreateTach Component
export default CreateTach;
