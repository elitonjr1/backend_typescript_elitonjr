import { CursoEntity } from "@core/entity/curso.entity";
import { CursoRepositortyInterface } from "@core/providers/data/curso-repository.interface";
import { CriaCursoUseCaseDTO } from "../cria-cursos/cria-curso.interface";
import { ListaCursoInterface } from "./lista-cursos.interface";
export declare class ListaCursoUseCase implements ListaCursoInterface {
    private _cursoRepository;
    constructor(cursoRepository: CursoRepositortyInterface);
    execute(model?: CriaCursoUseCaseDTO): CursoEntity[];
}
