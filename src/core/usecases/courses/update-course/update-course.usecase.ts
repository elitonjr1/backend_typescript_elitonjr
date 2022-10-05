import "reflect-metadata";
import { inject, injectable } from "inversify";
import {
  UpdateCourseInterface,
  UpdateCourseUseCaseParams,
} from "./update-course.interface";
import { BusinessError } from "../../../erros/business.error";
import { CourseRepositoryInterface } from "@core/providers/courses-repository.interface";
import TYPES from "../../../../types";

@injectable()
export class UpdateCourseUseCase implements UpdateCourseInterface {
  private _CourseRepository: CourseRepositoryInterface;

  constructor(
    @inject(TYPES.CourseRepositoryInterface)
    CourseRepository: CourseRepositoryInterface
  ) {
    this._CourseRepository = CourseRepository;
  }

  execute(model: any): any {
    const result = this._CourseRepository.update(model);

    return result;
  }
}
