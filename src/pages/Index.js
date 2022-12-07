import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Badge, Table } from "reactstrap";
import DeleteModal from "../components/DeleteModal";
import DataService from "../services/DataService";
function Index() {
  const [data, setData] = useState([]);
  const [setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await DataService.getData();
      setLoading(false);
      setData(res.data);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleDeleteModal = (id) => {
    setId(id);
    setShowDeleteModal(true);
  };

  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const deleteData = async () => {
    try {
      setLoading(true);
      const res = await DataService.deleteData(id);
      const newData = data.filter((item, i) => item._id.toString() !== id);
      setLoading(false);
      setData(newData);
      setShowDeleteModal(false);
    } catch (error) {
      setLoading(false);
      setShowDeleteModal(false);
      setError({ ...error, dataError: error });
    }
  };

  const getSectors = (sector) => {
    return sector.map((item) => item.label);
  };

  return (
    <>
      <Container>
        <div className="main">
          <div className="h1 text-center">Data Management</div>
          {loading && <p className="text-center">Loading...</p>}
          <div className="add-sector">
            <button
              onClick={() => {
                navigate("/add");
              }}
              className="btn btn-success btn-lg d-block ms-auto"
            >
              Add Sector
            </button>
          </div>
          <div className="data-table text-center">
            <Table hover bordered responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Sectors</th>
                  <th>Agree of Terms</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <tr key={i}>
                    <th className="td" scope="row">
                      {i + 1}
                    </th>
                    <td>{item.name}</td>
                    <td>{getSectors(item.sectors).join()}</td>
                    <td>
                      <h3>
                        <Badge color={`${item.terms ? "success" : "danger"}`}>
                          {item.terms ? "Yes" : "No"}
                        </Badge>
                      </h3>
                    </td>
                    <td style={{ maxWidth: "100px" }}>
                      <div className="d-flex align-items-center justify-content-center gap-4 table-action ">
                        <i
                          onClick={() => {
                            navigate(`/edit/${item._id}`);
                          }}
                          className="fa fa-pencil-square-o success"
                          aria-hidden="true"
                        ></i>
                        <i
                          onClick={() => {
                            handleDeleteModal(item._id);
                          }}
                          className="fa fa-trash-o danger"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </td>
                  </tr>
                ))}
                {/* <tr>
                  <th className="td" scope="row">
                    1
                  </th>
                  <td>Jacob</td>
                  <td>Mechanics</td>
                  <td>
                    <h3>
                      <Badge color="danger">No</Badge>
                    </h3>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-3 table-action ">
                      <i
                        class="fa fa-pencil-square-o success"
                        aria-hidden="true"
                      ></i>
                      <i class="fa fa-trash-o danger" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="td" scope="row">
                    1
                  </th>
                  <td>Jacob</td>
                  <td>Mechanics</td>
                  <td>
                    <h3>
                      <Badge color="danger">No</Badge>
                    </h3>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-3 table-action ">
                      <i
                        class="fa fa-pencil-square-o success"
                        aria-hidden="true"
                      ></i>
                      <i class="fa fa-trash-o danger" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr> */}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
      <DeleteModal
        isOpen={showDeleteModal}
        loading={loading}
        onCloseClick={toggleDeleteModal}
        onDeleteClick={deleteData}
      />
    </>
  );
}

export default Index;
