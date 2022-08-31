import { CursoEntity } from "@core/entity/curso.entity";
export declare class ListaCursoUseCaseDTO {
    descricao: string;
}
export interface ListaCursoByDescriptionInterface {
    execute(model: ListaCursoUseCaseDTO): CursoEntity[];
}
export interface ListaCursoInterface {
    execute(): CursoEntity[];
}
