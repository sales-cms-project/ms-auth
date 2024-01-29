import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../../../db/orm.config';
import { CredentialEntity } from './entities/credential.entity';
import { CredentialRepository } from './repositories/credential.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([CredentialEntity]),
  ],
  providers: [CredentialRepository],
  exports: [TypeOrmModule, CredentialRepository],
})
export class DatabaseModule {}
