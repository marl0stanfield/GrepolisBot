"use strict";

class MainUI {
  constructor() {
    this.panel = document.getElementsByClassName(
      "ui_construction_queue instant_buy"
    )[0];
    this.createMainDiv();
    this.addDragFunctionality();
    this.createAutoFarmUI();
  }

  createMainDiv() {
    this.mainDiv = document.createElement("div");
    this.mainDiv.setAttribute("name", "bot-main-div");
    this.mainDiv.style.position = "absolute";
    this.mainDiv.style.left = "0px";
    this.mainDiv.style.top = "0px";
    this.mainDiv.style.width = "300px";
    this.mainDiv.style.height = "500px";
    this.mainDiv.style.backgroundColor = "rgba(0, 0, 10, 0.5)";
    this.mainDiv.style.zIndex = "1000";
    this.mainDiv.style.borderRadius = "10px";
    let parentDiv = this.panel.parentNode;
    parentDiv.insertBefore(this.mainDiv, this.panel);
  }

  addDragFunctionality() {
    let isDragging = false;
    let dragOffsetX = 0;
    let dragOffsetY = 0;

    const startDrag = (event) => {
      isDragging = true;
      dragOffsetX = event.clientX - this.mainDiv.offsetLeft;
      dragOffsetY = event.clientY - this.mainDiv.offsetTop;
    };

    const endDrag = () => {
      isDragging = false;
    };

    const drag = (event) => {
      if (isDragging) {
        this.mainDiv.style.left = event.clientX - dragOffsetX + "px";
        this.mainDiv.style.top = event.clientY - dragOffsetY + "px";
      }
    };

    this.mainDiv.addEventListener("mousedown", startDrag);
    this.mainDiv.addEventListener("mouseup", endDrag);
    this.mainDiv.addEventListener("mousemove", drag);
  }

  createAutoFarmUI() {
    let farm = new FarmUI(this.mainDiv);
    farm.createFarmUI();
    let culture = new CultureUI(this.mainDiv);
    culture.createCultureUI();
  }
}
