import { CursoEntity } from "../../../core/entity/curso.entity";
import {
  CursoRepositortyInterface,
  CursoRepositoryAlterParams,
  CursoRepositoryCreateParams,
  CursoRepositoryDeleteParams,
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
  getAll(): CursoEntity[] {
    return data;
  }

  search(model: CursoRepositorySearchParams): CursoEntity[] {
    return data.find((element) => element.descricao === model.descricao);
  }

  alter(model: CursoRepositoryAlterParams): CursoEntity {
    const cursoAlterado = data.findIndex((obj) => obj.id === model.id);

    data[cursoAlterado].descricao = model.descricao;
    data[cursoAlterado].dataInicio = model.dataInicio;

    return data[cursoAlterado];
  }

  delete(model: CursoRepositoryDeleteParams): CursoEntity[] {
    const cursoDeletado = data.findIndex((obj) => obj.id === model.id);

    if (cursoDeletado > -1) {
      data.splice(cursoDeletado, 1);
    }

    return data;
  }
}
