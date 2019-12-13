import JournalEntryListComponent from "./JournalEntryListComponent.js";
import SavedJournalEntryListComponent from "./SavedJournalEntryListComponent.js";
import { getEntries } from "./JournalDataProviderComponent.js";

JournalEntryListComponent();
getEntries().then(SavedJournalEntryListComponent);
