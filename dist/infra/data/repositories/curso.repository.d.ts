import { CursoEntity } from "../../../core/entity/curso.entity";
import { CursoRepositortyInterface, CursoRepositoryAlterParams, CursoRepositoryCreateParams, CursoRepositoryDeleteParams, CursoRepositorySearchParams } from "../../../core/providers/data/curso-repository.interface";
export declare class CursoRepository implements CursoRepositortyInterface {
    create(model: CursoRepositoryCreateParams): CursoEntity;
    getAll(): CursoEntity[];
    search(model: CursoRepositorySearchParams): CursoEntity[];
    alter(model: CursoRepositoryAlterParams): CursoEntity;
    delete(model: CursoRepositoryDeleteParams): CursoEntity[];
}
