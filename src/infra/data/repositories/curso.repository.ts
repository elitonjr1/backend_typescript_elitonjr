import { CursoEntity } from "../../../core/entity/curso.entity";
import {
  CursoRepositortyInterface,
  CursoRepositoryCreateParams,
  CursoRepositorySearchParams,
} from "../../../core/providers/data/curso-repository.interface";
import { injectable } from "inversify";
import { uuid } from "uuidv4";

const data = [];

@injectable()
export class CursoRepository implements CursoRepositortyInterface {
  create(model: CursoRepositoryCreateParams): CursoEntity {
    const id = uuid();
    const dataModel = {
      id,
      dataInicio: model.dataInicio,
      descricao: model.descricao,
    };

    data.push(dataModel);

    return CursoEntity.build(
      dataModel.id,
      dataModel.dataInicio,
      dataModel.descricao
    );
  }
  search(model: CursoRepositorySearchParams): CursoEntity[] {
    throw new Error("Method not implemented.");
  }
}
