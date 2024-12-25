//Лабораторная работа №2
//Рекункова Алёна ИСП-421р


//Задание №1
//Даны 5 инпутов. Сделайте так, чтобы при вводе чисел в наши инпуты в абзац выводилось среднее арифметическое введенных чисел.
 
import './App.css'
import React, { useState } from 'react';
function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
    const handleChange1 = (event) => {
    setValue1(Number(event.target.value));
  };
  const handleChange2 = (event) => {
    setValue2(Number(event.target.value));
  };
  const handleChange3 = (event) => {
      setValue3(Number(event.target.value));
  };
  const handleChange4 = (event) => {
    setValue4(Number(event.target.value));
  };
  const handleChange5 = (event) => {
    setValue5(Number(event.target.value));
  };
   const calculateAverage = () => {
    const sum = value1 + value2 + value3 + value4 + value5;
    return sum / 5;
  };
  return (
    <div>
        <input type="number" value={value1} onChange={handleChange1} />
        <input type="number" value={value2} onChange={handleChange2} />
        <input type="number" value={value3} onChange={handleChange3} />
        <input type="number" value={value4} onChange={handleChange4} />
        <input type="number" value={value5} onChange={handleChange5} />
      <p>Среднее арифметическое: {calculateAverage()}</p>
    </div>
  );
}
export default App;