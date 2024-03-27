import React, { useState } from 'react';
import {ReactComponent as VectorWhite} from "../images/Vector.svg"
import './ThannksModal.css';
import {ReactComponent as Logo} from "../images/logo.svg"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
function ThanksModal() {
   
  return (
    
    <div className="CallBackOverlay">
      <div className="CallBackContent">
      <Link to="/">  <svg id="ModalClose"  width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1.70711" y1="1.69853" x2="32.1127" y2="32.1041" stroke="white" strokeOpacity="0.8" strokeWidth="2"/>
<line x1="1.29289" y1="31.6984" x2="31.6985" y2="1.29282" stroke="white" strokeOpacity="0.8" strokeWidth="2"/>
</svg></Link>
<div id="ThanksModalContent">
        <div id="ModalMainText">Спасибо за заявку</div>
      
    
    <div id="ThanksModalMinorText">
   
    Я обязательно свяжусь с вами в ближайшее время.
    </div>
  

    <Logo id="ThanksModalIcon"/>
</div>

      </div>
     
    </div>
  );
}

export default ThanksModal;