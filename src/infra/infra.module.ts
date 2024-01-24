import { Global, Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CryptographyModule } from './cryptography/cryptography.module';

@Global()
@Module({
  imports: [DatabaseModule, CryptographyModule],
  exports: [DatabaseModule, CryptographyModule],
})
export class InfraModule {}
