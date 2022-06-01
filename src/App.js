import logo from "./logo.svg";
import "./App.css";

function App() {
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
