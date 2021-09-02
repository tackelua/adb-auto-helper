import test from "./index.js";
import KEYS from "./keycode.js";

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

const run = async () => {
  // test.getNotifications().then(n => console.log(n));
  //   test.inputKeycode(KEYS.KEYCODE_POWER);
  //
  //   await test.inputText("h");
  //   await test.inputText("http://gith.cf/");
  //   await test.inputKeycode(KEYS.KEYCODE_ENTER);
  //
  //   await test.startApp("com.raymarine.axiom.si");
  //   await test.inputKeycode(KEYS.KEYCODE_HOME);

  //
  await test.screenshot("screenshot.png");
};

run();
