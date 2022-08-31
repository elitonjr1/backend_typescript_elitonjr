import { CursoEntity } from "../../../core/entity/curso.entity";
export declare type CursoRepositorySearchParams = {
    descricao?: string;
};
export declare type CursoRepositoryCreateParams = {
    dataInicio: string;
    descricao: string;
};
export declare type CursoRepositoryAlterParams = {
    id: string;
    dataInicio: string;
    descricao: string;
};
export declare type CursoRepositoryDeleteParams = {
    id: string;
};
export interface CursoRepositortyInterface {
    getAll(): CursoEntity[];
    search(model: CursoRepositorySearchParams): CursoEntity[];
    create(model: CursoRepositoryCreateParams): CursoEntity;
    alter(model: CursoRepositoryAlterParams): CursoEntity;
    delete(model: CursoRepositoryDeleteParams): CursoEntity[];
}
