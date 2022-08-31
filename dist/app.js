"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
require("reflect-metadata");
var express = require("express");
require("./presentation/controllers/cursos.controller");
var lista_cursos_usecases_1 = require("./core/usecases/cursos/lista-cursos/lista-cursos.usecases");
var inversify_1 = require("inversify");
var inversify_express_utils_1 = require("inversify-express-utils");
var types_1 = require("./types");
var cria_curso_usecases_1 = require("./core/usecases/cursos/cria-cursos/cria-curso.usecases");
var curso_repository_1 = require("./infra/data/repositories/curso.repository");
var altera_curso_usecases_1 = require("./core/usecases/cursos/altera-cursos/altera-curso.usecases");
var deleta_curso_usecases_1 = require("./core/usecases/cursos/deleta-cursos/deleta-curso.usecases");
var container = new inversify_1.Container();
var App = (function () {
    function App() {
        this.configDependencies();
        this.createService();
    }
    App.prototype.configDependencies = function () {
        container
            .bind(types_1.default.ListaCursoInterface)
            .to(lista_cursos_usecases_1.ListaCursoUseCase);
        container
            .bind(types_1.default.CriaCursoInterface)
            .to(cria_curso_usecases_1.CriaCursoUseCase);
        container
            .bind(types_1.default.CursoRepositoryInterface)
            .to(curso_repository_1.CursoRepository);
        container
            .bind(types_1.default.ListaCursoByDescriptionInterface)
            .to(lista_cursos_usecases_1.ListaCursoUseCase);
        container
            .bind(types_1.default.AlteraCursoInterface)
            .to(altera_curso_usecases_1.AlteraCursoUseCase);
        container
            .bind(types_1.default.DeletaCursoInterface)
            .to(deleta_curso_usecases_1.DeletaCursoUseCase);
    };
    App.prototype.createService = function () {
        var server = new inversify_express_utils_1.InversifyExpressServer(container);
        server.setConfig(function (app) {
            app.use(express.json());
        });
        var app = server.build();
        app.listen(3000, function () {
            console.log("Servidor iniciado na porta 3000");
        });
    };
    return App;
}());
exports.App = App;
exports.default = new App();
//# sourceMappingURL=app.js.map