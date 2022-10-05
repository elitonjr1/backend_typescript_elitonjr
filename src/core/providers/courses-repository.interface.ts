import { UserEntity } from "../../core/entity/user.entity";
import { CourseEntity } from "../../core/entity/course.entity";

export type CourseRespositorySearchParams = {
  id?: number;
};

export type CourseRespositoryCreateParams = {
  dataInicio: string;
  descricao: string;
  status: boolean;
  students?: number[];
};

export type CourseRespositoryUpdateParams = {
  id: number;
  descricao?: string;
  status?: boolean;
  students?: number[];
};

export type CourseRespositoryDeleteParams = {
  id: number;
};

export interface CourseRepositoryInterface {
  list(model: CourseRespositorySearchParams): CourseEntity[];
  search(model: CourseRespositorySearchParams): CourseEntity;
  create(model: CourseRespositoryCreateParams): CourseEntity;
  update(model: CourseRespositoryUpdateParams): CourseEntity;
  delete(model: CourseRespositoryDeleteParams): any;
}
