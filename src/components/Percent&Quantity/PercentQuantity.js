import React, { useState, useEffect } from 'react';
import './PercentQuantity.css';
import axios from 'axios';

function PercentQuantity() {
  const [gbpValue, setGbpValue] = useState(null);
let GBP;
  useEffect(() => {
    axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
      .then(response => {
        const gbpValue = response.data.Valute.GBP.Value;
        setGbpValue(gbpValue);
      })
      .catch(error => {
        console.error('Ошибка:', error);
      });
  }, []);
console.log(gbpValue)
GBP=Math.round(gbpValue)
const [currentTime, setCurrentTime] = useState(null);

useEffect(() => {
  axios.get('https://worldtimeapi.org/api/ip')
    .then(response => {
      const { datetime } = response.data;
    
      const dateOnly = datetime.split('T')[0];
      const digitsOnly = dateOnly.replace(/\D/g, '');
      const sum = digitsOnly.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
      setCurrentTime(sum);
    })
    .catch(error => {
      console.error('Ошибка при получении данных о времени:', error);
    });
}, []);

  return (
    <div id="PercentQuantity"> 
  
      <div id="Quantity">
      <div className='VerticalLine'></div>
      <div className="NumberText">
      <span className="Numbers">{currentTime}+</span>
      <span className='Text'>техник для достижения целей</span>
      </div>
      </div>
      
      <div id="Percent"> 
      <div className='VerticalLine'></div>
      <div className="NumberText">
      <span className="Numbers">{GBP}+</span>
      <span className='Text'>увеличение личной продуктивности</span>
      </div>
      </div>

    </div>
  );
}

export default PercentQuantity;
