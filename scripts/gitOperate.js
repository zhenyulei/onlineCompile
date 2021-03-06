#!/usr/bin/env node
// const path = require('path');
// const fs = require('fs');
// const mkdirp = require('mkdirp');
// const simpleGit = require('simple-git');
// const options = {
//   baseDir: process.cwd(),
//   binary: 'git',
//   maxConcurrentProcesses: 6,
// };

// const resolve = (dir) => path.resolve(__dirname, dir);
// const getDirName = path.dirname;
// //创建带有文件夹的文件
// function writeFile(path, contents, cb) {
//   mkdirp(getDirName(path), function (err) {
//     if (err) return cb(err);
//     fs.writeFile(path, contents, cb);
//   });
// }

// //生成带有回调函数
// function createFiles(viewName, ViewContent) {
//   writeFile(viewName, ViewContent, function (err) {
//     if (err) throw new Error('创建views文件出错', err);
//   });
// }
// function init() {
//   createFiles(resolve(`../src/sugar/code.js`), 'console.log("heool")');
//   handleGit();
//   console.log('编译成功');
// }

// async function handleGit() {
//   const git = simpleGit(options)
//     .addConfig('user.name', 'zhenyulei')
//     .addConfig('user.email', 'yulei20080106@126.com');
//   await git.add('.');
//   await git.commit('first commit!');
//   await git.push('master');
//   console.log('提交成功');
// }

var child_process = require('child_process');

const argv = process.argv;

const msg = argv[2];
function init() {
  var cmd = `git add . && git commit -m 'demo' && git push`;
  child_process.exec(cmd, function (error, stdout, stderr) {
    console.log('error:' + error);
    console.log('stderr:' + stderr);
  });
}

module.exports = {
  init,
};
