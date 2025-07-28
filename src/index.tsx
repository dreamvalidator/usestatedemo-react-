import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseStateDemo from './UseStateDemo';
import MarsPhotoLibrary from './MarsPhotoLibrary';
import ShoppingComponent from './ShoppingComponent';
import TwoWayBinding from './TwoWayBinding';
import OneWayClassBinding from './OneWayClassBinding';
import TwoWayClassBinding from './TwoWayClassBinding';
import ShoppingClassDemo from './ShoppingClassDemo';
import LoginFunctionComponent from './LoginFunctionComponent';
import RegisterUser from './RegisterUser';
import FormikDemo from './FormikDemo';
import FormikValidation from './FormikValidation';  
import ContextDemo from './Contextdemo';
import { CookiesProvider } from 'react-cookie';
import UserLogin from './UserLogin';
import ReducerDemo from './ReducerDemo';
import ReducerDemoFunction from './ReducerDemoFunction';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

 // <CookiesProvider>
    <ReducerDemoFunction />
 // </CookiesProvider>  
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
