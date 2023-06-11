"use strict";

class AutoCulture {
  constructor() {
    this.utils = new Utils();
  }

  async selectOverview() {
    this.utils.waitForElementToAppear(
      "#overviews_link_hover_menu > div.box.middle.left > div > div > ul > li.subsection.curator.enabled > ul > li.culture_overview > a",
      (element) => {
        element.click();
      }
    );
    await this.utils.timeout(658 + this.utils.generateDelay());
  }

  async confirm() {
    this.utils.waitForElementToAppear("#start_all_celebrations", (element) => {
      element.click();
    });
    await this.utils.timeout(1001 + this.utils.generateDelay());
  }

  async close() {
    this.utils.waitForElementToAppear(
      "body > div.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.ui-draggable.js-window-main-container > div.ui-dialog-titlebar.ui-corner-all.ui-widget-header.ui-helper-clearfix.ui-draggable-handle > button",
      (element) => {
        element.click();
      }
    );
    await this.utils.timeout(1488 + this.utils.generateDelay());
  }

  async selectOption(opt) {
    let num = 1;
    switch (opt) {
      case "Mestský festival":
        num = 1;
        break;
      case "Olympijské hry":
        num = 2;
        break;
      case "Víťazná procesia":
        num = 3;
        break;
      case "Divadelné hry":
        num = 4;
        break;
    }

    this.utils.waitForElementToAppear(
      "#place_celebration_select",
      (element) => {
        element.click();
      }
    );
    await this.utils.timeout(1488 + this.utils.generateDelay());

    this.utils.waitForElementToAppear(
      "#place_celebration_select_list > div > div:nth-child(" + num + ")",
      (element) => {
        element.click();
      }
    );
    await this.utils.timeout(1488 + this.utils.generateDelay());
  }

  async repeatCulture(opt) {
    await this.selectOverview();
    await this.selectOption(opt);
    await this.confirm();
    await this.close();
    console.log("Culture is being runned.");
  }

  async run(opt, time) {
    console.log(time);
    const seconds = this.utils.convertToSeconds(time);
    console.log(seconds);
    this.seconds = seconds;

    await this.repeatCulture(opt);

    let delay =
      this.seconds * 1000 +
      Math.floor(Math.random() * (900000 - 180000) + 120000);
    console.log(delay);
  }
}
