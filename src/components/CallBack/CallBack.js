import React, { useState } from 'react';
import { ReactComponent as VectorWhite } from '../images/Vector.svg';
import './CallBack.css';
import ThanksModal from '../ThanksModal/ThanksModal';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function CallBack() {

 


  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleLocalSubmit = () => {
  
    localStorage.setItem(name, phoneNumber);

  };
  const handleSubmit = () => {
    if (!name || !phoneNumber || !isChecked) {
      setFormSubmitted(true);
      return;
    }
  };
  C:\Users\AH\Desktop\тестовое задание\futuremarketagecy
  const handleNameChange = (event) => {
    const inputValue = event.target.value;
    if (/^[+a-zA-ZА-Яа-я\s]*$/.test(inputValue) || inputValue === '') {
      setName(inputValue);
      setNameError('');
    } else {
      setNameError('Пожалуйста используйте только буквы.');
    }
  };

  const handlePhoneChange = (event) => {
    const inputValue = event.target.value;
    if (/^[0-9+]*$/.test(inputValue) || inputValue === '') {
      setPhoneNumber(inputValue);
      setPhoneError('');
    } else {
      setPhoneError('Пожалуйста используйте только цифры.');
    }
  };

  const isFormValid = () => {
    return name.trim() !== '' && phoneNumber.trim() !== '' && isChecked;
  };

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`CallBackOverlay ${isOpen ? 'slide-from-right-enter' : 'slide-from-right-exit'}`}>
      <div className="CallBackContent">
        <Link to="/">
          <svg
            id="ModalClose"
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="1.70711" y1="1.69853" x2="32.1127" y2="32.1041" stroke="white" strokeOpacity="0.8" strokeWidth="2" />
            <line x1="1.29289" y1="31.6984" x2="31.6985" y2="1.29282" stroke="white" strokeOpacity="0.8" strokeWidth="2" />
          </svg>
        </Link>
        <div id="ModalContent">
          <div id="ModalMainText">Закажите обратный звонок</div>
          <div id="Input">
            <div>
              <input
                id="ModalName"
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="ИМЯ"
              />
              {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
            </div>
            <div>
              <input
                id="ModalName"
                type="text"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="ТЕЛЕФОН"
              />
              {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
            </div>
          </div>
          <div id="ModalCheckBox">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            Согласен на сохранение и обработку персональных данных
          </div>
          <Link to="/ThanksModal">
            <button id="RequestCallBack" disabled={!isFormValid()} onClick={() => { handleLocalSubmit(); setIsOpen(false); }}>
              <span id="RequestCallBackText">Заказать обратный звонок</span>
              <div id="RequestLine"></div>
              <svg id="Vector" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 4.29346V20.952H4.37326" stroke="white" strokeWidth="2" />
                <path d="M20.9618 21L1 1" stroke="white" strokeWidth="2" />
              </svg>
            </button>
            {!isFormValid() && (
  <p style={{ color: 'red' }}>Заполните все поля перед отправкой</p>
)

}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CallBack;
