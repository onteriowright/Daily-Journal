import { useJournalEntries } from "./JournalDataProvider.js";
import JournalEntryComponent from "./JournalEntry.js";

//This function places the template created in JournalEntryComponent to the DOM

const JournalEntryListComponent = () => {
  const entryHTML = document.querySelector("#entry--entryLog");
  const entries = useJournalEntries();

  entryHTML.innerHTML += `
  <section class="container">
     ${entries.map(entry => JournalEntryComponent(entry)).join("")}
  </section>
  `;
};

export default JournalEntryListComponent;
