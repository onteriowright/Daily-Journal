/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const entries = [
  {
    date: "11/7/2019",
    concept: "HTML & CSS",
    entry:
      "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
    mood: "Ok"
  },
  {
    date: "11/8/2019",
    concept: "CRUD",
    entry:
      "We talked about Create, Read, Update, Delete (CRUD) and how it's used in almost every Web Application, including Instagram.",
    mood: "Ok"
  },
  {
    date: "11/9/2019",
    concept: "Command Line and Keyboard Shortcut",
    entry: "We talked about the Command Line and Keyboard shortcuts.",
    mood: "Ok"
  },
  {
    date: "11/10/2019",
    concept: "JavaScript",
    entry: "We talked about JavaScript and the different Data types",
    mood: "Ok"
  },
  {
    date: "11/11/2019",
    concept: "JavaScript Functions",
    entry:
      "We talked about calling Functions and passing Parameters/Arguments. We also talked about Pure Functions and returning data from a Function.",
    mood: "Ok"
  }
];

/*
  This function provides a version of the
  raw data in the format that you want
*/
export const useJournalEntries = () => {
  const sortByDate = entries.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  );
  return sortByDate;
};
