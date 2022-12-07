import React from "react";
import { Modal, ModalHeader, ModalBody, Spinner } from "reactstrap";

function DeleteModal({ isOpen, loading, onDeleteClick, onCloseClick }) {
  return (
    <>
      <Modal isOpen={isOpen} toggle={onCloseClick} centered={true}>
        <ModalHeader toggle={onCloseClick}>Delete Data</ModalHeader>
        <ModalBody>
          <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
            <h4>Are you sure you want to remove this record ?</h4>
            <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
              <button
                type="button"
                className="btn w-sm btn-light"
                data-bs-dismiss="modal"
                onClick={onCloseClick}
              >
                Close
              </button>
              <button
                type="button"
                className="btn w-sm btn-danger "
                id="delete-record"
                onClick={onDeleteClick}
                disabled={loading}
              >
                {loading ? <Spinner>Loading...</Spinner> : "Yes, Delete It!"}
              </button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default DeleteModal;
