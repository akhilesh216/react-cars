import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { getSelectionRange } from "@testing-library/user-event/dist/utils";

function Form() {
  const [brand, setBrand] = useState([]);
  const [mileage, setMileage] = useState([]);
  const [electric, setElectric] = useState();
  const [safety, setSafety] = useState([]);
  const [carname, setCarName] = useState([]);
  const [image, setImage] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  function handleBrandChange(e) {
    setBrand(e.target.value);
  }
  function handleMileageChange(e) {
    setMileage(e.target.value);
  }
  function handleElectricChange(e) {
    setElectric(e.target.value);
    console.log(e.target.value);
    console.log(Boolean(parseInt(e.target.value)));
  }
  function handleSafetyChange(e) {
    setSafety(e.target.value);
  }
  function handleCarNameChange(e) {
    setCarName(e.target.value);
  }
  function handleImageChange(e) {
    setImage(e.target.value);
  }
  async function submitChange(e) {
    e.preventDefault();
    if (id) {
      let response = await axios.put(
        "https://62991f6f7b866a90ec3722e2.mockapi.io/Cars/" + id,
        {
          id: id,
          brand: brand,
          electric: Boolean(parseInt(electric)),
          image: image,
          mileage: parseInt(mileage),
          name: carname,
          safety: parseInt(safety),
        }
      );
      navigate("/");
    } else {
      let response = await axios.post(
        "https://62991f6f7b866a90ec3722e2.mockapi.io/Cars",
        {
          brand: brand,
          electric: Boolean(parseInt(electric)),
          image: image,
          mileage: parseInt(mileage),
          name: carname,
          safety: parseInt(safety),
        }
      );
      navigate("/");
    }
  }
  async function getCar(id) {
    try {
      let response = await axios.get("https://62991f6f7b866a90ec3722e2.mockapi.io/Cars/" + id);
      setBrand(response.data.brand);
      setMileage(response.data.mileage);
      setElectric(response.data.electric ? "1" : "0");
      setSafety(response.data.safety);
      setCarName(response.data.name);
      setImage(response.data.image);
    } catch (error) {
setError(true);

    }
  }

  useEffect(() => {
    console.log(id);
    if (id) {
      getCar(id);
    }
    // Update the document title using the browser API
    // start();
    // getCars();
  }, []);

  return (
    <div class="container">
      <>
        <h1>Form Page</h1>
        <nav>
          <Link to="/" className="btn btn-primary">
            Back
          </Link>
        </nav>
{error ? <span >Record Not Found</span>:
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Brand</label>
            <input
              type="text"
              class="form-control"
              value={brand}
              onChange={(e) => {
                handleBrandChange(e);
              }}
              aria-describedby="emailHelp"
              placeholder="Brand"
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Mileage</label>
            <input
              type="number"
              class="form-control"
              value={mileage}
              onChange={(e) => {
                handleMileageChange(e);
              }}
              placeholder="Mileage"
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Electric</label>
            <select
              class="form-control"
              value={electric}
              onChange={(e) => {
                handleElectricChange(e);
              }}
            >
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Safety (Out of 17)</label>
            <input
              type="number"
              max="17"
              class="form-control"
              value={safety}
              onChange={(e) => {
                handleSafetyChange(e);
              }}
              placeholder="Safety"
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Car Name</label>
            <input
              type="text"
              class="form-control"
              value={carname}
              onChange={(e) => {
                handleCarNameChange(e);
              }}
              placeholder="Car Name"
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Image</label>
            <input
              type="password"
              class="form-control"
              value={image}
              onChange={(e) => {
                handleImageChange(e);
              }}
              placeholder="Image"
            ></input>
          </div>
          <button type="button" class="btn btn-primary" onClick={submitChange}>
            Submit
          </button>
        </form>
}
        
      </>
    </div>
  );
}

export default Form;
