
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Routes, Route, Link } from "react-router-dom";



function Form() {
  const [brand, setBrand] = useState([]);
  const [mileage, setMileage] = useState([]);
  const [electric, setElectric] = useState([]);
  const [safety, setSafety] = useState([]);
  const [carname, setCarName] = useState([]);
  const [image, setImage] = useState([]);

  function handleBrandChange(e) {
    console.log(e.target.value);
    setBrand(e.target.value)
  }
  function handleMileageChange(e) {
    console.log(e.target.value);
    setMileage(e.target.value)
  }
  function handleElectricChange(e) {
    console.log(e.target.value);
    setElectric(e.target.value)
  }
  function handleSafetyChange(e) {
    console.log(e.target.value);
    setSafety(e.target.value)
  }
  function handleCarNameChange(e) {
    console.log(e.target.value);
    setCarName(e.target.value)
  }
  function handleImageChange(e) {
    console.log(e.target.value);
    setImage(e.target.value)
  }
  async function submitChange(e) {
    e.preventDefault();
    let response = await axios.post('https://62991f6f7b866a90ec3722e2.mockapi.io/Cars',
      {
        brand: brand,
        electric: electric == "yes" ? true : false,
        image: image,
        mileage: parseInt(mileage),
        name: carname,
        safety: parseInt(safety),
      });
    }


    return (
      <div class="container">
        <>
          <h1>Form Page</h1>
          <nav >
            <a class="btn btn-primary" href="/" role="button">Back</a>
          </nav>

          <form>

            <div class="form-group">
              <label for="exampleInputEmail1">Brand</label>
              <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) => { handleBrandChange(e) }} aria-describedby="emailHelp" placeholder="Brand"></input>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Mileage</label>
              <input type="number" class="form-control" id="exampleInputPassword1" onChange={(e) => { handleMileageChange(e) }} placeholder="Mileage"></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Electric</label>
              <select class="form-control" id="exampleFormControlSelect1" onChange={(e) => { handleElectricChange(e) }}>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Safety</label>
              <input type="number" class="form-control" id="exampleInputPassword1" onChange={(e) => { handleSafetyChange(e) }} placeholder="Safety"></input>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Car Name</label>
              <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => { handleCarNameChange(e) }} placeholder="Car Name"></input>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Image</label>
              <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => { handleImageChange(e) }} placeholder="Image"></input>
            </div>
            <button type="button" class="btn btn-primary" onClick={(submitChange)}>Submit</button>

          </form>

        </>
      </div>
    );
  }

  export default Form;