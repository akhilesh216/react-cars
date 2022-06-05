import logo from "./logo.svg";
import "./List.css";
import { db } from './firebase';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Routes, Route, Link } from "react-router-dom";


function List() {
  const [cars, setCars] = useState([]);
 

  var Feed = [];
  var FeedColHead = [
    "#", "Brand", "Mileage" ,"Electric","Safety (Out of 17)","CarName",  "Image" , "ID"
  ];
  async function getCars() {
    let data = await axios.get('https://62991f6f7b866a90ec3722e2.mockapi.io/Cars');
    console.log(data.data);
    setCars(data.data);


  }

  useEffect(() => {
    getCars();
    // Update the document title using the browser API

    // start();
    // getCars();
  });
  return (
    <>
      <h1 className="title-main">Car Search Data </h1>
      
        <nav >
        <a class="addform" href="/add">Add</a>
        </nav>
                   
        
      
      <table className="cars-table">
        <thead>
          <tr>
            {
              FeedColHead.map((col) => {
                return (<th scope="col">{col}</th>)
              })
            }
          </tr>
        </thead>

        <tbody>
          {cars.map((car, index) => {
            return (
              <tr>
                <td>{index}</td>
               
                {
                  Object.keys(car).map((cell)=>{
                    if(cell == "image"){
                      return( <td><img className="image" src={car[cell]}></img></td>)
                    }
                    else if(typeof(car[cell])=='boolean')
                    {
                    return(<td>{car[cell] ? "YES" : "NO"}</td>)
                    }
else
                   return( <td>{car[cell]}</td>)
                
                  })
                }

              </tr>
            );
          })}

        </tbody>
      </table>
    
    </>
  );
}

export default List;