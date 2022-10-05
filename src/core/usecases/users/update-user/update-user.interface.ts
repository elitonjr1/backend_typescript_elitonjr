import { UserEntity } from "../../../../core/entity/user.entity";

// todo separar
export class UpdateUserUseCaseParams {
  id: number;
  email: string;
  password: string;
  admin: boolean;
  status: boolean;
}

export interface UpdateUserInterface {
  execute(model: UpdateUserUseCaseParams): UserEntity;
}
