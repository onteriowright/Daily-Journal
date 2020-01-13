import { FilterComponent } from "./FilterComponent.js";
import { UseMoods } from "./MoodDataProvider.js";

export const FilterListComponent = () => {
  const eventHub = document.querySelector(".main");
  const targetElement = document.querySelector("#filter");

  const renderData = moodCollection => {
    targetElement.innerHTML = `
      ${FilterComponent(moodCollection)}
    `;
  };

  const useMoods = UseMoods();
  renderData(useMoods);
};
