import React from 'react'
import './App.css';

function Input({label,type}) {
  return (
    <div className='input'>
        <label htmlFor="name">{label}</label>
        <input type={type} />
    </div>
  )
}

export default Input