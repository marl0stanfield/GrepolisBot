"use strict";
class FarmUI {
  constructor(mainDiv) {
    this.mainDiv = mainDiv;
  }

  createHeading() {
    const heading = document.createElement("h3");
    heading.textContent = "AutoFarm";
    heading.style.color = "green";
    return heading;
  }

  createDropDown() {
    const dropDown = document.createElement("select");
    dropDown.setAttribute("name", "farm-drop-down");

    const optionValues = [
      "00:05:00",
      "00:10:00",
      "00:20:00",
      "00:40:00",
      "01:30:00",
      "03:00:00",
      "04:00:00",
      "08:00:00",
    ];

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
      let af = new AutoFarm();
      const dropDown = document.querySelector("select[name='farm-drop-down']");
      const selectedValue = dropDown.value;
      af.run(selectedValue);
    });

    return button;
  }

  createAutoFarmDiv() {
    const autoFarmDiv = document.createElement("div");
    autoFarmDiv.className = "auto-farm";
    return autoFarmDiv;
  }

  createFarmUI() {
    const heading = this.createHeading();
    const dropDown = this.createDropDown();
    const button = this.createButton();
    const autoFarmDiv = this.createAutoFarmDiv();

    autoFarmDiv.appendChild(dropDown);
    autoFarmDiv.appendChild(button);

    this.mainDiv.appendChild(heading);
    this.mainDiv.appendChild(autoFarmDiv);
  }
}
