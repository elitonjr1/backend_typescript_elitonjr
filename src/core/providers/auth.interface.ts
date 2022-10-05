import { UserEntity } from "../entity/user.entity";

export type AuthLoginParams = {
  user: string;
  password: string;
};

export interface AuthInterface {
  login(model: AuthLoginParams): UserEntity;
}
