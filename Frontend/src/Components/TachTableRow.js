import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const TachTableRow = (props) => {
  const { _id, name, prenom, TachToDo } = props.obj;

  const deleteTach = () => {
    axios
      .delete("http://localhost:8001/taches/delete/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{prenom}</td>
      <td>{TachToDo}</td>
      <td>
        <Link  className="edit-link" to={"/edit-tach/" + _id}>
          Edit
        </Link>
        <Button onClick={deleteTach} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default TachTableRow;
