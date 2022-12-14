import "reflect-metadata";

import * as express from "express";

import "./presentation/controllers/cursos.controller";

import {
  ListaCursoByDescriptionInterface,
  ListaCursoInterface,
} from "./core/usecases/cursos/lista-cursos/lista-cursos.interface";
import { ListaCursoUseCase } from "./core/usecases/cursos/lista-cursos/lista-cursos.usecases";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import TYPES from "./types";
import { CriaCursoInterface } from "./core/usecases/cursos/cria-cursos/cria-curso.interface";
import { CriaCursoUseCase } from "./core/usecases/cursos/cria-cursos/cria-curso.usecases";
import { CursoRepositortyInterface } from "./core/providers/data/curso-repository.interface";
import { CursoRepository } from "./infra/data/repositories/curso.repository";
import { AlteraCursoInterface } from "./core/usecases/cursos/altera-cursos/altera-curso.interface";
import { AlteraCursoUseCase } from "./core/usecases/cursos/altera-cursos/altera-curso.usecases";
import { DeletaCursoInterface } from "./core/usecases/cursos/deleta-cursos/deleta-curso.interface";
import { DeletaCursoUseCase } from "./core/usecases/cursos/deleta-cursos/deleta-curso.usecases";

const container = new Container();

export class App {
  constructor() {
    this.configDependencies();
    this.createService();
  }

  configDependencies(): void {
    container
      .bind<ListaCursoInterface>(TYPES.ListaCursoInterface)
      .to(ListaCursoUseCase);
    container
      .bind<CriaCursoInterface>(TYPES.CriaCursoInterface)
      .to(CriaCursoUseCase);
    container
      .bind<CursoRepositortyInterface>(TYPES.CursoRepositoryInterface)
      .to(CursoRepository);
    container
      .bind<ListaCursoByDescriptionInterface>(
        TYPES.ListaCursoByDescriptionInterface
      )
      .to(ListaCursoUseCase);
    container
      .bind<AlteraCursoInterface>(TYPES.AlteraCursoInterface)
      .to(AlteraCursoUseCase);
    container
      .bind<DeletaCursoInterface>(TYPES.DeletaCursoInterface)
      .to(DeletaCursoUseCase);
  }

  createService(): void {
    const server: InversifyExpressServer = new InversifyExpressServer(
      container
    );

    server.setConfig((app) => {
      app.use(express.json());
    });

    const app = server.build();

    app.listen(3000, () => {
      console.log("Servidor iniciado na porta 3000");
    });
  }
}

export default new App();
