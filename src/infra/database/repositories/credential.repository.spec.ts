import { Repository } from 'typeorm';
import { CredentialEntity } from '../entities/credential.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { CredentialRepository } from './credential.repository';
import { CredentialEntityMock } from '../../../../test/mocks/infra/database/entity/credential.mock';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CredentialModel } from '../../../domain/models/credential.model';

describe('CredentialRepository', () => {
  let credentialEntity: Repository<CredentialEntity>;
  let credentialRepository: CredentialRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CredentialRepository, CredentialEntityMock],
    }).compile();

    credentialEntity = module.get(getRepositoryToken(CredentialEntity));
    credentialRepository = module.get(CredentialRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a valid credential and returns a CredentialModel', async () => {
      const createdAt = new Date('2024-01-29T00:00');
      const updatedAt = new Date('2024-01-29T00:01');
      const credentialEntitySpy = jest
        .spyOn(credentialEntity, 'save')
        .mockImplementationOnce(() => {
          const entity = new CredentialEntity();
          entity.id = 1;
          entity.userUuid = 'user_uuid_str';
          entity.password = 'password_str';
          entity.isBlocked = false;
          entity.createdAt = createdAt;
          entity.updatedAt = updatedAt;
          return Promise.resolve(entity);
        });

      const sut = {
        userUuid: 'user_uuid_str',
        password: 'password_str',
      };

      const response = await credentialRepository.create(sut);

      expect(credentialEntitySpy).toBeCalledWith(sut);
      expect(response).toBeInstanceOf(CredentialModel);
      expect(response.id).toBe(1);
      expect(response.password).toBe(sut.password);
      expect(response.userUuid).toBe(sut.userUuid);
      expect(response.isBlocked).toBe(false);
    });
  });
});
