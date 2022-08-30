"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.CursoController = void 0;
var inversify_1 = require("inversify");
var inversify_express_utils_1 = require("inversify-express-utils");
var types_1 = require("../../types");
var CursoController = (function (_super) {
    __extends(CursoController, _super);
    function CursoController(cursoUseCase) {
        var _this = _super.call(this) || this;
        _this._cursoService = cursoUseCase;
        return _this;
    }
    CursoController.prototype.lista = function (status) {
        var result = this._cursoService.execute();
        return this.json(result);
    };
    __decorate([
        (0, inversify_express_utils_1.httpGet)('/'),
        __param(0, (0, inversify_express_utils_1.queryParam)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", Object)
    ], CursoController.prototype, "lista", null);
    CursoController = __decorate([
        (0, inversify_express_utils_1.controller)('/cursos'),
        __param(0, (0, inversify_1.inject)(types_1.default.ListaCursoInterface)),
        __metadata("design:paramtypes", [Object])
    ], CursoController);
    return CursoController;
}(inversify_express_utils_1.BaseHttpController));
exports.CursoController = CursoController;
//# sourceMappingURL=cursos.controller.js.map