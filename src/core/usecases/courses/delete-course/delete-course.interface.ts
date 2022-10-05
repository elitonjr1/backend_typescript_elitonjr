import { CourseEntity } from "../../../../core/entity/course.entity";

export class DeleteCourseUseCaseParams {
  id: number;
}

export interface DeleteCourseInterface {
  execute(model: DeleteCourseUseCaseParams): CourseEntity;
}
