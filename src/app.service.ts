import { Injectable } from '@nestjs/common';
import { init } from '../scripts/gitOperate.js';
@Injectable()
export class AppService {
  async getHello(id) {
    const res = await init(id);
    console.log(res);
    return 'Hello World!haiai';
  }
}
