//Лабораторная работа №2
//Рекункова Алёна ИСП-421р


//Задание №1
//Пусть в стейте хранится объект с датой:
//const initDate = { year: 2025, month: 12, day: 31 };
//Выведите в абзаце год, месяц и день из даты, хранящейся в стейте, а также день недели, соответствующий ей.

 
import './App.css'
import React, { useState } from 'react';
function App() {
  const initDate = { year: 2025, month: 12, day: 31 };
  const [date, setDate] = useState(initDate);
  const getDayOfWeek = (year, month, day) => {
    const dateObj = new Date(year, month - 1, day); // month -1 because months are 0-indexed
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return daysOfWeek[dateObj.getDay()];
  };
  return (
    <div>
      <p>
        Год: {date.year}, Месяц: {date.month}, День: {date.day}, День недели: {getDayOfWeek(date.year, date.month, date.day)}
      </p>
    </div>
  );
}
export default App;