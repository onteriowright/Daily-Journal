import { FilterComponent } from "./FilterComponent.js";
import SavedJournalEntryComponent from "./SavedJournalEntryComponent.js";
import { useSavedJournalEntries, getEntries } from "./JournalDataProviderComponent.js";
import { UseFilteredMoods } from "./FilterMoodsDataProvider.js";

export const FilterListComponent = () => {
  const eventHub = document.querySelector(".main");
  const targetElement = document.querySelector("#filter");
  const entryHTML = document.querySelector("#entryLog");
  const showBtn = document.querySelector("#show-entries");

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.name === "mood") {
      const mood = clickEvent.target.value;
      const useEntries = useSavedJournalEntries();

      if (mood === "Show All") {
        getEntries().then(() => {
          const showAllEntries = useSavedJournalEntries();
          renderMoodData(showAllEntries);
        });
      }

      const filterMood = useEntries.filter(entry => entry.mood === mood);

      if (showBtn.innerHTML === "Hide Entries" || (showBtn.innerHTML === "Show Entries" && entryHTML.innerHTML !== "") || entryHTML.innerHTML === "") {
        showBtn.innerHTML = "Hide Entries";
        renderMoodData(filterMood);
      } else {
        showBtn.innerHTML = "Show Entries";
        entryHTML.innerHTML = "";
      }
    }
  });

  const renderMoodData = entriesCollection => {
    entryHTML.innerHTML = `
        <section>
          <h2 class="notes-title">Entries:</h2>
          ${entriesCollection.map(entry => SavedJournalEntryComponent(entry)).join("")}
        </section>
      `;
  };

  const renderData = moodCollection => {
    targetElement.innerHTML = `
      ${FilterComponent(moodCollection)}
    `;
  };

  const useMoods = UseFilteredMoods();
  renderData(useMoods);
};
