
import "reflect-metadata";

import * as express from 'express';

import "./presentation/controllers/cursos.controller"

import { ListaCursoInterface } from "./core/usecases/cursos/lista-cursos/lista-cursos.interface";
import { ListaCursoUseCase } from "./core/usecases/cursos/lista-cursos/lista-cursos.usecases";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import TYPES from "./types";

const container = new Container();

export class App {
    constructor() {
        this.configDependencies();
        this.createService();
    }

    configDependencies(): void {
        container.bind<ListaCursoInterface>(TYPES.ListaCursoInterface).to(ListaCursoUseCase);

    }

    createService(): void {
        const server: InversifyExpressServer = new InversifyExpressServer(container);

        server.setConfig((app) => {
            app.use(express.json())
        })

        const app = server.build();

        app.listen(3000, () => {
            console.log("Servidor iniciado na porta 3000");
        });

    }
}

export default new App();