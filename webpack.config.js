module.exports = {
  entry: "./index.js",
  mode: "production",
  target: "webworker",
  output: {
    path: __dirname + "/worker",
    filename: "script.js"
  }
};
