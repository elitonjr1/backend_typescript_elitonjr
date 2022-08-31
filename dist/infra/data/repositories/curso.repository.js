"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoRepository = void 0;
var curso_entity_1 = require("../../../core/entity/curso.entity");
var inversify_1 = require("inversify");
var uuidv4_1 = require("uuidv4");
var data = [];
var CursoRepository = (function () {
    function CursoRepository() {
    }
    CursoRepository.prototype.create = function (model) {
        var id = (0, uuidv4_1.uuid)();
        var dataModel = {
            id: id,
            dataInicio: model.dataInicio,
            descricao: model.descricao,
        };
        data.push(dataModel);
        return curso_entity_1.CursoEntity.build(dataModel.id, dataModel.dataInicio, dataModel.descricao);
    };
    CursoRepository.prototype.search = function (model) {
        throw new Error("Method not implemented.");
    };
    CursoRepository = __decorate([
        (0, inversify_1.injectable)()
    ], CursoRepository);
    return CursoRepository;
}());
exports.CursoRepository = CursoRepository;
//# sourceMappingURL=curso.repository.js.map