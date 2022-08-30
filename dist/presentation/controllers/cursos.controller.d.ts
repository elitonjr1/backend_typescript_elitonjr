import { ListaCursoInterface } from "@core/usecases/cursos/lista-cursos/lista-cursos.interface";
import { BaseHttpController, interfaces } from "inversify-express-utils";
export declare class CursoController extends BaseHttpController implements interfaces.Controller {
    private _cursoService;
    constructor(cursoUseCase: ListaCursoInterface);
    lista(status: any[]): interfaces.IHttpActionResult;
}
