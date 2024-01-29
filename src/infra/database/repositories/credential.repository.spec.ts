import { Repository } from 'typeorm';
import { CredentialEntity } from '../entities/credential.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { CredentialRepository } from './credential.repository';
import {
  CredentialEntityMock,
  createCredentialEntity,
} from '../../../../test/mocks/infra/database/entity/credential.mock';
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
        .mockResolvedValueOnce(
          createCredentialEntity({ createdAt, updatedAt }),
        );

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

  describe('findOne', () => {
    it('should return null when not found a credential', async () => {
      const result = await credentialRepository.findOne({
        userUuid: 'user_uuid',
      });

      expect(result).toBeNull();
    });

    it('should return a credential model when find a credential', async () => {
      const spy = jest
        .spyOn(credentialEntity, 'findOne')
        .mockResolvedValue(createCredentialEntity());

      const result = await credentialRepository.findOne({
        userUuid: 'user_uuid_str',
      });

      expect(spy).toBeCalledTimes(1);
      expect(result).toBeInstanceOf(CredentialModel);
    });
  });
});
