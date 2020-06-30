import React from "react";
import { Link } from "react-router-dom";

export default function HomeTable(props) {

  return (
    <div>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            props.user.map((item, index) => (
              <tr>
              <th scope="row">{ index + 1 }</th>
              <td>{item.username}</td>
              <td>{item.password}</td>
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
