
import "./List.css";
import { db } from "./firebase";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Form from "./Form";

function List() {
  const [cars, setCars] = useState([]);
  const [clickDelete, setclickDelete] = useState([]);
  const navigate = useNavigate();

  var Feed = [];
  var FeedColHead = [
    "#",
    "Brand",
    "Mileage",
    "Electric",
    "Safety (Out of 17)",
    "CarName",
    "Image",
    "ID",
    " "
  ];
  async function getCars() {
    let response = await axios.get("https://62991f6f7b866a90ec3722e2.mockapi.io/Cars");
    console.log(response.data);
    setCars(response.data);
  }

 async function Delete(id) {
    //alert(id);
    let response2 = await axios.delete("https://62991f6f7b866a90ec3722e2.mockapi.io/Cars/"+id);
    getCars();
  }
  async function Update(id) {
    //alert(id);
    navigate("/edit/"+id);
    
  }

  useEffect(() => {
    getCars();
    // Update the document title using the browser API

    // start();
    // getCars();
  }, []);
  return (
    <>
      <h1 className="title-main">Car Search Data </h1>

      <nav>
      
        <Link to="/add" className="btn btn-primary">Add</Link>
      </nav>

      <table className="cars-table">
        <thead>
          <tr>
            {FeedColHead.map((col) => {
              return <th scope="col">{col}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {cars.map((car, index) => {
            return (
              <tr>
                <td>{index + 1}</td>

                {Object.keys(car).map((cell) => {
                  if (cell == "image") {
                    return (
                      <td>
                        <img className="image" src={car[cell]}></img>
                      </td>
                    );
                  } else if (typeof car[cell] == "boolean") {
                    return <td>{car[cell] ? "YES" : "NO"}</td>;
                  } else return <td>{car[cell]}</td>;
                })}
                <td>
                <button type="button" onClick={()=>Delete(car.id)}  class="btn btn-primary"> Delete </button> 
                <button type="button" onClick={()=>Update(car.id)} class="btn btn-primary"> Edit </button> 
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default List;
