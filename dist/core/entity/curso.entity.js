"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoEntity = void 0;
var CursoEntity = (function () {
    function CursoEntity(_id, _descricao, _dataInicio) {
        this.id = _id;
        this.dataInicio = _dataInicio;
        this.descricao = _descricao;
        this.status = this.getStatus();
    }
    CursoEntity.prototype.getStatus = function () {
        return "mock";
    };
    CursoEntity.build = function (_id, _dataInicio, _descricao) {
        return new CursoEntity(_id, _descricao, _dataInicio);
    };
    return CursoEntity;
}());
exports.CursoEntity = CursoEntity;
//# sourceMappingURL=curso.entity.js.map