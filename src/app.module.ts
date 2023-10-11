import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { InfraModule } from './infra/infra.module';

@Module({
  imports: [ConfigModule, InfraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
