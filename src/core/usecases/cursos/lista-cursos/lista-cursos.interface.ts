import { CursoEntity } from "@core/entity/curso.entity";

export class ListaCursoUseCaseDTO {
  descricao: string;
}

export interface ListaCursoByDescriptionInterface {
  execute(model: ListaCursoUseCaseDTO): CursoEntity[];
}

export interface ListaCursoInterface {
  //execute(model: ListaCursoUseCaseDTO): CursoEntity[];
  execute(): CursoEntity[];
}
