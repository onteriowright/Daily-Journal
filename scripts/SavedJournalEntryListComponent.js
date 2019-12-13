import {
  useSavedJournalEntries,
  getEntries
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

const renderData = entriesCollection => {
  entryHTML.innerHTML = `
        <h2>Notes:</h2>
        <section>
          ${entriesCollection
            .map(entry => SavedJournalEntryComponent(entry))
            .join("")}
        </section>
      `;
};

export default SavedJournalEntryListComponent;
