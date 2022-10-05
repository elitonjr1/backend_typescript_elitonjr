import "reflect-metadata";
import { inject, injectable } from "inversify";
import {
  DeleteCourseInterface,
  DeleteCourseUseCaseParams,
} from "./delete-course.interface";
import { CourseEntity } from "../../../../core/entity/course.entity";
import { BusinessError } from "../../../erros/business.error";
import { CourseRepositoryInterface } from "@core/providers/courses-repository.interface";
import TYPES from "../../../../types";

@injectable()
export class DeleteCourseUseCase implements DeleteCourseInterface {
  private _CourseRepository: CourseRepositoryInterface;

  constructor(
    @inject(TYPES.CourseRepositoryInterface)
    CourseRepository: CourseRepositoryInterface
  ) {
    this._CourseRepository = CourseRepository;
  }

  execute(model: any): any {
    const result = this._CourseRepository.delete(model);

    return result;
  }
}
