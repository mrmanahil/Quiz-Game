import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../redux/Actions/customer.action";
import { LOG_OUT } from "../redux/const/customer.const";

const Chat = ({ token }) => {
  const [data, setData] = useState();

  const getCustomerAPI = async () => {
    const ff = await getCustomer(token);
    setData(ff.data);
  };
  console.log(data);

  useEffect(() => {
    getCustomerAPI();
  }, []);

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone</th>
            {/* <th scope="col">Handle</th> */}
          </tr>
        </thead>
        {
          data.length>0?
        data?.map((item, index) => {
          // console.log(item);
          return (
            <tbody>
              <tr>
                <th scope="row">{item.first_name}</th>
                <td>{item.last_name}</td>
                <td>{item.phone}</td>
              </tr>
            </tbody>
          );
        }):(
          <h1 className="text-center">Loading.....</h1>
        )}
      </table>
    </>
  );
};

export default Chat;
