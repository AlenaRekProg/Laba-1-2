//Лабораторная работа №2
//Рекункова Алёна ИСП-421р


//Задание №1
//Сделайте выпадающий список городов. Сделайте также абзац, в который будет
//выводиться выбор пользователя.
 
 
import './App.css'
import React, { useState } from 'react';
function App() {
  const [selectedCity, setSelectedCity] = useState('');
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
  return (
    <div>
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="">Выберите город</option>
        <option value="moscow">Москва</option>
        <option value="saintpetersburg">Санкт-Петербург</option>
        <option value="novosibirsk">Новосибирск</option>
        <option value="ekaterinburg">Екатеринбург</option>
         <option value="kazan">Казань</option>
      </select>
      <p>Выбранный город: {selectedCity || "Город не выбран"}</p>
    </div>
  );
}
export default App;
