const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.json());
const PORT = 3002;

let files = {
  A: [],
  B: [],
  C: [],
  D: [],
};

app.post("/dashboard/input", (req, res) => {
  const number = req.body.number * 1;
  if (number < 1 || number > 25) {
    return res.status(400).send("Number must be between 1 and 25");
  }

  const result = number * 7;
  let fileName;

  if (Object.values(files).every((arr) => arr.length > 0)) {
    return res
      .status(400)
      .send("All files have at least one number, no new numbers can be added.");
  }

  if (result > 140 && files.A.length === 0) {
    files.A.push(result);
    fs.writeFileSync("A.txt", result.toString());
    fileName = "A.txt";
  } else if (result > 100 && files.B.length === 0) {
    files.B.push(result);
    fs.writeFileSync("B.txt", result.toString());
    fileName = "B.txt";
  } else if (result > 60 && files.C.length === 0) {
    files.C.push(result);
    fs.writeFileSync("C.txt", result.toString());
    fileName = "C.txt";
  } else if (files.D.length === 0) {
    files.D.push(result);
    fs.writeFileSync("D.txt", result.toString());
    fileName = "D.txt";
  } else {
    return res
      .status(400)
      .send("No suitable file found or all files already have entries.");
  }

  res.send(
    `Number ${number} multiplied by 7 is ${result} stored in ${fileName}`
  );
});

app.get("/files", (req, res) => {
  const contents = {
    A: fs.existsSync("A.txt") ? fs.readFileSync("A.txt", "utf-8") : "",
    B: fs.existsSync("B.txt") ? fs.readFileSync("B.txt", "utf-8") : "",
    C: fs.existsSync("C.txt") ? fs.readFileSync("C.txt", "utf-8") : "",
    D: fs.existsSync("D.txt") ? fs.readFileSync("D.txt", "utf-8") : "",
  };

  res.send(contents);
});

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
