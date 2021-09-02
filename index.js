import cmd from "./cmd.js";
import KEYS from "./keycode.js";

const getNotifications = async () =>
  (await cmd("adb shell dumpsys notification --noredact"))
    .replace(/\r/g, "")
    .split("Notification List:\n    ")[1]
    .split("\n  m")[0]
    .split("NotificationRecord")
    .filter((i) => i)
    .map((i) => "NotificationRecord" + i);
// .map(
//   record =>
//     record
//       .split("extras={")
//       .splice(1)
//       .map(e =>
//         e
//           .split(`\n      }`)[0]
//           .split("\n")
//           .filter(i => i)
//           .map(i => i.trim())
//       )[0]
// );

const inputKeycode = (keycode) => cmd(`adb shell input keyevent ${keycode}`);

const inputText = (text) => cmd(`adb shell input text $(echo "${text}" | sed 's/ /\%s/g')`);

const startApp = (packageName) =>
  cmd(`adb shell monkey --pct-syskeys 0 -p ${packageName} -c android.intent.category.LAUNCHER 1`);

const screenshot = (path) => cmd(`adb exec-out screencap -p > ${path}`);

export default {
  getNotifications,
  inputKeycode,
  inputText,
  startApp,
  screenshot,
};
