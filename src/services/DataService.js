import Api from "./Api";

const DataService = {
  getData() {
    return Api().get("/api/data");
  },
  getOneData(id) {
    return Api().get(`/api/data/${id}`);
  },
  postData(payload) {
    return Api().post("/api/data", payload);
  },
  editData(id, payload) {
    return Api().put(`/api/data/${id}`, payload);
  },
  deleteData(id) {
    return Api().delete(`/api/data/${id}`);
  },
};

export default DataService;
