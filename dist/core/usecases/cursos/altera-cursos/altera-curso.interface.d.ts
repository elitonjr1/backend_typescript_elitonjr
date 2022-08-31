import { CursoEntity } from "../../../../core/entity/curso.entity";
export declare class AlteraCursoInterfaceDTO {
    id: string;
    dataInicio: string;
    descricao: string;
}
export interface AlteraCursoInterface {
    execute(model: AlteraCursoInterfaceDTO): CursoEntity;
}
