import { ListaCursoInterface } from "@core/usecases/cursos/lista-cursos/lista-cursos.interface";
import { AlteraCursoDto } from "@presentation/dtos/curso-alterar.dto";
import { CriaCursoDto } from "@presentation/dtos/curso-criar.dto";
import { ListaCursoDTO } from "@presentation/dtos/curso-lista.dto";
import { validate } from "class-validator";
import { inject } from "inversify";
import {
  BaseHttpController,
  controller,
  httpDelete,
  httpGet,
  httpPost,
  httpPut,
  interfaces,
  queryParam,
  requestBody,
  requestParam,
} from "inversify-express-utils";
import TYPES from "../../types";

@controller("/cursos")
export class CursoController
  extends BaseHttpController
  implements interfaces.Controller
{
  private _cursoService: ListaCursoInterface;

  constructor(
    @inject(TYPES.ListaCursoInterface) cursoUseCase: ListaCursoInterface
  ) {
    super();

    this._cursoService = cursoUseCase;
  }

  @httpGet("/")
  public async listar(
    @queryParam() query: ListaCursoDTO.Query
  ): Promise<interfaces.IHttpActionResult> {
    const result: any[] = this._cursoService.execute();

    return this.json(result);
  }

  @httpGet("/:id")
  public async listarById(
    @requestParam("id") id: string
  ): Promise<interfaces.IHttpActionResult> {
    return this.json({
      id: "1",
      descricao: "BackEnd Typescript",
      status: "ativo",
    });
  }

  @httpPost("/")
  public async criarCurso(
    @requestBody() body: CriaCursoDto.Body
  ): Promise<interfaces.IHttpActionResult> {
    return this.json({
      message: "Curso criado com sucesso",
      data: {
        id: "1",
        descricao: "FrontEnd",
        status: "ativo",
      },
    });
  }

  @httpPut("/:id")
  public async alterarCurso(
    @requestParam("id") id: string,
    @requestBody() body: AlteraCursoDto.Body
  ): Promise<interfaces.IHttpActionResult> {
    return this.json({
      id: "1",
      descricao: "BackEnd Typescript",
      status: "ativo",
    });
  }

  @httpDelete("/:id")
  public async deletarCurso(
    @requestParam("id") id: string
  ): Promise<interfaces.IHttpActionResult> {
    return this.json({
      message: "curso deletado",
    });
  }
}
