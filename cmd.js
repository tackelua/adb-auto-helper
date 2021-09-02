import { exec } from "child_process";

const cmd = async (command) =>
  new Promise((resolve, reject) => {
    process.env.DEBUG && console.log(command);
    exec(command, (err, stdout, stderr) => {
      process.env.DEBUG && err && console.log("error\n-----\n", err);
      process.env.DEBUG && stderr && console.log("stderr\n------\n", stderr);
      process.env.DEBUG && stdout && console.log("stdout\n------\n", stdout);

      if (err) {
        return reject(err);
      }
      if (stdout) {
        return resolve(stdout);
      }
      if (stderr) {
        return reject(stderr);
      }
      resolve(stdout);
    });
  });

export default cmd;
