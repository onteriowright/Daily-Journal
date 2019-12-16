import {
  useSavedJournalEntries,
  getEntries,
  deleteEntries
} from "./JournalDataProviderComponent.js";
import SavedJournalEntryComponent from "./SavedJournalEntryComponent.js";

const eventHub = document.querySelector("#container");
const entryHTML = document.querySelector("#entryLog");

const SavedJournalEntryListComponent = () => {
  eventHub.addEventListener("showBtnWasClicked", () => {
    getEntries().then(() => {
      const newEntries = useSavedJournalEntries();
      renderData(newEntries);
    });
  });
};

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteEntry--")) {
    const [prefix, id] = clickEvent.target.id.split("--");
    deleteEntries(id).then(() => {
      const newEntry = useSavedJournalEntries();
      renderData(newEntry);
    });
  }
});

const renderData = entriesCollection => {
  entryHTML.innerHTML = `
        <section>
          <h2 class="notes-title">Notes:</h2>
          ${entriesCollection
            .map(entry => SavedJournalEntryComponent(entry))
            .join("")}
        </section>
      `;
};

export default SavedJournalEntryListComponent;
