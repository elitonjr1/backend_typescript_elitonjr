import { inject, injectable } from "inversify";
import {
  CriaCursoInterface,
  CriaCursoUseCaseDTO,
} from "./cria-curso.interface";
import { CursoEntity } from "../../../../core/entity/curso.entity";
import TYPES from "../../../../types";
import { CursoRepositortyInterface } from "../../../../core/providers/data/curso-repository.interface";
import { uuid } from "uuidv4";

@injectable()
export class CriaCursoUseCase implements CriaCursoInterface {
  private _cursoRepository: CursoRepositortyInterface;

  constructor(
    @inject(TYPES.CursoRepositoryInterface)
    cursoRepository: CursoRepositortyInterface
  ) {
    this._cursoRepository = cursoRepository;
  }

  execute(model: CriaCursoUseCaseDTO): CursoEntity {
    const result = this._cursoRepository.create({
      dataInicio: model.dataInicio,
      descricao: model.descricao,
    });

    return result;
  }
}
