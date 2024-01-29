import { CredentialModel } from '../../../domain/models/credential.model';
import { CredentialEntity } from '../entities/credential.entity';

export const convertEntityToModel = (
  entity: CredentialEntity,
): CredentialModel => {
  return new CredentialModel({
    id: entity.id,
    userUuid: entity.userUuid,
    password: entity.password,
    isBlocked: entity.isBlocked,
    createdAt: entity.createdAt,
    updatedAt: entity.updatedAt,
  });
};
