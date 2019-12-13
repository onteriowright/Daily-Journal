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
        <section>
          <h2 class="notes-title">Notes:</h2>
          ${entriesCollection
            .map(entry => SavedJournalEntryComponent(entry))
            .join("")}
        </section>
      `;
};

export default SavedJournalEntryListComponent;
