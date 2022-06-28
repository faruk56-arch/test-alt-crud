// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import TachForm from "./TachForm";

// EditTach Component
const EditTach = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    prenom: "",
    TachToDo: "",
  });

  //onSubmit handler
  const onSubmit = (TachObject) => {
    const response = axios.put(
      "http://localhost:8001/taches/update/" + props.match.params.id,
      TachObject
    );
    response
      .then((res) => {
        if (res.status === 200) {
          alert("Task successfully updated");
          /* Redirecting to the tach list page. */
          props.history.push("/tach-list");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert("Something went wrong"));
  };

  // axios
  //     .put(
  //       "http://localhost:8001/taches/update/" + props.match.params.id,
  //       TachObject
  //     )
  //     .then((res) => {
  //       if (res.status === 200) {
  //         alert("Task successfully updated");
  //         /* Redirecting to the tach list page. */
  //         props.history.push("/tach-list");
  //       } else Promise.reject();
  //     })
  //     .catch((err) => alert("Something went wrong"));

  // Load data from server and reinitialize EditTach form
  useEffect(() => {
    axios
      .get("http://localhost:8001/taches/update/" + props.match.params.id)
      .then((res) => {
        const { name, prenom, TachToDo } = res.data;
        setFormValues({ name, prenom, TachToDo });
      })
      .catch((err) => console.log(err));
  }, []);

  // Return Tach form
  return (
    <TachForm
      className="update-tach"
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Tach
    </TachForm>
  );
};

// Export EditTach Component
export default EditTach;
