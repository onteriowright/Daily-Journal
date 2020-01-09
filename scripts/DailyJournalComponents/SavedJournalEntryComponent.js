const SavedJournalEntryComponent = entry => {
  return `
    <section class="saved-notes">
        <div class="saved"><span class="saved-note">Date:</span> ${entry.date}</div>
        <div class="saved"><span class="saved-note">Concept:</span> ${entry.concepts}</div>
        <div class="saved textarea"><span class="saved-note">Entry:</span> ${entry.textArea}</div>
        <div class="saved"><span class="saved-note">Mood:</span> ${entry.mood}</div>
        <div class="journal-btns">
          <button id="deleteEntry--${entry.id}" class="delete-btn">Delete Entry</button>
          <button id="editEntry--${entry.id}" class="delete-btn">Edit Entry</button>
        </div>
    </section>
  `;
};

export default SavedJournalEntryComponent;
