const JournalComponent = (selectMood, filterMood) => {
  return `
  <form action="" class="" id="entryForm">
    <fieldset class="form">
     <input id="hidden-input" type="hidden">
      <div class="entries">
        <label for="journal-date">Date of entry</label><br />
        <input type="date" name="journal-date" id="journal-date" />
      </div>
      <div class="entries">
        <label for="concepts-covered">Concepts Covered</label><br />
        <input type="text" name="concepts-covered" id="concepts-covered" />
      </div>
      <div class="entries">
        <label for="journal-entry">Journal Entry</label><br />
        <textarea
          name="journal-entry"
          id="journal-entry"
          cols="30"
          rows="4">
          </textarea>
      </div>
      <div class="entries">
        <label for="mood">Mood for the day</label><br />
        <select name="mood" id="select-mood">
          <option value="0">Please Choose A Mood.....</option>
          ${selectMood
            .map(mood => `<option value="${mood}">${mood}</option>`)
            .join("")}
        </select>
      </div>
      <div class="btn">
        <input
          id="submit"
          class="btn-submit"
          type="button"
          value="Submit Journal Entry  "
        />
        <button id="show-entries" class="btn-submit">Show Entries</button>
      </div>
    </fieldset>
  </form>
  `;
};
export default JournalComponent;
