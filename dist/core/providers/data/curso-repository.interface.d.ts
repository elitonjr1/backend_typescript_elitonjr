import { CursoEntity } from "../../../core/entity/curso.entity";
export declare type CursoRepositorySearchParams = {
    descricao?: string;
};
export declare type CursoRepositoryCreateParams = {
    dataInicio: string;
    descricao: string;
};
export interface CursoRepositortyInterface {
    search(model: CursoRepositorySearchParams): CursoEntity[];
    create(model: CursoRepositoryCreateParams): CursoEntity;
}
