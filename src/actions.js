const { existsSync, mkdirSync, writeFileSync } = require("fs");
const path = require("path");

module.exports = answers => {
  createDirectory(answers);
  createArticle(answers);
};

const createDirectory = answers =>
  mkdirp(buildArticleDirectory(answers.author));

const createArticle = answers =>
  writeFileSync(
    buildArticlePath(answers.author, answers.title),
    markdownTemplate(answers),
    "UTF-8"
  );

const buildArticleDirectory = author => path.join("../blog/posts/", author);
const buildArticlePath = (author, title) =>
  path.join(__dirname, buildArticleDirectory(author), title + ".md");

const mkdirp = path1 =>
  path1.split(path.sep).reduce((prevPath, folder) => {
    const currentPath = path.join(prevPath, folder);
    if (!existsSync(currentPath)) {
      mkdirSync(currentPath);
    }
    return currentPath;
  }, __dirname);

const markdownTemplate = answers =>
  `---
lang: ${answers.lang}
author: ${answers.author}
pseudo: pseudonyme
github_profile: ${answers.github}
twitter_profile: my twitter profile
date: ${new Date().toISOString().slice(0, 10)}
title: ${answers.title}
canonical: https://myurl.com/path-to-article
description: my description
hero: ./assets/lazy-load.jpg
tags:
  - my tag
---
`;
