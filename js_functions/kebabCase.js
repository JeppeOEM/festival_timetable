//https://www.geeksforgeeks.org/how-to-convert-a-string-into-kebab-case-using-javascript/
//what kind of crazy person invented Regex?????

const kebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

export default kebabCase;
