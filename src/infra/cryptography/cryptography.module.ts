import { Module, Provider } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configLoaderEnum } from '../../config/config.loader';
import { ICryptographyConfig } from '../../config/config_loader.interface';
import { BcryptAdapter } from './bcrypt.adapter';
import { CRYPTOGRAPHY_KEY } from './cryptography.protocol';

const CryptographyAdapter: Provider = {
  provide: CRYPTOGRAPHY_KEY,
  useFactory: (configService: ConfigService) => {
    const { salt } = configService.get<ICryptographyConfig>(
      configLoaderEnum.CRYPTOGRAPHY,
    );
    return new BcryptAdapter(salt);
  },
  inject: [ConfigService],
};

@Module({
  imports: [ConfigModule],
  providers: [CryptographyAdapter],
  exports: [CryptographyAdapter],
})
export class CryptographyModule {}
