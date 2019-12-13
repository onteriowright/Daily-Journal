import { savedEntries, getEntries } from "./JournalDataProviderComponent.js";
import JournalComponent from "./JournalComponent.js";

const JournalEntryListComponent = () => {
  const journalHTMl = document.querySelector("#journal");
  const eventHub = document.querySelector("#container");

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submit") {
      const newEntry = {
        date: document.querySelector("#journal-date").value,
        concepts: document.querySelector("#concepts-covered").value,
        textArea: document.querySelector("#journal-entry").value,
        mood: document.querySelector("#mood").value
      };
      savedEntries(newEntry).then(getEntries);
    }
  });

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "show-entries") {
      const customEventListener = new CustomEvent("showBtnWasClicked");
      eventHub.dispatchEvent(customEventListener);
    }
  });

  journalHTMl.innerHTML = `
    <section>
      ${JournalComponent()}
    </section>
  `;
};

export default JournalEntryListComponent;
