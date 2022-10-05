import { CourseEntity } from "../../../../core/entity/course.entity";
import { UserEntity } from "../../../../core/entity/user.entity";

// todo separar
export class UpdateCourseUseCaseParams {
  id: number;
  descricao: string;
  status: boolean;
  students?: number[];
}

export interface UpdateCourseInterface {
  execute(model: UpdateCourseUseCaseParams): CourseEntity;
}
