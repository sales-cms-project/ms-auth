import { getRepositoryToken } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

export const createEntityMockProvider = <IMockEntity>(
  entity: EntityClassOrSchema,
  mock: IMockEntity,
) => ({
  provide: getRepositoryToken(entity),
  useValue: mock,
});

export const createMockProvider = (provide: any, mock: any) => ({
  provide,
  useValue: mock,
});

export const createUseClassMockProvider = (provide: any, mock: any) => ({
  provide,
  useClass: mock,
});
