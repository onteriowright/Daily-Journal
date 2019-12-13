const SavedJournalEntryComponent = entry => {
  return `
    <section class="saved-notes">
        <div><h4>Date:</h4> ${entry.date}</div>
        <div><h4>Concept:</h4> ${entry.concepts}</div>
        <div><h4>Entry:</h4> ${entry.textArea}</div>
        <div><h4>Mood:</h4> ${entry.mood}</div>
    </section>
  `;
};

export default SavedJournalEntryComponent;
