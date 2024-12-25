//Лабораторная работа №2
//Рекункова Алёна ИСП-421р


//Задание №1
//С помощью выпадающего списка предложите пользователю выбрать к какой возрастной группе он относится: от 0 до 12 лет, от 13 до 17, от 18 до 25, либо старше 25 лет.
 
 
import './App.css'
import React, { useState } from 'react';
function App() {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
  const handleAgeGroupChange = (event) => {
    setSelectedAgeGroup(event.target.value);
  };
  return (
    <div>
      <select value={selectedAgeGroup} onChange={handleAgeGroupChange}>
        <option value="">Выберите возрастную группу</option>
        <option value="0-12">от 0 до 12 лет</option>
        <option value="13-17">от 13 до 17 лет</option>
        <option value="18-25">от 18 до 25 лет</option>
        <option value="25+">старше 25 лет</option>
      </select>
      <p>
        {selectedAgeGroup === '0-12' && 'Вы относитесь к возрастной группе от 0 до 12 лет'}
        {selectedAgeGroup === '13-17' && 'Вы относитесь к возрастной группе от 13 до 17 лет'}
        {selectedAgeGroup === '18-25' && 'Вы относитесь к возрастной группе от 18 до 25 лет'}
        {selectedAgeGroup === '25+' && 'Вы относитесь к возрастной группе старше 25 лет'}
        {selectedAgeGroup === '' && 'Возрастная группа не выбрана'}
      </p>
    </div>
  );
}
export default App;