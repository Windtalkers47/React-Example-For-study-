import React from "react";
import { Link } from "react-router-dom";

export default function JobTable(props) {

  return (
    <div>
        <h1>Job Details</h1>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">RegisterDate</th>
            <th scope="col">Customer</th>
            <th scope="col">Industry</th>
            <th scope="col">Team</th>
            <th scope="col">Sales</th>
            <th scope="col">Requirement</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            props.user.map((item, index) => (
              <tr>
              <th scope="row">{ index + 1 }</th>
              <td>{item.name}</td>
              <td>{item.name}</td>
              <td>{item.name}</td>
              <td>{item.name}</td>
              <td>{item.name}</td>
              <td>{item.name}</td>
              <td>
                <Link to={`/edit/${item._id}`}>
                  <span style={{ color: "green" }}>Edit     </span>
                </Link>
                |
                <span onClick={() => props.delete(item._id)} style={{ color: "red", cursor: 'pointer' }}>     Delete</span>
              </td>
            </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
