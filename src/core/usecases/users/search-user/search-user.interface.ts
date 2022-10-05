import { UserEntity } from "../../../../core/entity/user.entity";

export class SearchUserUseCaseParams {
  id: number;
}

export interface SearchUserInterface {
  execute(model: SearchUserUseCaseParams): UserEntity;
}
