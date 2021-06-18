#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const git = require('simple-git/promise');
const resolve = (dir) => path.resolve(__dirname, dir);
const getDirName = path.dirname;
//创建带有文件夹的文件
function writeFile(path, contents, cb) {
  mkdirp(getDirName(path), function (err) {
    if (err) return cb(err);
    fs.writeFile(path, contents, cb);
  });
}

//生成带有回调函数
function createFiles(viewName, ViewContent) {
  writeFile(viewName, ViewContent, function (err) {
    if (err) throw new Error('创建views文件出错', err);
  });
}
function init() {
  createFiles(resolve(`../src/sugar/code.js`), 'console.log("heool")');
  handleGit();
  console.log('编译成功');
}

async function handleGit() {
  const GIT_REPOSITORY_ROOT = process.cwd();
  simpleGit = git(GIT_REPOSITORY_ROOT);
  await simpleGit.add('.');
  await simpleGit.commit('first commit!');
  await simpleGit.push('origin', 'master');
  console.log('提交成功');
}
module.exports = {
  init,
};
