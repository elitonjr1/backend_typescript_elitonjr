import { CursoEntity } from "../../../../core/entity/curso.entity";

export class CriaCursoUseCaseDTO {
  dataInicio: string;
  descricao: string;
}

export interface CriaCursoInterface {
  execute(model: CriaCursoUseCaseDTO): CursoEntity;
}
