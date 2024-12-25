//Лабораторная работа №2
//Рекункова Алёна ИСП-421р


//Задание №1
//Сделайте кнопку, по нажатию на которую будет добавляться новый элемент в конец массива, тем самым добавляя новый li в конец тега ul.
 
import './App.css'
import React, { useState } from 'react';
const initNotes = [
  { id: "1", prop1: "value11", prop2: "value12", prop3: "value13" },
  { id: "2", prop1: "value21", prop2: "value22", prop3: "value23" },
  { id: "3", prop1: "value31", prop2: "value32", prop3: "value33" },
];
function App() {
  const [notes, setNotes] = useState(initNotes);
  const addNote = () => {
    const newNote = {
      id: Date.now().toString(),
      prop1: "newValue1",
      prop2: "newValue2",
      prop3: "newValue3",
    };
    setNotes([...notes, newNote]);
  };
  const result = notes.map((note) => {
    return (
      <li key={note.id}>
        <span>{note.prop1}</span> <span>{note.prop2}</span> <span>{note.prop3}</span>
      </li>
    );
  });
  return (
    <div>
      <ul>{result}</ul>
      <button onClick={addNote}>Add Note</button>
    </div>
  );
}
export default App;