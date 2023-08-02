
import { useState } from 'react';
import  data from './data'
import './App.css';
import  Tour from'./Compnonents/Tour';

function App(){
 
  const[tours,setTours] = useState(data)

function removeTour(id){

  const newTour = tours.filter((tour) =>tour.id !==id)
  setTours(newTour);
}
function refreshHandler(){

  setTours(data);
}

if(tours.length==0){

  return (
    <div className='refresh'>
      <h2>No Tours Left</h2>

      <button className='btn-ref' onClick={refreshHandler}>
        Refresh
      </button>
    </div>
  );
}



 return (
    <div className="App">

      <Tour tours ={tours} removeTour={removeTour}></Tour>
      
    </div>
  );
}

export default App;
