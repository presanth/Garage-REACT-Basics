import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './CarView.css'

function CarView() {

    const param= useParams()
    console.log(param.id);



    const [singleData,setSingleData]=useState([])
    const fetchSingle = async()=>{
        const val = await fetch('/cars.json')
        val.json().then(data=>{
            setSingleData(data)
        })
    }
    useEffect(()=>{
        fetchSingle()
    },[])


    const d = singleData.find(item=>item.id==param.id)

  return (
    <>
        {
            d?(
                <div className='viewmain'>
                    <div className='viewimgbox'>
                        <img className='viewimg' src='/cardp.jpg' alt=''/>
                    </div>
                    <div className='viewdetails'>
                        <p className='viewhead'>{d.Name}</p>
                        <p className='viewcontent'>Origin:{d.Origin}</p>
                        <p className='viewcontent'>Year:{d.Year}</p>
                        <p className='viewcontent'>Cylinders:{d.Cylinders}</p>
                        <p className='viewcontent'>Horsepower:{d.Horsepower}</p>
                        <p className='viewcontent'>Acceleration:{d.Acceleration}</p>
                        <p className='viewcontent'>Weight_in_lbs:{d.Weight_in_lbs}</p>
                    </div>
                </div>
            ):""  
        }
    </>
  )
}

export default CarView