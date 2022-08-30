
import { injectable } from "inversify";
import { ListaCursoInterface } from "./lista-cursos.interface";

@injectable()
export class ListaCursoUseCase implements ListaCursoInterface {
    execute(): any[] {
        throw new Error("Erro encontrado, favor entrar em contato com os administradores.");
    }
}