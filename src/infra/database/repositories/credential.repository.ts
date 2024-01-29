import { InjectRepository } from '@nestjs/typeorm';
import { CredentialModel } from '../../../domain/models/credential.model';
import { CredentialEntity } from '../entities/credential.entity';
import { Repository } from 'typeorm';
import { convertEntityToModel } from '../mappers/credential.mapper';

interface ICreateOptions {
  userUuid: string;
  password: string;
}

interface IFindOneOptions {
  userUuid: string;
}

export interface ICredentialRepository {
  create(options: ICreateOptions): Promise<CredentialModel>;
  findOne(options: IFindOneOptions): Promise<CredentialModel | null>;
}

export class CredentialRepository implements ICredentialRepository {
  constructor(
    @InjectRepository(CredentialEntity)
    private readonly credentialEntity: Repository<CredentialEntity>,
  ) {}

  async create({
    userUuid,
    password,
  }: ICreateOptions): Promise<CredentialModel> {
    const entity = await this.credentialEntity.save({ userUuid, password });
    return convertEntityToModel(entity);
  }

  async findOne({ userUuid }: IFindOneOptions): Promise<CredentialModel> {
    const entity = await this.credentialEntity.findOne({
      where: { userUuid },
    });

    return entity ? convertEntityToModel(entity) : null;
  }
}
