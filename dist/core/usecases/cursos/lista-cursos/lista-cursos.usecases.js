"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaCursoUseCase = void 0;
var inversify_1 = require("inversify");
var types_1 = require("../../../../types");
var ListaCursoUseCase = (function () {
    function ListaCursoUseCase(cursoRepository) {
        this._cursoRepository = cursoRepository;
    }
    ListaCursoUseCase.prototype.execute = function (model) {
        var result = [];
        if (model) {
            result = this._cursoRepository.search({
                descricao: model.descricao,
            });
        }
        else {
            result = this._cursoRepository.getAll();
        }
        return result;
    };
    ListaCursoUseCase = __decorate([
        (0, inversify_1.injectable)(),
        __param(0, (0, inversify_1.inject)(types_1.default.CursoRepositoryInterface)),
        __metadata("design:paramtypes", [Object])
    ], ListaCursoUseCase);
    return ListaCursoUseCase;
}());
exports.ListaCursoUseCase = ListaCursoUseCase;
//# sourceMappingURL=lista-cursos.usecases.js.map