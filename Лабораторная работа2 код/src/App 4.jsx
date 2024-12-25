//Лабораторная работа №2
//Рекункова Алёна ИСП-421р


//Задание №1
//Дан чекбокс. С помощью чекбокса спросите у пользователя, если ли ему уже 18 лет. Если чекбокс отмечен, покажите пользователю следующий блок кода:
//<div>
//<h2>Ура, вам уже есть 18</h2>
//<p> здесь расположен контент только для взрослых </p>
//</div>;

//А если чекбокс не отмечен - то следующий:
//<div>
//<p> увы, вам еще нет 18 лет:( </p>
//</div>;
 
 
import './App.css'
import React, { useState } from 'react';
function App() {
  const [isAdult, setIsAdult] = useState(false);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isAdult}
          onChange={() => setIsAdult(!isAdult)}
        />
        Мне есть 18 лет
      </label>
      <div>
        {isAdult ? (
          <div>
            <h2>Ура, вам уже есть 18</h2>
            <p>здесь расположен контент только для взрослых</p>
          </div>
        ) : (
          <div>
            <p>увы, вам еще нет 18 лет:(</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
