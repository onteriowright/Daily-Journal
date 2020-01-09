import {
  savedEntries,
  useSavedJournalEntries,
  editNotes
} from "./JournalDataProviderComponent.js";
import JournalComponent from "./JournalComponent.js";
import { UseMoods } from "./MoodDataProvider.js";

const JournalEntryListComponent = () => {
  const eventHub = document.querySelector("#container");
  const journalHTMl = document.querySelector("#journal");

  eventHub.addEventListener("editEntryClicked", clickEvent => {
    const entryId = clickEvent.detail.entryId;

    const useEntries = useSavedJournalEntries();

    const foundEntry = useEntries.find(currentObject => {
      return currentObject.id === parseInt(entryId, 10);
    });

    document.querySelector("#hidden-input").value = foundEntry.id;
    document.querySelector("#journal-date").value = foundEntry.date;
    document.querySelector("#concepts-covered").value = foundEntry.concepts;
    document.querySelector("#journal-entry").value = foundEntry.textArea;
    document.querySelector("#mood").value = foundEntry.mood;
  });

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submit") {
      const hiddenValue = document.querySelector("#hidden-input").value;
      if (hiddenValue !== "") {
        const editedEntry = {
          id: parseInt(document.querySelector("#hidden-input").value),
          date: document.querySelector("#journal-date").value,
          concepts: document.querySelector("#concepts-covered").value,
          textArea: document.querySelector("#journal-entry").value,
          mood: document.querySelector("#mood").value
        };
        console.log(editedEntry);
        editNotes(editedEntry).then(() => {
          const message = new CustomEvent("entryHasBeenEdited");
          eventHub.dispatchEvent(message);
        });
      } else {
        const newEntry = {
          date: document.querySelector("#journal-date").value,
          concepts: document.querySelector("#concepts-covered").value,
          textArea: document.querySelector("#journal-entry").value,
          mood: document.querySelector("#mood").value
        };
        savedEntries(newEntry);
      }
    }
  });

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "show-entries") {
      const customEventListener = new CustomEvent("showBtnWasClicked");
      clickEvent.preventDefault();
      eventHub.dispatchEvent(customEventListener);
    }
  });

  const useMoods = UseMoods();

  journalHTMl.innerHTML = `
    <section>
      ${JournalComponent(useMoods, useMoods)}
    </section>
  `;
};

export default JournalEntryListComponent;
