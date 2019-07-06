module.exports = [
  {
    type: "input",
    name: "author",
    message: "What is your complete name ?",
    shortcut: "a"
  },
  {
    type: "input",
    name: "github",
    message: "What is your github handle ?",
    shortcut: "g"
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your blog post ?",
    shortcut: "t"
  },
  {
    type: "select",
    name: "lang",
    message: "In which language do you want to publish your blog post ?",
    choices: ["fr", "en"],
    shortcut: "l"
  }
];
