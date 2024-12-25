//Лабораторная работа №2
//Рекункова Алёна ИСП-421р


//Задание №1
//Дан следующий массив:
//[1, 2, 3, 4, 5, 6, 7, 8, 9];
//Выведите на экран среднее арифметическое элементов этого массива. В цикле сделайте инпуты для редактирования элементов.
 
import './App.css'
import React, { useState } from 'react';
function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const getAverage = (arr) => {
    if (arr.length === 0) {
      return 0;
    }
    const sum = arr.reduce((acc, num) => acc + Number(num), 0);
    return sum / arr.length;
  };
  const handleChange = (index, event) => {
    const newNumbers = numbers.map((num, i) => {
      if (i === index) {
        return Number(event.target.value);
      } else {
         return num;
      }
    });
     setNumbers(newNumbers);
  };
   const result = numbers.map((num, index) => {
    return (
        <input key={index}
             type="number"
             value={num}
             onChange={(event) => handleChange(index, event)} />
    );
  });
  return (
    <div>
      {result}
      <p>Среднее арифметическое: {getAverage(numbers)}</p>
    </div>
  );
}
export default App;