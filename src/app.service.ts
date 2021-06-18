import { Injectable } from '@nestjs/common';
import { init } from '../scripts/gitOperate.js';
@Injectable()
export class AppService {
  getHello(id): string {
    init(id);
    return 'Hello World!haiai';
  }
}
