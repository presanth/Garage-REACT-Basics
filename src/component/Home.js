import React, { useEffect, useState } from 'react'
import './Home.css'
import CarCard from './CarCard'

function Home() {
    const [carData,setCarData]=useState([])
    const fetchData=async()=>{
        const result = await fetch('/cars.json')
        result.json().then(data=>{
            setCarData(data)
            // console.log(data);
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (

    <div className='homemain'>
        {
            carData.map(datas=>(
                <CarCard carddata={datas}></CarCard>
            ))
        }
        
    </div>
  )
}

export default Home