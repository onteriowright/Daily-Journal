import {
  useSavedJournalEntries,
  getEntries,
  deleteEntries
} from "./JournalDataProviderComponent.js";
import SavedJournalEntryComponent from "./SavedJournalEntryComponent.js";

const SavedJournalEntryListComponent = () => {
  const eventHub = document.querySelector("#container");
  const entryHTML = document.querySelector("#entryLog");
  const showBtn = document.querySelector("#show-entries");
  const hiddenValue = document.querySelector("#hidden-input");

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

  eventHub.addEventListener("entry-saved-update", clickEvent => {
    document.querySelector("#journal-date").value = "";
    document.querySelector("#concepts-covered").value = "";
    document.querySelector("#journal-entry").value = "";
    document.querySelector("#select-mood").value = "0";

    if (
      showBtn.innerHTML === "Hide Entries" ||
      (showBtn.innerHTML === "Show Entries" && entryHTML.innerHTML !== "") ||
      entryHTML.innerHTML === ""
    ) {
      showBtn.innerHTML = "Hide Entries";
      reRenderData();
    } else {
      showBtn.innerHTML = "Show Entries";
      entryHTML.innerHTML = "";
    }

    const updatedEntries = useSavedJournalEntries();
    renderData(updatedEntries);
  });

  eventHub.addEventListener("entryHasBeenEdited", clickEvent => {
    document.querySelector("#journal-date").value = "";
    document.querySelector("#concepts-covered").value = "";
    document.querySelector("#journal-entry").value = "";
    document.querySelector("#select-mood").value = "0";

    hiddenValue.value = "";
    if (
      showBtn.innerHTML === "Hide Entries" ||
      (showBtn.innerHTML === "Show Entries" && entryHTML.innerHTML !== "") ||
      entryHTML.innerHTML === ""
    ) {
      showBtn.innerHTML = "Hide Entries";
      reRenderData();
    } else {
      showBtn.innerHTML = "Show Entries";
      entryHTML.innerHTML = "";
    }

    const updateEntries = useSavedJournalEntries();
    renderData(updateEntries);
  });

  eventHub.addEventListener("showBtnWasClicked", () => {
    if (showBtn.innerHTML === "Show Entries" && entryHTML.innerHTML === "") {
      showBtn.innerHTML = "Hide Entries";
      reRenderData();
    } else {
      showBtn.innerHTML = "Show Entries";
      entryHTML.innerHTML = "";
    }
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
          <h2 class="notes-title">Entries:</h2>
          ${entriesCollection
            .map(entry => SavedJournalEntryComponent(entry))
            .join("")}
        </section>
      `;
  };
};
export default SavedJournalEntryListComponent;
