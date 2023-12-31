// function.js

const path = require("path");
const fs = require("fs");

exports.handler = async function () {
  console.log(path.resolve(__dirname + "/q1.json"));
  const pathToJson = path.resolve(__dirname + "/q1.json");
  console.log(fs.existsSync(pathToJson));
  const json = fs.readFileSync(pathToJson);

  try {
    return {
      statusCode: 200,
      headers: { "Content-type": "application/json" },
      isBase64Encoded: true,
      body: json.toString("base64"),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.toString(),
    };
  }
};