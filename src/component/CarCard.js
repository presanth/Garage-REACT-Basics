import React from 'react'
import './CarCard.css'
import { Link } from 'react-router-dom'

function CarCard({carddata}) {
  return (
    <Link to={`/view-car/${carddata.id}`} className='cardmain'>
        <img className='cardimg' src='/cardp.jpg' alt=''></img>
        <p className='name'>{carddata.Name}</p>
        <p className='details'>Origin : {carddata.Origin}</p>
        <p className='details'>Horsepower : {carddata.Horsepower}</p>
        <p className='details'>Cylinders : {carddata.Cylinders}</p>
    </Link>
  )
}

export default CarCard