import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { port } from './config/env.service';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port , ()=>{
    console.log(`server is running on port ${port}`)
  });
}
bootstrap();
