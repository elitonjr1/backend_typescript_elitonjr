import { CursoEntity } from "../../../../core/entity/curso.entity";
export declare class DeletaCursoDTO {
    id: string;
}
export interface DeletaCursoInterface {
    execute(model: DeletaCursoDTO): CursoEntity[];
}
