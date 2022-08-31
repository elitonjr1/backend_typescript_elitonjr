import { CursoRepositortyInterface } from "@core/providers/data/curso-repository.interface";
import { inject, injectable } from "inversify";
import { CursoEntity } from "../../../../core/entity/curso.entity";
import TYPES from "../../../../types";
import { DeletaCursoDTO, DeletaCursoInterface } from "./deleta-curso.interface";

@injectable()
export class DeletaCursoUseCase implements DeletaCursoInterface {
  private _cursoRepository: CursoRepositortyInterface;

  constructor(
    @inject(TYPES.CursoRepositoryInterface)
    cursoRepository: CursoRepositortyInterface
  ) {
    this._cursoRepository = cursoRepository;
  }

  execute(model: DeletaCursoDTO): CursoEntity[] {
    const result = this._cursoRepository.delete({
      id: model.id,
    });

    return result;
  }
}
