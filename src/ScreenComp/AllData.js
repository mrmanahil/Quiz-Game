import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getCustomers,
  getInvoice,
  showInvestmentDetails,
} from "./redux/Actions/customer.action";
import ReactPaginate from "react-paginate";
import { MDBDataTable } from "mdbreact";
import Loader from "./Loader";
import ReactSwitch from "react-switch";
import { toast } from "react-toastify";
import { Button, Modal, ModalFooter } from "react-bootstrap";
import { useForm } from "react-hook-form";
import FilteredData from "./ScreenComp/FilteredData";
import InvoiceData from "./ScreenComp/InvoiceData";
import Inputs from "./ScreenComp/Inputs";
import AllInputs from "./ScreenComp/AllInputs";
import NotEditTable from "./ScreenComp/NotEditTable";
import ShowModal from "./ScreenComp/ShowModal";
import Table from "./ScreenComp/Table";
import SearchDiv from "./ScreenComp/SearchDiv";

const AllData = () => {
  const token = "1116|pqQUD436DklxgOeKSVELZAghf5D2kS35ni2ZbEqZ";

  const [isshown, setisshown] = useState(false);

  const [modalcontent, setmodalcontent] = useState();

  const [edit, setEdit] = useState(false);

  const [page, setPage] = useState(1);

  const [filteredData, setFilteredData] = useState("");

  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvoice(token, page, setLoading));
  }, [page]);

  // console.log(modalcontent);

  const state = useSelector((state) => state?.customers?.getCustomer);
  const count = useSelector((state) => state?.customers?.total);
  // console.log(count % 10 == 0 ? count / 10 : count / 10 + 1);
  // console.log(e.selected+1);
  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };
  const [sno, setsno] = useState(0);
  useEffect(() => {
    setsno(10 * (page - 1) + 1);
  }, [page]);

  const searchByName = (search) => {
    // console.log(searchData.target.value);
    if (search === null || search === "" || search === undefined) {
      setFilteredData(state);
    } else {
      let filterData = state.filter(
        (item) =>
          item.customer_email.includes(search) ||
          item.description.includes(search) ||
          item.customer.includes(search) ||
          item.product.includes(search)
      );
      setFilteredData(filterData);
    }
  };
  // console.log(page);

  const deleteItem = (Deleteitem) => {
    // console.log(id);
    const updatedData = state.filter((item) => {
      return item.id !== Deleteitem;
    });
    console.log(updatedData);
    setFilteredData(updatedData);
    console.log("Ok");
    dispatch(getInvoice(token, page, setLoading));
  };

  const showDetails = (item) => {
    setmodalcontent(item);
    setisshown(true);
    // setEdit(true);
  };

  const saveDetails = (item) => {
    // console.log(item);
    setEdit(false);
    setisshown(false);
    reset();
  };

  const handleClose = () => {
    setisshown(false);
    setEdit(false);
    reset();
  };

  const previousData = () => {
    setEdit(true);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SearchDiv searchByName={searchByName} />
          <Table
            filteredData={filteredData}
            FilteredData={FilteredData}
            sno={sno}
            showDetails={showDetails}
            deleteItem={deleteItem}
            state={state}
            InvoiceData={InvoiceData}
          />
        </>
      )}
      <ShowModal
        isshown={isshown}
        handleClose={handleClose}
        edit={edit}
        NotEditTable={NotEditTable}
        modalcontent={modalcontent}
        AllInputs={AllInputs}
        Inputs={Inputs}
        register={register}
        formState={formState}
        Button={Button}
        saveDetails={saveDetails}
        previousData={previousData}
      />
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={parseInt(count % 10 == 0 ? count / 10 : count / 10 + 1)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={count}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
};

export default AllData;
