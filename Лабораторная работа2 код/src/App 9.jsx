//Лабораторная работа №2
//Рекункова Алёна ИСП-421р

//Задание №2
//Модифицируйте предыдущую задачу, добавив три инпута для редактирования даты.
 
import './App.css'
import React, { useState } from 'react';
function App() {
  const initDate = { year: 2025, month: 12, day: 31 };
  const [date, setDate] = useState(initDate);
  const getDayOfWeek = (year, month, day) => {
    const dateObj = new Date(year, month - 1, day);
      const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return daysOfWeek[dateObj.getDay()];
  };
    const handleInputChange = (event, field) => {
        setDate(prevDate => ({
            ...prevDate, //Копируем предыдущий объект
            [field]: Number(event.target.value)
        }))
    }
  return (
    <div>
         <label>
        Год:
        <input
            type="number"
            value={date.year}
            onChange={(event) => handleInputChange(event, 'year')}
        />
      </label>
       <label>
        Месяц:
        <input
            type="number"
            value={date.month}
            onChange={(event) => handleInputChange(event, 'month')}
        />
      </label>
      <label>
        День:
        <input
            type="number"
            value={date.day}
            onChange={(event) => handleInputChange(event, 'day')}
        />
      </label>
       <p>
        Год: {date.year}, Месяц: {date.month}, День: {date.day}, День недели: {getDayOfWeek(date.year, date.month, date.day)}
      </p>
    </div>
  );
}
export default App;
