import { CursoRepositortyInterface } from "@core/providers/data/curso-repository.interface";
import { inject, injectable } from "inversify";
import { CursoEntity } from "../../../../core/entity/curso.entity";
import TYPES from "../../../../types";
import {
  AlteraCursoInterface,
  AlteraCursoInterfaceDTO,
} from "./altera-curso.interface";

@injectable()
export class AlteraCursoUseCase implements AlteraCursoInterface {
  private _cursoRepository: CursoRepositortyInterface;

  constructor(
    @inject(TYPES.CursoRepositoryInterface)
    cursoRepository: CursoRepositortyInterface
  ) {
    this._cursoRepository = cursoRepository;
  }

  execute(model: AlteraCursoInterfaceDTO): CursoEntity {
    const result = this._cursoRepository.alter({
      id: model.id,
      dataInicio: model.dataInicio,
      descricao: model.descricao,
    });

    return result;
  }
}
