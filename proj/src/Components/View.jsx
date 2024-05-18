import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'
import Navbar from './Navbar.jsx'
import '../style/View.css'

const View = () => {

    const[cars,setCars] = useState([]);

    useEffect(()=>{
        const fetchb = async()=>{
            try{
            const res = await axios.get('http://localhost:8800/cars_pool');
            setCars(res.data);
            console.log(res);
            }
            catch(err){
                console.log(err);
            }
        }

        fetchb();
    })
  return (

    <>
    <Navbar/>
     <div className='cars'>
      {cars.map(car=>(
        <div className='car' key={car.vehicle_number}>
            <h2>no. {car.vehicle_number}</h2>
            <p>type :{car.vehicle_type}</p>
           <p> company : {car.company}</p> 
            <p>model :{car.model}</p>
           <p> owner's contact:{car.owner_contact}</p>
            <p>dep_from: {car.departure_from}</p>
            <p>arrival at :{car.arrival_at}</p>
            <p> capacity : {car.capacity}</p>
            <p> time_of_dep: {car.time_of_dep}</p>
            <span>date_of_dep: {car.date_of_dep}</span>
            </div>
      )
      )}
      
    </div>
    </>
   
  )
}

export default View;
