export interface ICredential {
  id: number;
  userUuid: string;
  password: string;
  isBlocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class CredentialModel implements ICredential {
  private _id: number;
  private _userUuid: string;
  private _password: string;
  private _isBlocked: boolean;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor({
    id,
    userUuid,
    password,
    isBlocked,
    createdAt,
    updatedAt,
  }: ICredential) {
    this._id = id;
    this._userUuid = userUuid;
    this._password = password;
    this._isBlocked = isBlocked;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  get id(): number {
    return this._id;
  }

  get userUuid(): string {
    return this._userUuid;
  }

  get password(): string {
    return this._password;
  }

  get isBlocked(): boolean {
    return this._isBlocked;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }
}
