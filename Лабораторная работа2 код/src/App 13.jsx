//Лабораторная работа №2
//Рекункова Алёна ИСП-421р

//Задание № 2
//Сделайте три инпута и кнопку. По нажатию на кнопку из данных инпута создайте новую li в конце тега ul.
 
import './App.css'
import React, { useState } from 'react';
const initNotes = [
  { id: "1", prop1: "value11", prop2: "value12", prop3: "value13" },
  { id: "2", prop1: "value21", prop2: "value22", prop3: "value23" },
  { id: "3", prop1: "value31", prop2: "value32", prop3: "value33" },
];
function App() {
  const [notes, setNotes] = useState(initNotes);
  const [prop1, setProp1] = useState("");
  const [prop2, setProp2] = useState("");
  const [prop3, setProp3] = useState("");
  const addNote = () => {
    const newNote = {
      id: Date.now().toString(), 
      prop1,
      prop2,
      prop3,
    };
    setNotes([...notes, newNote]);
    setProp1("");
    setProp2("");
    setProp3("");
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
      <input
        type="text"
        value={prop1}
        onChange={(e) => setProp1(e.target.value)}
        placeholder="Prop1"
      />
      <input
        type="text"
        value={prop2}
        onChange={(e) => setProp2(e.target.value)}
        placeholder="Prop2"
      />
      <input
        type="text"
        value={prop3}
        onChange={(e) => setProp3(e.target.value)}
        placeholder="Prop3"
      />
      <button onClick={addNote}>Add Note</button>
    </div>
  );
}
export default App;

