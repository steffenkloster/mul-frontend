// Vi opretter en simpel JavaScript-klasse kaldet TodoItem, der repræsenterer en opgave.
export default class TodoItem {
  // Konstruktøren tager to parametre: task (opgavetekst) og priority (prioritet).
  constructor(task, priority) {
    // Vi initialiserer egenskaberne for TodoItem med de modtagne værdier.
    this.task = task; // Opgavetekst
    this.priority = priority; // Prioritet (kan være 1, 2 eller 3)
    this.isCompleted = false; // En flag, der angiver, om opgaven er fuldført (starter som falsk).
  }
}
