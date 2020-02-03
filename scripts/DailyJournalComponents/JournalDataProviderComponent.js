/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

let entries = [];

export const savedEntries = entry => {
  return fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(entry)
  }).then(getEntries);
};

export const editNotes = entryObject => {
  return fetch(`http://localhost:8088/entries/${entryObject.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entryObject)
  }).then(getEntries);
};

export const deleteEntries = entryId => {
  return fetch(`http://localhost:8088/entries/${entryId}`, {
    method: "DELETE"
  }).then(getEntries);
};

export const getEntries = () => {
  return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(parsedData => {
      entries = parsedData.slice();
    });
};

/*
  This function provides a version of the
  raw data in the format that you want
*/
export const useSavedJournalEntries = () => {
  const sortByDate = entries.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  );
  return sortByDate;
};
