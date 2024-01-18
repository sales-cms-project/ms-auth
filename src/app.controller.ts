import {
  AUTH_SERVICE_NAME,
  AuthServiceController,
  TokenDto,
} from './domain/proto/auth.pb';
import { Observable } from 'rxjs';
import { GrpcMethod } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';

type AppControllerDefault = Pick<
  AuthServiceController,
  'signup' | 'deleteAuthCredential' | 'signin'
>;

@Controller()
export class AppController implements AppControllerDefault {
  @GrpcMethod(AUTH_SERVICE_NAME)
  signup(): TokenDto {
    return {
      token: 'new Token s',
    };
  }

  signin(): TokenDto | Promise<TokenDto> | Observable<TokenDto> {
    throw new Error('Method not implemented.');
  }

  @GrpcMethod(AUTH_SERVICE_NAME)
  deleteAuthCredential(): void {
    console.log('foiii');
  }
}
