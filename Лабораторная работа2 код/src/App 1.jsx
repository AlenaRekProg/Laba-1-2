//Лабораторная работа №2
//Рекункова Алёна ИСП-421р

//Задание №1
//Сделайте два инпута. Пусть текст первого инпута выводится в первый абзац, а текст второго инпута - во второй абзац.
 
import './App.css'
import React, { useState } from 'react';
function App() {
  const [firstInputText, setFirstInputText] = useState('');
  const [secondInputText, setSecondInputText] = useState('');
  const handleFirstInputChange = (event) => {
    setFirstInputText(event.target.value);
  };
  const handleSecondInputChange = (event) => {
    setSecondInputText(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Введите текст для первого абзаца"
        value={firstInputText}
        onChange={handleFirstInputChange}
      />
      <p>{firstInputText}</p>
      <input
        type="text"
        placeholder="Введите текст для второго абзаца"
        value={secondInputText}
        onChange={handleSecondInputChange}
      />
      <p>{secondInputText}</p>
    </div>
  );
}
export default App;