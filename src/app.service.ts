import { Injectable } from '@nestjs/common';
import { init } from '../scripts/gitOperate.js';
const path = require('path');
const mkdirp = require('mkdirp');
const getDirName = require('path').dirname;
const fs = require('fs');

//创建带有文件夹的文件
function writeFile(path, contents, cb) {
  mkdirp(getDirName(path), function (err) {
    if (err) return cb(err);
    fs.writeFile(path, contents, cb);
  });
}

//生成带有回调函数
function createViews(viewName, ViewContent) {
  writeFile(viewName, ViewContent, function (err) {
    if (err) throw new Error('创建views文件出错');
  });
}

@Injectable()
export class AppService {
  async getHello(id) {
    const res = await init(id);
    const content = path.resolve(
      __dirname,
      '../../online-client/src/components/Welcome/Welcome.tsx',
    );
    console.log(content);
    const pageContent = `import * as React from "react";

    import Button from "../Botton";
    
    const Welcome = (props: { message: string }) => {
      return (
        <div className="welcome-container">
            <div>我是改编后的内容</div>
            <Button/>
        </div>
      );
    };

    export default Welcome;
    `;
    createViews(content, pageContent);
    return {
      success: 'res',
    };
  }
}
