import { CursoEntity } from "../../../../core/entity/curso.entity";
export declare class CriaCursoUseCaseDTO {
    dataInicio: string;
    descricao: string;
}
export interface CriaCursoInterface {
    execute(model: CriaCursoUseCaseDTO): CursoEntity;
}
