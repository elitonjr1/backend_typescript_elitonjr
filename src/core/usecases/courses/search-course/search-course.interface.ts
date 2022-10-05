import { CourseEntity } from "../../../../core/entity/course.entity";

export class SearchCourseUseCaseParams {
  id: number;
}

export interface SearchCourseInterface {
  execute(model: SearchCourseUseCaseParams): CourseEntity;
}
