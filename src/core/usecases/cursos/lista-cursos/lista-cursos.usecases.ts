import { CursoEntity } from "@core/entity/curso.entity";
import { CursoRepositortyInterface } from "@core/providers/data/curso-repository.interface";
import { inject, injectable } from "inversify";
import TYPES from "../../../../types";
import { CriaCursoUseCaseDTO } from "../cria-cursos/cria-curso.interface";
import { ListaCursoInterface } from "./lista-cursos.interface";

@injectable()
export class ListaCursoUseCase implements ListaCursoInterface {
  private _cursoRepository: CursoRepositortyInterface;

  constructor(
    @inject(TYPES.CursoRepositoryInterface)
    cursoRepository: CursoRepositortyInterface
  ) {
    this._cursoRepository = cursoRepository;
  }

  // execute(model: CriaCursoUseCaseDTO): CursoEntity[] {
  //   const result = this._cursoRepository.search({
  //     descricao: model.descricao,
  //   });

  execute(model?: CriaCursoUseCaseDTO): CursoEntity[] {
    let result = [];

    if (model) {
      result = this._cursoRepository.search({
        descricao: model.descricao,
      });
    } else {
      result = this._cursoRepository.getAll();
    }

    return result;
  }
}
