import { CursoEntity } from "../../../core/entity/curso.entity";
import { CursoRepositortyInterface, CursoRepositoryCreateParams, CursoRepositorySearchParams } from "../../../core/providers/data/curso-repository.interface";
export declare class CursoRepository implements CursoRepositortyInterface {
    create(model: CursoRepositoryCreateParams): CursoEntity;
    getAll(): CursoEntity[];
    search(model: CursoRepositorySearchParams): CursoEntity[];
}
