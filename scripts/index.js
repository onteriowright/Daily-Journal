import JournalEntryListComponent from "./DailyJournalComponents/JournalEntryListComponent.js";
import SavedJournalEntryListComponent from "./DailyJournalComponents/SavedJournalEntryListComponent.js";
import { getEntries } from "./DailyJournalComponents/JournalDataProviderComponent.js";
import { FilterListComponent } from "./DailyJournalComponents/FilterListComponent.js";

getEntries()
  .then(JournalEntryListComponent)
  .then(SavedJournalEntryListComponent)
  .then(FilterListComponent);
