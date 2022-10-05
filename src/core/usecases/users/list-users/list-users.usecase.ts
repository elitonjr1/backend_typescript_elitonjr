import "reflect-metadata";
import { inject, injectable } from "inversify";
import { ListUsersInterface } from "./list-users.interface";
import { BusinessError } from "../../../erros/business.error";
import { UsersRepositoryInterface } from "@core/providers/users.repository.interface";
import TYPES from "../../../../types";

@injectable()
export class ListUsersUseCase implements ListUsersInterface {
  private _UserRepository: UsersRepositoryInterface;

  constructor(
    @inject(TYPES.UsersRepositoryInterface)
    UserRepository: UsersRepositoryInterface
  ) {
    this._UserRepository = UserRepository;
  }

  execute(filter: any): any[] {
    const result = this._UserRepository.list({});

    return result;
  }
}
