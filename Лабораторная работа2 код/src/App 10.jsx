//Лабораторная работа №2
//Рекункова Алёна ИСП-421р

//Задание №1
//Сделайте кнопку, по нажатию на которую будет добавляться новый элемент в конец массива, тем самым добавляя новый li в конец тега ul.
 
import './App.css'
import React, { useState } from 'react';
function App() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const handleAddItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Добавить элемент</button>
    </div>
  );
}
export default App;
