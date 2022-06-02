import logo from "./logo.svg";
import "./App.css";
import {db} from './firebase';
import React, { useState, useEffect } from 'react';
import {collection, addDoc, Timestamp} from 'firebase/firestore';


function App() {
  const [count, setCount] = useState(0);
  var Feed = [
    {
      id: 1,
      CarName: "Nexon",
      Brand: "Tata",
      Mileage: 20,
      Electric: true,
      Safety: 16,
      
    },
    {
      id: 2,
      CarName: "Venue",
      Brand: "Hyundai",
      Mileage: 15,
      Electric: false,
      Safety: 12,
    },
    {
      id: 3,
      CarName: "XUV300",
      Brand: "Mahindra",
      Mileage: 16,
      Electric: false,
      Safety: 14,
    },
    {
      id: 4,
      CarName: "Brezza",
      Brand: "Maruti Suzuki",
      Mileage: 18,
      Electric: false,
      Safety: 14,
      
    },
    
    
  ];
  var FeedColHead=[
      "#","CarName","Brand","Mileage","Electric","Safety (Out of 17)","abcc",
  ];
  
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return (
    <>
      <h1 className="title-main">Car Search Data </h1>
      <table className="cars-table">
        <thead>
       <tr>
         {
         FeedColHead.map((col)=>{
return(<th scope="col">{col}</th>)
         })
         }
       </tr>
        </thead>

        <tbody>
          {Feed.map((car, index) => {
            return (
              <tr>
                {
                  Object.keys(car).map((cell)=>{
                    if(typeof(car[cell])=='boolean')
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

export default App;
