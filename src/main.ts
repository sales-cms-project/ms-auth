import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { protobufPackage } from './domain/proto/auth.pb';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: `localhost:3003`,
      protoPath: join(
        'node_modules/@sales-cms-project/lib-proto/proto/auth.proto',
      ),
      package: protobufPackage,
    },
  });
  await app.listen();
}
bootstrap();
