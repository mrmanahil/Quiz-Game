import React from "react";
import { Button, Modal, ModalFooter } from "react-bootstrap";

const ShowModal = ({
  isshown,
  handleClose,
  edit,
  NotEditTable,
  modalcontent,
  AllInputs,
  Inputs,
  register,
  formState,
  Button,
  saveDetails,
  previousData,
}) => {
  return (
    <Modal
      show={isshown}
      onHide={() => handleClose()}
      className="Modal tnModal"
    >
      <Modal.Header className="modal-header">
        <Modal.Title>Customer Details</Modal.Title>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          onClick={handleClose}
        >
          &times;
        </button>
      </Modal.Header>
      <Modal.Body>
        {!edit ? (
          <NotEditTable modalcontent={modalcontent} />
        ) : (
          <AllInputs
            Inputs={Inputs}
            register={register}
            modalcontent={modalcontent}
            formState={formState}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        {edit ? (
          <Button onClick={() => saveDetails(modalcontent)}>Save</Button>
        ) : (
          <Button onClick={() => previousData()}>Edit</Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ShowModal;
