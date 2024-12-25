//Лабораторная работа №2
//Рекункова Алёна ИСП-421р

//Задание №2
//Сделайте инпут и кнопку. По нажатию на кнопку пусть текст инпута станет новым тегом li в конец тега ul.

 
import './App.css'
import React, { useState } from 'react';
function App() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [inputValue, setInputValue] = useState('');
    const handleAddItem = () => {
    if (inputValue.trim() !== '') {
        setItems([...items, inputValue]);
        setInputValue(''); // Очищаем инпут
    }
  };
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
         <input
            type="text"
            placeholder="Введите элемент"
             value={inputValue}
             onChange={handleInputChange}
        />
      <button onClick={handleAddItem}>Добавить элемент</button>
    </div>
  );
}
export default App;
