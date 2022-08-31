import { CursoRepositortyInterface } from "@core/providers/data/curso-repository.interface";
import { CursoEntity } from "../../../../core/entity/curso.entity";
import { AlteraCursoInterface, AlteraCursoInterfaceDTO } from "./altera-curso.interface";
export declare class AlteraCursoUseCase implements AlteraCursoInterface {
    private _cursoRepository;
    constructor(cursoRepository: CursoRepositortyInterface);
    execute(model: AlteraCursoInterfaceDTO): CursoEntity;
}
