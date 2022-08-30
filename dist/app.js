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
var container = new inversify_1.Container();
var App = (function () {
    function App() {
        this.configDependencies();
        this.createService();
    }
    App.prototype.configDependencies = function () {
        container.bind(types_1.default.ListaCursoInterface).to(lista_cursos_usecases_1.ListaCursoUseCase);
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