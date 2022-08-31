import { CursoEntity } from "../../../core/entity/curso.entity";

export type CursoRepositorySearchParams = {
  descricao?: string;
};

export type CursoRepositoryCreateParams = {
  dataInicio: string;
  descricao: string;
};

export interface CursoRepositortyInterface {
  getAll(): CursoEntity[];

  search(model: CursoRepositorySearchParams): CursoEntity[];

  create(model: CursoRepositoryCreateParams): CursoEntity;
}
