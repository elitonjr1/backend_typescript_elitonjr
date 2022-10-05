import { CourseEntity } from "../../../../core/entity/course.entity";
import { UserEntity } from "../../../../core/entity/user.entity";

export class CreateCourseUseCaseParams {
  descricao: string;
  dataInicio: string;
  status: boolean;
  students?: number[];
}

export interface CreateCourseInterface {
  execute(model: CreateCourseUseCaseParams): CourseEntity;
}
