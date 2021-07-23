import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const path = require('path');
import * as serveStatic from 'serve-static';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    '/',
    serveStatic(path.resolve(__dirname, '../public'), {
      maxAge: '1d',
      extensions: ['html', 'jpg', 'jpeg', 'png', 'gif'],
    }),
  );
  await app.listen(3001);
}
bootstrap();
