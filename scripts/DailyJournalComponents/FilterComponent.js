export const FilterComponent = filterMood => {
  return `
  <fieldset>
    <legend class="legend">Filter Journal Entries by Mood</legend>
    <div>
      ${filterMood
        .map(
          mood => `
            <input id="radio-${mood}" type="radio" value="${mood}" name="mood">
            <label for="${mood}">${mood}</label>
          `
        )
        .join("")}
    </div>  
  </fieldset>
  `;
};
