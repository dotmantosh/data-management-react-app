import React from "react";
import { Container } from "reactstrap";
import DataForm from "../components/DataForm";
import { useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  return (
    <>
      <Container>
        <DataForm id={id} />
      </Container>
    </>
  );
}

export default Edit;
