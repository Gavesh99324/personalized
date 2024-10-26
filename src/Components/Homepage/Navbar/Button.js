import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

export default function Button() {
  return (
    <div>
        <Link to='/login'>
        <button className='btn'>Login</button>
        </Link>
    </div>
  )
}
