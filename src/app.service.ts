import { Injectable } from '@nestjs/common';
import { init } from '../scripts/gitOperate.js';
@Injectable()
export class AppService {
  getHello(id): string {
    const res = init(id);
    // console.log(res);
    return 'Hello World!haiai';
  }
}
