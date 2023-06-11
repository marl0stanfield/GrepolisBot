"use strict";

class Utils {
  timeout(delay) {
    return new Promise((r) => setTimeout(r, delay));
  }

  generateDelay() {
    return Math.floor(Math.random() * (601 - 300) + 300);
  }

  convertToSeconds(timeString) {
    const [hours, minutes, seconds] = timeString.split(":");
    const totalSeconds =
      parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    return totalSeconds;
  }

  waitForElementToAppear(selector, callback, interval = 100, maxAttempts = 10) {
    var attempts = 0;
    var timer = setInterval(function () {
      attempts++;
      var element = document.querySelector(selector);
      if (element || attempts >= maxAttempts) {
        clearInterval(timer);
        if (element) {
          callback(element);
        } else {
          console.log("Element not found within the specified time.");
        }
      }
    }, interval);
  }
}
