import { CursoEntity } from "../../../../core/entity/curso.entity";

export class DeletaCursoDTO {
  id: string;
}

export interface DeletaCursoInterface {
  execute(model: DeletaCursoDTO): CursoEntity[];
}
