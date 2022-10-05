import { UserEntity } from "../../../../core/entity/user.entity";

export class DeleteUserUseCaseParams {
  id: number;
}

export interface DeleteUserInterface {
  execute(model: DeleteUserUseCaseParams): UserEntity;
}
