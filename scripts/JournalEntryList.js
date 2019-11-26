import { useJournalEntries } from "./JournalDataProvider.js";
import JournalEntryComponent from "./JournalEntry.js";

const JournalEntryListComponent = () => {
  const entryHTML = document.querySelector(".entryLog");
  const entries = useJournalEntries();

  entryHTML.innerHTML += `
  <section class="container">
     ${entries.map(entry => JournalEntryComponent(entry)).join("")}
  </section>
  `;
};

export default JournalEntryListComponent;
