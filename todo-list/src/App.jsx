import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

// Dette er hovedkomponenten App, der indeholder hele applikationen.
function App() {
  // Vi opretter tre tilstandsvariabler ved hjælp af useState-hook'en.
  // todoItems indeholder en liste over opgaver som TodoItem-objekter.
  // task indeholder den aktuelle opgavetekst, som brugeren indtaster i inputfeltet.
  // priority indeholder den aktuelle prioritet for opgaven.
  const [todoItems, setTodoItems] = useState([new TodoItem("Vaske tøj", 1)]);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState(1);

  // handleSubmit-funktionen kaldes, når brugeren klikker på "Indsæt" knappen.
  const handleSubmit = () => {
    // Vi opretter et nyt TodoItem-objekt med opgavetekst (task) og prioritet (priority).
    const newTodoItem = new TodoItem(task, priority);

    // Vi opdaterer listen af opgaver ved at tilføje det nye TodoItem til den eksisterende liste.
    const updatedList = [...todoItems, newTodoItem];
    setTodoItems(updatedList);
  };

  // handleTaskClick-funktionen kaldes, når en opgave i TodoList komponenten klikkes.
  const handleTaskClick = (index) => {
    // Vi opretter en kopi af den eksisterende liste af opgaver.
    const updatedItems = [...todoItems];

    // Vi ændrer isCompleted-egenskaben for den valgte opgave ved at invertere den.
    updatedItems[index].isCompleted = !updatedItems[index].isCompleted;

    // Vi opdaterer tilstandsvariablen todoItems med den opdaterede liste.
    setTodoItems(updatedItems);
  };

  return (
    <>
      {/* Vi bruger TodoList-komponenten til at vise opgavelisten og giver den todoItems og handleTaskClick som props. */}
      <TodoList items={todoItems} handleTaskClick={handleTaskClick} />
      <div className="add">
        {/* Her er inputfeltet, hvor brugeren kan indtaste en ny opgave. */}
        <input
          type="text"
          placeholder="Indtast opgave .."
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        {/* Her er prioritetsskifteren, hvor brugeren kan vælge prioritet for opgaven. */}
        <div className="priority">
          <div
            onClick={() => setPriority(1)}
            className={priority === 1 ? "selected" : ""}
          ></div>
          <div
            onClick={() => setPriority(2)}
            className={priority === 2 ? "selected" : ""}
          ></div>
          <div
            onClick={() => setPriority(3)}
            className={priority === 3 ? "selected" : ""}
          ></div>
        </div>
        {/* Når brugeren klikker på "Indsæt" knappen, udløses handleSubmit-funktionen. */}
        <button type="button" onClick={handleSubmit}>
          Indsæt
        </button>
      </div>
    </>
  );
}

export default App;
