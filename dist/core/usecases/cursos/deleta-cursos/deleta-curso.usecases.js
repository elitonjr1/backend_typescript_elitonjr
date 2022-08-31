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
exports.DeletaCursoUseCase = void 0;
var inversify_1 = require("inversify");
var types_1 = require("../../../../types");
var DeletaCursoUseCase = (function () {
    function DeletaCursoUseCase(cursoRepository) {
        this._cursoRepository = cursoRepository;
    }
    DeletaCursoUseCase.prototype.execute = function (model) {
        var result = this._cursoRepository.delete({
            id: model.id,
        });
        return result;
    };
    DeletaCursoUseCase = __decorate([
        (0, inversify_1.injectable)(),
        __param(0, (0, inversify_1.inject)(types_1.default.CursoRepositoryInterface)),
        __metadata("design:paramtypes", [Object])
    ], DeletaCursoUseCase);
    return DeletaCursoUseCase;
}());
exports.DeletaCursoUseCase = DeletaCursoUseCase;
//# sourceMappingURL=deleta-curso.usecases.js.map