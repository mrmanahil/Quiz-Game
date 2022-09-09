import React from "react";

const FilteredData = ({ index, sno, item, showDetails, deleteItem }) => {
  return (
    <tr key={index}>
      <th scope="row">{sno + index}</th>
      <td>{item?.customer}</td>
      <td>{item?.customer_email}</td>
      <td>{item?.description}</td>
      <td>{item.product}</td>
      <td>
        <div class="form-check form-switch d-flex justify-content-center">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            checked={item.Status === null ? false : true}
          />
        </div>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => showDetails(item)}>
          View
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteItem(item)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default FilteredData;
