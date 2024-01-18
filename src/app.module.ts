import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { InfraModule } from './infra/infra.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule, InfraModule, AuthModule],
})
export class AppModule {}
