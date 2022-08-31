import { ListaCursoByDescriptionInterface, ListaCursoInterface } from "../../core/usecases/cursos/lista-cursos/lista-cursos.interface";
import { AlteraCursoDto } from "../../presentation/dtos/curso-alterar.dto";
import { CriaCursoDto } from "../../presentation/dtos/curso-criar.dto";
import { ListaCursoDTO } from "../../presentation/dtos/curso-lista.dto";
import { BaseHttpController, interfaces } from "inversify-express-utils";
import { CriaCursoInterface } from "../../core/usecases/cursos/cria-cursos/cria-curso.interface";
import { AlteraCursoInterface } from "../../core/usecases/cursos/altera-cursos/altera-curso.interface";
import { DeletaCursoInterface } from "../../core/usecases/cursos/deleta-cursos/deleta-curso.interface";
export declare class CursoController extends BaseHttpController implements interfaces.Controller {
    private _listaCursoUseCase;
    private _listaCursoByDescriptionUseCase;
    private _criaCursoUseCase;
    private _alteraCursoUseCase;
    private _deletaCursoUseCase;
    constructor(listaCursoUseCase: ListaCursoInterface, listaCursoByDescriptionUseCase: ListaCursoByDescriptionInterface, criaCursoUseCase: CriaCursoInterface, alteraCursoUseCase: AlteraCursoInterface, deletaCursoUseCase: DeletaCursoInterface);
    listar(query: ListaCursoDTO.Query): Promise<interfaces.IHttpActionResult>;
    criarCurso(body: CriaCursoDto.Body): Promise<interfaces.IHttpActionResult>;
    alterarCurso(id: string, body: AlteraCursoDto.Body): Promise<interfaces.IHttpActionResult>;
    deletarCurso(id: string): Promise<interfaces.IHttpActionResult>;
}
