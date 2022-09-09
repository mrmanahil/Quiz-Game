// import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {
  getCustomers,
  getInvoice,
  showInvestmentDetails,
} from "./redux/Actions/customer.action";
import { Button, Modal, ModalFooter } from "react-bootstrap";
import { useForm } from "react-hook-form";
import MainNavigation from "./ChatProjectPractice/MainNavigation";
import validator from "validator";

function App() {
  const [fields, setFields] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log({ ...fields });
    if (!validator.isEmail(fields.email)) return setError("Email Is Not Valid");
  };
  return (
    <>
      {/* <form onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
            value={fields.email}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setFields({ ...fields, password: e.target.value })}
            value={fields.password}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Confirm Password"
            onChange={(e) =>
              setFields({ ...fields, confirmPassword: e.target.value })
            }
            value={fields.confirmPassword}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button
          type="submit"
          name="submit"
          className="btn btn-primary"
          data-testid="add-word-input"
        >
          Submit
        </button>
      </form> */}
      <BrowserRouter>
        <MainNavigation />
      </BrowserRouter>
    </>
  );
}

export default App;
