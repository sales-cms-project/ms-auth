import {
  AUTH_SERVICE_NAME,
  AuthServiceController,
  TokenDto,
} from './domain/proto/auth.pb';
import { Observable } from 'rxjs';
import { GrpcMethod, GrpcService } from '@nestjs/microservices';

type AppControllerDefault = Pick<
  AuthServiceController,
  'signup' | 'deleteAuthCredential' | 'signin'
>;

//@Controller()
@GrpcService(AUTH_SERVICE_NAME)
export class AppController implements AppControllerDefault {
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
}
