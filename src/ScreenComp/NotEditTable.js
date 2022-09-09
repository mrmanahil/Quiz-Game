import React from "react";

const NotEditTable = ({ modalcontent }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Email</th>
          <th scope="col">Description</th>
          <th scope="col">Product</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            {modalcontent?.customer ? modalcontent?.customer : "None"}
          </th>
          <td>
            {modalcontent?.customer_email
              ? modalcontent?.customer_email
              : "None"}
          </td>
          <td>
            {modalcontent?.description ? modalcontent?.description : "None"}
          </td>
          <td>{modalcontent?.product ? modalcontent?.product : "None"}</td>
          <td>{modalcontent?.Status ? modalcontent?.Status : "Pending"}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default NotEditTable;
