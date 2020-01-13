import { FilterComponent } from "./FilterComponent.js";
import { UseMoods } from "./MoodDataProvider.js";
import SavedJournalEntryComponent from "./SavedJournalEntryComponent.js";
import { useSavedJournalEntries } from "./JournalDataProviderComponent.js";

export const FilterListComponent = () => {
  const eventHub = document.querySelector(".main");
  const targetElement = document.querySelector("#filter");
  const entryHTML = document.querySelector("#entryLog");

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.name === "mood") {
      const mood = clickEvent.target.value;

      const useEntries = useSavedJournalEntries();
      const filterMood = useEntries.filter(entry => {
        if (entry.mood === mood) {
          return entry;
        }
      });

      renderMoodData(filterMood);
    }
  });

  const renderMoodData = entriesCollection => {
    entryHTML.innerHTML = `
        <section>
          <h2 class="notes-title">Entries:</h2>
          ${entriesCollection
            .map(entry => SavedJournalEntryComponent(entry))
            .join("")}
        </section>
      `;
  };

  const renderData = moodCollection => {
    targetElement.innerHTML = `
      ${FilterComponent(moodCollection)}
    `;
  };

  const useMoods = UseMoods();
  renderData(useMoods);
};
