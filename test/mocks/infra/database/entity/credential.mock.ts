import { CredentialEntity } from '../../../../../src/infra/database/entities/credential.entity';
import { createEntityMockProvider } from '../../../create_mock.helper';

class Mock {
  save(): Promise<CredentialEntity> {
    return Promise.resolve({
      id: 1,
      password: 'password_str',
      isBlocked: false,
      userUuid: 'user_uuid_str',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  findOne(): Promise<CredentialEntity> {
    return Promise.resolve(null);
  }
}

export const CredentialEntityMock = createEntityMockProvider(
  CredentialEntity,
  new Mock(),
);
