import { Controller } from '@nestjs/common';
import {
  AUTH_SERVICE_NAME,
  AuthServiceController,
  TokenDto,
} from './domain/proto/auth.pb';
import { Observable } from 'rxjs';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController implements AuthServiceController {
  @GrpcMethod(AUTH_SERVICE_NAME)
  signup(): TokenDto {
    return {
      token: 'new Token',
    };
  }

  signin(): TokenDto | Promise<TokenDto> | Observable<TokenDto> {
    throw new Error('Method not implemented.');
  }

  @GrpcMethod(AUTH_SERVICE_NAME)
  deleteAuthCredential(): void {
    console.log('foiii');
  }

  changeAuthCredential(): TokenDto | Promise<TokenDto> | Observable<TokenDto> {
    throw new Error('Method not implemented.');
  }

  checkToken(): void {
    throw new Error('Method not implemented.');
  }

  restartToken(): TokenDto | Promise<TokenDto> | Observable<TokenDto> {
    throw new Error('Method not implemented.');
  }
}
