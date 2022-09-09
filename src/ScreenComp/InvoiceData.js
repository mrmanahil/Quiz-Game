import React from "react";
import { toast } from "react-toastify";
import {
  approveSubsciber,
  getInvoice,
  getSubscription,
  rejectSubscriber,
} from "../redux/Actions/customer.action";

const InvoiceData = ({ index, sno, item, showDetails, deleteItem }) => {
  const token = "1116|pqQUD436DklxgOeKSVELZAghf5D2kS35ni2ZbEqZ";

  const onSuccess = () => {
    getInvoice(token);
  };

  const handleChange = (e) => {
    let isChecked = e.target.checked;
    if (isChecked === true) {
      toast.success("Congrats");
      console.log("Congrats");
      getInvoice(token);
    } else {
      console.log("Failure");
      toast.error("Failure");
      getInvoice(token);
    }
  };

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
            onChange={(e) => handleChange(e)}
          />
        </div>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => showDetails(item)}>
          View
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteItem(item.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default InvoiceData;
