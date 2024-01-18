import {
  AUTH_SERVICE_NAME,
  AuthServiceController,
  TokenDto,
} from '../../domain/proto/auth.pb';
import { GrpcMethod } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';

type AppControllerDefault = Pick<AuthServiceController, 'signup'>;

@Controller()
export class AuthController implements AppControllerDefault {
  @GrpcMethod(AUTH_SERVICE_NAME)
  async signup(): Promise<TokenDto> {
    return {
      token: 'new Token ${DATE}',
    };
  }
}
