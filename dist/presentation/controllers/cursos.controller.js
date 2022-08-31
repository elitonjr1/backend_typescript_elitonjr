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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoController = void 0;
var curso_alterar_dto_1 = require("../../presentation/dtos/curso-alterar.dto");
var curso_criar_dto_1 = require("../../presentation/dtos/curso-criar.dto");
var curso_lista_dto_1 = require("../../presentation/dtos/curso-lista.dto");
var inversify_1 = require("inversify");
var inversify_express_utils_1 = require("inversify-express-utils");
var types_1 = require("../../types");
var validate_dto_middleware_1 = require("../../presentation/middlewares/validate.dto.middleware");
var CursoController = (function (_super) {
    __extends(CursoController, _super);
    function CursoController(listaCursoUseCase, criaCursoUseCase) {
        var _this = _super.call(this) || this;
        _this._listaCursoUseCase = listaCursoUseCase;
        _this._criaCursoUseCase = criaCursoUseCase;
        return _this;
    }
    CursoController.prototype.listar = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                result = this._listaCursoUseCase.execute();
                return [2, this.json(result)];
            });
        });
    };
    CursoController.prototype.listarById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.json({
                        id: "1",
                        descricao: "BackEnd Typescript",
                        status: "ativo",
                    })];
            });
        });
    };
    CursoController.prototype.criarCurso = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                result = this._criaCursoUseCase.execute({
                    dataInicio: body.dataInicio,
                    descricao: body.descricao,
                });
                return [2, this.json(result)];
            });
        });
    };
    CursoController.prototype.alterarCurso = function (id, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.json({
                        id: "1",
                        descricao: "BackEnd Typescript",
                        status: "ativo",
                    })];
            });
        });
    };
    CursoController.prototype.deletarCurso = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.json({
                        message: "curso deletado",
                    })];
            });
        });
    };
    __decorate([
        (0, inversify_express_utils_1.httpGet)("/"),
        __param(0, (0, inversify_express_utils_1.queryParam)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [curso_lista_dto_1.ListaCursoDTO.Query]),
        __metadata("design:returntype", Promise)
    ], CursoController.prototype, "listar", null);
    __decorate([
        (0, inversify_express_utils_1.httpGet)("/:id"),
        __param(0, (0, inversify_express_utils_1.requestParam)("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], CursoController.prototype, "listarById", null);
    __decorate([
        (0, inversify_express_utils_1.httpPost)("/", (0, validate_dto_middleware_1.ValidateDTOMiddleware)(curso_criar_dto_1.CriaCursoDto.Body, "body")),
        __param(0, (0, inversify_express_utils_1.requestBody)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [curso_criar_dto_1.CriaCursoDto.Body]),
        __metadata("design:returntype", Promise)
    ], CursoController.prototype, "criarCurso", null);
    __decorate([
        (0, inversify_express_utils_1.httpPut)("/:id"),
        __param(0, (0, inversify_express_utils_1.requestParam)("id")),
        __param(1, (0, inversify_express_utils_1.requestBody)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, curso_alterar_dto_1.AlteraCursoDto.Body]),
        __metadata("design:returntype", Promise)
    ], CursoController.prototype, "alterarCurso", null);
    __decorate([
        (0, inversify_express_utils_1.httpDelete)("/:id"),
        __param(0, (0, inversify_express_utils_1.requestParam)("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], CursoController.prototype, "deletarCurso", null);
    CursoController = __decorate([
        (0, inversify_express_utils_1.controller)("/cursos"),
        __param(0, (0, inversify_1.inject)(types_1.default.ListaCursoInterface)),
        __param(1, (0, inversify_1.inject)(types_1.default.CriaCursoInterface)),
        __metadata("design:paramtypes", [Object, Object])
    ], CursoController);
    return CursoController;
}(inversify_express_utils_1.BaseHttpController));
exports.CursoController = CursoController;
//# sourceMappingURL=cursos.controller.js.map