import { CursoEntity } from "../../../core/entity/curso.entity";

export type CursoRepositorySearchParams = {
  descricao?: string;
};

export type CursoRepositoryCreateParams = {
  dataInicio: string;
  descricao: string;
};

export type CursoRepositoryAlterParams = {
  id: string;
  dataInicio: string;
  descricao: string;
};

export type CursoRepositoryDeleteParams = {
  id: string;
};

export interface CursoRepositortyInterface {
  getAll(): CursoEntity[];

  search(model: CursoRepositorySearchParams): CursoEntity[];

  create(model: CursoRepositoryCreateParams): CursoEntity;

  alter(model: CursoRepositoryAlterParams): CursoEntity;

  delete(model: CursoRepositoryDeleteParams): CursoEntity[];
}
