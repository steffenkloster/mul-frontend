// Dette er en funktionel komponent TodoList, der modtager to props: items og handleTaskClick.
const TodoList = ({ items, handleTaskClick }) => {
  return (
    <div className="list">
      <div className="top"></div>
      <ul>
        {/* Vi bruger map-funktionen til at generere en liste med opgaver baseret på items-prop'en. */}
        {items.map((item, index) => (
          <li
            // Vi tilføjer en CSS-klasse "completed" hvis isCompleted er sand, ellers er klassen tom.
            className={item.isCompleted ? "completed" : ""}
            key={index}
            // Når brugeren klikker på en opgave, kalder vi handleTaskClick-funktionen med opgavens index som argument.
            onClick={() => handleTaskClick(index)}
          >
            {/* Vi tilføjer en CSS-klasse "priority-x", hvor x er prioritetens værdi, for at vise opgavens prioritet. */}
            <span className={`priority priority-${item.priority}`}></span>
            {/* Vi viser selve opgavensteksten her. */}
            {item.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
