import JournalEntryListComponent from "./DailyJournalComponents/JournalEntryListComponent.js";
import SavedJournalEntryListComponent from "./DailyJournalComponents/SavedJournalEntryListComponent.js";
import { getEntries } from "./DailyJournalComponents/JournalDataProviderComponent.js";

JournalEntryListComponent();
getEntries().then(SavedJournalEntryListComponent);
