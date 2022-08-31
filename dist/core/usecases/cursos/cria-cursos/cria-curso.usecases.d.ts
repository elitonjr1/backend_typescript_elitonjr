import { CriaCursoInterface, CriaCursoUseCaseDTO } from "./cria-curso.interface";
import { CursoEntity } from "../../../../core/entity/curso.entity";
import { CursoRepositortyInterface } from "../../../../core/providers/data/curso-repository.interface";
export declare class CriaCursoUseCase implements CriaCursoInterface {
    private _cursoRepository;
    constructor(cursoRepository: CursoRepositortyInterface);
    execute(model: CriaCursoUseCaseDTO): CursoEntity;
}
