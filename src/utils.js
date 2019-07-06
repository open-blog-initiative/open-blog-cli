module.exports.createCommandFromQuestion = program => question =>
  program.option(
    `-${question.shortcut}, --${question.name} <type>`,
    question.message
  );

module.exports.getNotAnsweredQuestion = (questions, answers) =>
  questions.filter(question => !answers[question.name]);

module.exports.answersCollector = (questions, program) =>
  questions
    .map(question => question.name)
    .reduce(
      (acc, value) => ({
        ...acc,
        [value]: program[value]
      }),
      {}
    );
