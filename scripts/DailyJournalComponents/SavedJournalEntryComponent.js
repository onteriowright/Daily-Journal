const SavedJournalEntryComponent = entry => {
  return `
    <section class="saved-notes">
        <div class="saved"><h4>Date:</h4> ${entry.date}</div>
        <div class="saved"><h4>Concept:</h4> ${entry.concepts}</div>
        <div class="saved"><h4>Entry:</h4> ${entry.textArea}</div>
        <div class="saved"><h4>Mood:</h4> ${entry.mood}</div>
    </section>
  `;
};

export default SavedJournalEntryComponent;
