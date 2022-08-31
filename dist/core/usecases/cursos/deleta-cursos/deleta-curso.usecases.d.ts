import { CursoRepositortyInterface } from "@core/providers/data/curso-repository.interface";
import { CursoEntity } from "../../../../core/entity/curso.entity";
import { DeletaCursoDTO, DeletaCursoInterface } from "./deleta-curso.interface";
export declare class DeletaCursoUseCase implements DeletaCursoInterface {
    private _cursoRepository;
    constructor(cursoRepository: CursoRepositortyInterface);
    execute(model: DeletaCursoDTO): CursoEntity[];
}
