import {
  ListaCursoByDescriptionInterface,
  ListaCursoInterface,
} from "../../core/usecases/cursos/lista-cursos/lista-cursos.interface";
import { AlteraCursoDto } from "../../presentation/dtos/curso-alterar.dto";
import { CriaCursoDto } from "../../presentation/dtos/curso-criar.dto";
import { ListaCursoDTO } from "../../presentation/dtos/curso-lista.dto";
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
import { ValidateDTOMiddleware } from "../../presentation/middlewares/validate.dto.middleware";

import { CriaCursoInterface } from "../../core/usecases/cursos/cria-cursos/cria-curso.interface";

@controller("/cursos")
export class CursoController
  extends BaseHttpController
  implements interfaces.Controller
{
  private _listaCursoUseCase: ListaCursoInterface;
  private _listaCursoByDescriptionUseCase: ListaCursoByDescriptionInterface;
  private _criaCursoUseCase: CriaCursoInterface;

  constructor(
    @inject(TYPES.ListaCursoInterface) listaCursoUseCase: ListaCursoInterface,
    @inject(TYPES.ListaCursoByDescriptionInterface)
    listaCursoByDescriptionUseCase: ListaCursoByDescriptionInterface,
    @inject(TYPES.CriaCursoInterface) criaCursoUseCase: CriaCursoInterface
  ) {
    super();

    this._listaCursoUseCase = listaCursoUseCase;
    this._criaCursoUseCase = criaCursoUseCase;
    this._listaCursoByDescriptionUseCase = listaCursoByDescriptionUseCase;
  }

  @httpGet("/")
  public async listar(
    @queryParam() query: ListaCursoDTO.Query
  ): Promise<interfaces.IHttpActionResult> {
    // const result: any[] = this._listaCursoUseCase.execute({
    //   descricao: query.descricao,
    // });
    let result = [];

    if (query.descricao) {
      result = this._listaCursoByDescriptionUseCase.execute({
        descricao: query.descricao,
      });
    } else {
      result = this._listaCursoUseCase.execute();
    }

    return this.json(result);
  }

  /*@httpGet("/")
  public async listByDescription(
    @queryParam() query: ListaCursoDTO.Query
  ): Promise<interfaces.IHttpActionResult> {
    const result: any[] = this._listaCursoByDescriptionUseCase.execute({
      descricao: query.descricao,
    });

    return this.json(result);
  }*/

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

  @httpPost("/", ValidateDTOMiddleware(CriaCursoDto.Body, "body"))
  public async criarCurso(
    @requestBody() body: CriaCursoDto.Body
  ): Promise<interfaces.IHttpActionResult> {
    const result = this._criaCursoUseCase.execute({
      dataInicio: body.dataInicio,
      descricao: body.descricao,
    });

    return this.json(result);
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
