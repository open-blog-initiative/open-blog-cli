const program = require("commander");
const { version, description } = require("../package.json");
const inquirer = require("enquirer");
const questions = require("./question");
const actions = require("./actions");
const {
  createCommandFromQuestion,
  getNotAnsweredQuestion,
  answersCollector
} = require("./utils");

program.version(version).description(description);

questions.forEach(createCommandFromQuestion(program));

program.parse(process.argv);

const tagAnswers = answersCollector(questions, program);

inquirer
  .prompt(getNotAnsweredQuestion(questions, tagAnswers))
  .then(answers => actions({ ...tagAnswers, ...answers }))
  .then(() => console.log("done"))
  .catch(console.log);
