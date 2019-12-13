const JournalComponent = () => {
  return `
  <form action="" class="" id="entryForm">
  <fieldset class="form">
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
        rows="0"
      ></textarea>
    </div>
    <div class="entries">
      <label for="mood">Mood for the day</label><br />
      <select name="mood" id="mood">
        <option value="Happy">Happy</option>
        <option value="Mad">Mad</option>
        <option value="Sad">Sad</option>
        <option value="Frustrated">Frustrated</option>
        <option value="Anxious">Anxious</option>
        <option value="Excited">Excited</option>
        <option value="Furious">Furious</option>
        <option value="Content">Content</option>
        <option value="Feeling Like A Boss">Feeling Like A Boss!</option>
      </select>
    </div>
    <div class="btn">
      <input
        id="submit"
        class="btn-submit"
        type="button"
        value="Submit journal entry  "
      />
      <button id="show-entries" class="btn-submit">Show Entries</button>
      </div>
      </fieldset>
      </form>
  `;
};
export default JournalComponent;
