//Задание №1
//Дан инпут. Дан абзац. Сделайте так, чтобы при вводе текста в инпут, в абзаце выводилось количество введенных в инпут символов.
 
import './App.css'
import React, { useState } from 'react';
function App() {
  const [inputText, setInputText] = useState('');
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Введите текст"
        value={inputText}
        onChange={handleInputChange}
      />
      <p>Количество символов: {inputText.length}</p>
    </div>
  );
}
export default App;