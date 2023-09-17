"use strict";
class CultureUI {
  constructor(mainDiv) {
    this.mainDiv = mainDiv;
  }

  createHeading() {
    const heading = document.createElement("h3");
    heading.textContent = "AutoCulture";
    heading.style.color = "Yellow";
    return heading;
  }

  createDropDown(optionValues, name) {
    const dropDown = document.createElement("select");
    dropDown.setAttribute("name", name);

    for (let i = 0; i < optionValues.length; i++) {
      const option = document.createElement("option");
      option.text = optionValues[i];
      dropDown.appendChild(option);
    }

    return dropDown;
  }

  createButton() {
    const button = document.createElement("button");
    button.textContent = "Start";

    button.addEventListener("click", function () {
      let ac = new AutoCulture();
      const dropDown = document.querySelector(
        "select[name='culture-drop-down']"
      );
      const optDropDown = document.querySelector(
        "select[name='option-drop-down']"
      );
      const selectedValue = dropDown.value;
      const selectedOption = optDropDown.value;
      console.log(selectedOption);
      ac.run(selectedOption, selectedValue);
    });

    return button;
  }

  createAutoCultureDiv(name) {
    const autoFarmDiv = document.createElement("div");
    autoFarmDiv.className = name;
    return autoFarmDiv;
  }

  createCultureUI() {
    const optionValues = [
      "Mestský festival",
      "Olympijské hry",
      "Víťazná procesia",
      "Divadelné hry",
    ];

    const optionValues1 = [
      "01:00:00",
      "02:00:00",
      "04:00:00",
      "08:00:00",
      "10:00:00",
      "11:00:00",
      "12:00:00",
    ];

    const heading = this.createHeading();
    const dropDown = this.createDropDown(optionValues, "option-drop-down");
    const dropDown1 = this.createDropDown(optionValues1, "culture-drop-down");
    const button = this.createButton();
    const autoCultureDiv = this.createAutoCultureDiv("auto-culture-options");
    const autoCultureDiv1 = this.createAutoCultureDiv("auto-culture-timer");

    autoCultureDiv.appendChild(dropDown);

    autoCultureDiv1.appendChild(dropDown1);
    autoCultureDiv1.appendChild(button);

    this.mainDiv.appendChild(heading);
    this.mainDiv.appendChild(autoCultureDiv);
    this.mainDiv.appendChild(autoCultureDiv1);
  }
}
