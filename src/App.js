import logo from "./logo.svg";
import "./App.css";



function App() {
  var Search = [
    {
      CarName: "Nexon",
      Brand: "Tata",
      Mileage: 20,
      Electric: true,
      Safety: 16,
    },
    {
      CarName: "Venue",
      Brand: "Hyundai",
      Mileage: 15,
      Electric: false,
      Safety: 12,
    },
    {
      CarName: "XUV300",
      Brand: "Mahindra",
      Mileage: 16,
      Electric: false,
      Safety: 14,
    },
    {
      CarName: "Brezza",
      Brand: "Maruti Suzuki",
      Mileage: 18,
      Electric: false,
      Safety: 14,
    },
  ];
  
  return (
    <>
    
    <h1 className="title-main">Car Search Data </h1>
    <table className="cars-table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">CarName</th>
          <th scope="col">Brand</th>
          <th scope="col">Mileage</th>
          <th scope="col">Electric</th>
          <th scope="col">Safety (Out of 17)</th>
        </tr>
      </thead>
      
      <tbody>
{
  Search.map((car,index)=>{
      return (
        <tr>
          <td scope="row">{index+1}</td>
          <td>{car.CarName}</td>
          <td>{car.Brand}</td>
          <td>{car.Mileage}</td>
          <td>{car.Electric?'YES':'NO'}</td>
          <td>{car.Safety}</td>
        </tr>
      )
  })
}
        
      </tbody>
    </table>
    </>
  );
}

export default App;
