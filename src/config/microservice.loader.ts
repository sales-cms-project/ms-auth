import { INestMicroservice } from '@nestjs/common';
import { protobufPackage } from '../domain/proto/auth.pb';
import { join } from 'path';
import { Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { ConfigService } from '@nestjs/config';
import { HttpSetup } from './config_loader.interface';
import { configLoaderEnum } from './config.loader';
import { AppContextModule } from '../app_context.module';

export const loadMicroservice = async (): Promise<INestMicroservice> => {
  // TODO: Remove when the following is fixed https://github.com/nestjs/nest/issues/2343
  const appContext =
    await NestFactory.createApplicationContext(AppContextModule);
  const configService = appContext.get<ConfigService>(ConfigService);
  const { host: url } = configService.get<HttpSetup>(configLoaderEnum.HTTP);
  appContext.close();
  // TODO End

  const protoPath = join(
    __dirname,
    './../../node_modules/@sales-cms-project/lib-proto/proto/auth.proto',
  );
  const microservice = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url,
      protoPath,
      package: protobufPackage,
    },
  });
  return microservice;
};
