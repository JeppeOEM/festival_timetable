export default function handler(req, res) {
  console.log(res);
  const fs = require("fs");

  const files = fs.readdirSync("public/img");

  const len = files.length;
  let number = Math.floor(Math.random() * len);

  res.status(200).json({ image: files[number] });
}
