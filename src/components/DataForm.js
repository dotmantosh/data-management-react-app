import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { nameValidation, sectionValidation } from "../helpers/validations";
import DataService from "../services/DataService";

function DataForm({ id }) {
  const options = [
    { value: "1", label: "Manufacturing" },
    { value: "19", label: "&nbsp;&nbsp;&nbsp;&nbsp;Construction materials" },
    { value: "8", label: "&nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics" },
    { value: "6", label: "&nbsp;&nbsp;&nbsp;&nbsp;Food and Beverage" },
    {
      value: "342",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bakery &amp; confectionery products",
    },
    {
      value: "43",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages",
    },
    {
      value: "42",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fish &amp; fish products",
    },
    {
      value: "40",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat &amp; meat products",
    },
    {
      value: "39",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk &amp; dairy products ",
    },
    {
      value: "437",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other",
    },
    {
      value: "378",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sweets &amp; snack food",
    },
    { value: "13", label: "&nbsp;&nbsp;&nbsp;&nbsp;Furniture" },
    {
      value: "389",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bathroom/sauna ",
    },
    {
      value: "385",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bedroom",
    },
    {
      value: "390",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Children’s room ",
    },
    {
      value: "98",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kitchen ",
    },
    {
      value: "101",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Living room ",
    },
    {
      value: "392",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Office",
    },
    {
      value: "394",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Furniture)",
    },
    {
      value: "341",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outdoor ",
    },
    {
      value: "99",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project furniture",
    },
    { value: "12", label: "&nbsp;&nbsp;&nbsp;&nbsp;Machinery" },
    {
      value: "94",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery components",
    },
    {
      value: "91",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery equipment/tools",
    },
    {
      value: "224",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacture of machinery ",
    },
    {
      value: "97",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maritime",
    },
    {
      value: "271",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aluminium and steel workboats ",
    },
    {
      value: "269",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boat/Yacht building",
    },
    {
      value: "230",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ship repair and conversion",
    },
    {
      value: "93",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal structures",
    },
    {
      value: "508",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other",
    },
    {
      value: "227",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repair and maintenance service",
    },
    { value: "11", label: "&nbsp;&nbsp;&nbsp;&nbsp;Metalworking" },
    {
      value: "67",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Construction of metal structures",
    },
    {
      value: "263",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Houses and buildings",
    },
    {
      value: "267",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal products",
    },
    {
      value: "542",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal works",
    },
    {
      value: "75",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNC-machining",
    },
    {
      value: "62",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgings, Fasteners ",
    },
    {
      value: "69",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gas, Plasma, Laser cutting",
    },
    {
      value: "66",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIG, TIG, Aluminum welding",
    },
    { value: "9", label: "&nbsp;&nbsp;&nbsp;&nbsp;Plastic and Rubber" },
    {
      value: "54",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Packaging",
    },
    {
      value: "556",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic goods",
    },
    {
      value: "559",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic processing technology",
    },
    {
      value: "55",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blowing",
    },
    {
      value: "57",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moulding",
    },
    {
      value: "53",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastics welding and processing ",
    },
    {
      value: "560",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic profiles",
    },
    { value: "5", label: "&nbsp;&nbsp;&nbsp;&nbsp;Printing " },
    {
      value: "148",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertising",
    },
    {
      value: "150",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book/Periodicals printing",
    },
    {
      value: "145",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Labelling and packaging printing",
    },
    { value: "7", label: "&nbsp;&nbsp;&nbsp;&nbsp;Textile and Clothing" },
    {
      value: "44",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clothing",
    },
    {
      value: "45",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textile",
    },
    { value: "8", label: "&nbsp;&nbsp;&nbsp;&nbsp;Wood" },
    {
      value: "337",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Wood)",
    },
    {
      value: "51",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden building materials",
    },
    {
      value: "47",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden houses",
    },
    { value: "3", label: "Other" },
    { value: "37", label: "&nbsp;&nbsp;&nbsp;&nbsp;Creative industries" },
    { value: "29", label: "&nbsp;&nbsp;&nbsp;&nbsp;Energy technology" },
    { value: "33", label: "&nbsp;&nbsp;&nbsp;&nbsp;Environment" },
    { value: "2", label: "Service" },
    { value: "25", label: "&nbsp;&nbsp;&nbsp;&nbsp;Business services" },
    { value: "35", label: "&nbsp;&nbsp;&nbsp;&nbsp;Engineering" },
    {
      value: "28",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;Information Technology and Telecommunications",
    },
    {
      value: "581",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data processing, Web portals, E-marketing",
    },
    {
      value: "576",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programming, Consultancy",
    },
    {
      value: "121",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software, Hardware",
    },
    {
      value: "122",
      label:
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telecommunications",
    },
    { value: "22", label: "&nbsp;&nbsp;&nbsp;&nbsp;Tourism" },
    { value: "141", label: "&nbsp;&nbsp;&nbsp;&nbsp;Translation services" },
    { value: "21", label: "&nbsp;&nbsp;&nbsp;&nbsp;Transport and Logistics" },
    {
      value: "111",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air",
    },
    {
      value: "114",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rail",
    },
    {
      value: "112",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Road",
    },
    {
      value: "113",
      label: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Water",
    },
  ];
  const [name, setName] = useState("");
  const [sector, setSector] = useState([]);
  const [values, setValues] = useState();
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await DataService.getOneData(id);
      setLoading(false);
      setName(res.data.name);
      setSector(res.data.sectors);
      setTerms(res.data.terms);
      selectValues(res.data.sectors);
    } catch (error) {
      setErrors({ ...errors, dataError: error });
      setLoading(false);
    }
  };
  const handleNameChange = (e) => {
    if (errors.nameError) {
      setErrors({ ...errors, nameError: false });
    }
    setName(e.target.value);
  };
  const handleSectorChange = (e) => {
    if (errors.sectorError) {
      setErrors({ ...errors, sectorError: false });
    }
    let value = Array.from(e.target.selectedOptions, (option) => {
      return { label: option.label.trim(), value: option.value };
    });
    setSector(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!nameValidation(name)) {
      setErrors({ ...errors, nameError: true });
      return;
    }

    if (!sectionValidation(sector)) {
      setErrors({ ...errors, sectorError: true });

      return;
    }

    try {
      const payload = {
        name,
        sectors: sector,
        terms,
      };
      setLoading(true);
      if (id) {
        await DataService.editData(id, payload);
      } else {
        await DataService.postData(payload);
      }

      setLoading(false);
      navigate("/");
    } catch (error) {
      setErrors({ ...errors, dataError: true });
      setLoading(false);
    }
  };

  const selectValues = (items) => {
    const values = items.map((item) => item.value);
    setValues(values);
  };
  return (
    <>
      <div className="edit">
        <h1 className="h1 text-center">{id ? "Edit Data" : "Add Data"}</h1>
        {loading && <p className="text-center">Loading...</p>}
        <form onSubmit={handleFormSubmit}>
          <p className="text-center">
            Please enter your name and pick the Sectors you are currently
            involved in.
          </p>
          <div className="form-group mb-4">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              className={`form-control ${errors.nameError ? "is-invalid" : ""}`}
              placeholder="Enter your Name"
              onChange={handleNameChange}
              disabled={loading}
              value={name}
            />
            <div className="invalid-feedback">Please put your Name</div>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="name">Sectors *</label>
            <select
              multiple
              onChange={handleSectorChange}
              className={`form-control ${
                errors.sectorError ? "is-invalid" : ""
              }`}
              name="sector"
              disabled={loading}
              defaultValue={values}
            >
              {options.map((option, i) => {
                return (
                  <option
                    key={i}
                    dangerouslySetInnerHTML={{ __html: option.label }}
                    value={option.value}
                    className="pe-4"
                  ></option>
                );
              })}
            </select>
            <div className="invalid-feedback">
              Please select at least one sector
            </div>
          </div>

          <div className="form-group mb-4 d-flex gap-3 align-items-center">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              onChange={(e) => {
                setTerms(e.target.checked);
              }}
              checked={terms}
              disabled={loading}
            />
            <label htmlFor="terms">Agree to Terms</label>
          </div>
          <div className="form-action">
            <button
              type="submit"
              className="btn btn-lg btn-success"
              disabled={loading}
            >
              {loading ? <Spinner>Loading...</Spinner> : "Save"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default DataForm;
