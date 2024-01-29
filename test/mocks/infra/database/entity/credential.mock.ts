import { CredentialEntity } from '../../../../../src/infra/database/entities/credential.entity';
import { createEntityMockProvider } from '../../../create_mock.helper';

interface ICreateCredentialEntityOptions {
  createdAt?: Date;
  updatedAt?: Date;
}
export const createCredentialEntity = ({
  createdAt,
  updatedAt,
}: ICreateCredentialEntityOptions = {}): CredentialEntity => {
  const entity = new CredentialEntity();
  entity.id = 1;
  entity.userUuid = 'user_uuid_str';
  entity.password = 'password_str';
  entity.isBlocked = false;
  entity.createdAt = createdAt ?? new Date();
  entity.updatedAt = updatedAt ?? new Date();
  return entity;
};

class Mock {
  save(): Promise<CredentialEntity> {
    return Promise.resolve(createCredentialEntity());
  }

  findOne(): Promise<CredentialEntity> {
    return Promise.resolve(null);
  }
}

export const CredentialEntityMock = createEntityMockProvider(
  CredentialEntity,
  new Mock(),
);
