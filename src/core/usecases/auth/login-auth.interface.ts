import { UserEntity } from "../../../core/entity/user.entity";

export class AuthLoginUseCaseParams {
  email: string;
  password: string;
}

export interface AuthLoginInterface {
  execute(model: AuthLoginUseCaseParams): string;
}
