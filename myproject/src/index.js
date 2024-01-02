import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Input from './Input';
import Button from './Button';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='main'>
    {/* <React.StrictMode> */}
    <App />
    <Input label={"Name"} type={"text"}/>
    <Input label={"Number"} type={"number"}/>
    <Input label={"Email"} type={"email"}/>
    <Input label={"Password"} type={"password"}/>                       
    <Button />
   
  {/* </React.StrictMode> */}
  </div>
  
);

