//This function creates the template that will be displayed on the DOM

const JournalEntryComponent = entry => {
  return `
    <section id="entry--${entry.id}" class="form">
        <h4>Date: ${entry.date}</h4>
        <h4>Concept: ${entry.concept}</h4>
        <h4>Entry: ${entry.entry}</h4>
        <h4>Mood: ${entry.mood}</h4>
    </section>
  `;
};

export default JournalEntryComponent;
