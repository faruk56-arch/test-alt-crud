import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TachTableRow from "./TachTableRow";

const TachList = () => {
  const [Tach, setTach] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8001/taches/get")
      .then(({ data }) => {
        setTach(data);
        console.log("data",data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    return Tach.map((res, i) => {
      return <TachTableRow obj={res} key={i} />;
    });
  };

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>prenom</th>
            <th>TachToDo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default TachList;
