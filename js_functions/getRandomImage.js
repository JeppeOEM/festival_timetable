function getRandomImage() {
  const files = fs.readdirSync("public/img");
  const getImg = files[Math.floor(Math.random(files.length))];
  return getImg;
}

export default getRandomImage;
