import { Injectable } from '@nestjs/common';
import { init } from '../scripts/gitOperate.js';
@Injectable()
export class AppService {
  getHello(): string {
    init();
    return 'Hello World!haiai';
  }
}
