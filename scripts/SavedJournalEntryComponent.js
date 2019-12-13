const SavedJournalEntryComponent = entry => {
  return `
    <section class="form">
        <h4>Date: ${entry.date}</h4>
        <h4>Concept: ${entry.concepts}</h4>
        <h4>Entry: ${entry.textArea}</h4>
        <h4>Mood: ${entry.mood}</h4>
    </section>
  `;
};

export default SavedJournalEntryComponent;
