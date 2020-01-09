import {
  useSavedJournalEntries,
  getEntries,
  deleteEntries
} from "./JournalDataProviderComponent.js";
import SavedJournalEntryComponent from "./SavedJournalEntryComponent.js";

const SavedJournalEntryListComponent = () => {
  const eventHub = document.querySelector("#container");
  const entryHTML = document.querySelector("#entryLog");

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("editEntry--")) {
      const [prefix, entryId] = clickEvent.target.id.split("--");
      const newMessage = new CustomEvent("editEntryClicked", {
        detail: {
          entryId: entryId
        }
      });
      eventHub.dispatchEvent(newMessage);
    }
  });

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
      const [prefix, id] = clickEvent.target.id.split("--");
      deleteEntries(id).then(() => {
        const newEntry = useSavedJournalEntries();
        renderData(newEntry);
      });
    }
  });

  eventHub.addEventListener("entryHasBeenEdited", clickEvent => {
    const updateEntries = useSavedJournalEntries();
    renderData(updateEntries);
  });

  eventHub.addEventListener("notedCreated", clickEvent => {
    reRenderData();
  });

  eventHub.addEventListener("showBtnWasClicked", () => {
    reRenderData();
  });

  const reRenderData = () => {
    getEntries().then(() => {
      const newEntries = useSavedJournalEntries();
      renderData(newEntries);
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
};
export default SavedJournalEntryListComponent;
