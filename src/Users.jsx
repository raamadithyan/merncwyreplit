import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState } from "react";


function Users() {
  const  [users,setUsers] =useState([])

  return (
    <div className="d-flex  vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-80 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success btn-sm">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map(user => {
                    return <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>
                            <Link to="/update" className="btn btn-sm btn-success me-2">Update</Link>
                            <button className="btn btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>
                })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;