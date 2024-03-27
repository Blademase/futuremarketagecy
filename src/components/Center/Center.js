import './Center.css';
import React, { useState } from 'react';
import {ReactComponent as VectorWhite} from "../images/Vector.svg"
import {ReactComponent as VectorBlack} from "../images/VectorNonWhite.svg"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import CallBack from '../CallBack/CallBack';
import ThanksModal from '../ThanksModal/ThanksModal';

function Center() {

  return (
    
      <div id="Center"> 
     
        <div id="MainText">
          <span>Создаю условия для вашего успеха</span>
        </div>
        <div id="MinorText">
          <div id='VerticalLine'></div>
          <div>
            <span>Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью, ваш успех зависит от ваших действий</span>
          </div>
        </div>
        <div id="CallBack">
        <Link to="/ModalCallBack">
          <button id='SignUp' >
 
           <span id="SignUpText">
           
            </span>
              <div id='BtnVerticalLine'></div>
              <svg id="Vector" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 4.29346V20.952H4.37326" stroke="white" strokeWidth="2"/>
      <path d="M20.9618 21L1 1" stroke="white" strokeWidth="2"/>  </svg>
          
          </button>
          </Link>
          <Routes> 
            <Route path="/ModalCallBack" element={<CallBack />} /> 
            <Route path="/ThanksModal" element={<ThanksModal />} /> 
        
          </Routes>  
          <Link to="/ModalCallBack" style={{ textDecoration: 'none' }}>
  <button id='Consultation'>
    <span id="ConsultationText"></span>
    <div id='BtnVerticalLine'></div>
    <svg id="Vector" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 4.29346V20.952H4.37326" stroke="white" strokeWidth="2"/>
      <path d="M20.9618 21L1 1" stroke="white" strokeWidth="2"/>
    </svg>
  </button>
</Link>

        </div>
      </div>

  );
}

export default Center;
