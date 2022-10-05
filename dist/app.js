"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
require("reflect-metadata");
var express = require("express");
var dotenv = require("dotenv");
var inversify_1 = require("inversify");
var inversify_express_utils_1 = require("inversify-express-utils");
var types_1 = require("./types");
require("./presentation/controllers/courses.controller");
require("./presentation/controllers/auth.controller");
require("./presentation/controllers/users.controller");
var base_controller_1 = require("./presentation/controllers/base.controller");
var custom_middleware_1 = require("./presentation/middlewares/custom.middleware");
var list_course_usecase_1 = require("./core/usecases/courses/list-courses/list-course.usecase");
var create_course_usecase_1 = require("./core/usecases/courses/create-course/create-course.usecase");
var search_course_usecase_1 = require("./core/usecases/courses/search-course/search-course.usecase");
var update_course_usecase_1 = require("./core/usecases/courses/update-course/update-course.usecase");
var delete_course_usecase_1 = require("./core/usecases/courses/delete-course/delete-course.usecase");
var courses_repository_1 = require("./infra/repositories/courses.repository");
var list_users_usecase_1 = require("./core/usecases/users/list-users/list-users.usecase");
var create_user_usecase_1 = require("./core/usecases/users/create-user/create-user.usecase");
var search_user_usecase_1 = require("./core/usecases/users/search-user/search-user.usecase");
var update_user_usecase_1 = require("./core/usecases/users/update-user/update-user.usecase");
var delete_user_usecase_1 = require("./core/usecases/users/delete-user/delete-user.usecase");
var users_repository_1 = require("./infra/repositories/users.repository");
var login_auth_usecase_1 = require("./core/usecases/auth/login-auth.usecase");
var PORT = process.env.PORT || 3001;
var container = new inversify_1.Container();
var App = (function () {
    function App() {
        this.configDependencies();
        this.createService();
        dotenv.config();
    }
    App.prototype.configDependencies = function () {
        container
            .bind(types_1.default.ListCoursesInterface)
            .to(list_course_usecase_1.ListCoursesUseCase);
        container
            .bind(types_1.default.CreateCourseInterface)
            .to(create_course_usecase_1.CreateCourseUseCase);
        container
            .bind(types_1.default.SearchCourseInterface)
            .to(search_course_usecase_1.SearchCourseUseCase);
        container
            .bind(types_1.default.UpdateCourseInterface)
            .to(update_course_usecase_1.UpdateCourseUseCase);
        container
            .bind(types_1.default.DeleteCourseInterface)
            .to(delete_course_usecase_1.DeleteCourseUseCase);
        container
            .bind(types_1.default.CourseRepositoryInterface)
            .to(courses_repository_1.CourseRepository);
        container
            .bind(types_1.default.ListUsersInterface)
            .to(list_users_usecase_1.ListUsersUseCase);
        container
            .bind(types_1.default.CreateUserInterface)
            .to(create_user_usecase_1.CreateUserUseCase);
        container
            .bind(types_1.default.SearchUserInterface)
            .to(search_user_usecase_1.SearchUserUseCase);
        container
            .bind(types_1.default.UpdateUserInterface)
            .to(update_user_usecase_1.UpdateUserUseCase);
        container
            .bind(types_1.default.DeleteUserInterface)
            .to(delete_user_usecase_1.DeleteUserUseCase);
        container
            .bind(types_1.default.UsersRepositoryInterface)
            .to(users_repository_1.UsersRepository);
        container
            .bind(types_1.default.AuthLoginInterface)
            .to(login_auth_usecase_1.AuthLoginUseCase);
        container
            .bind(types_1.default.CustomMiddleware)
            .toConstantValue(custom_middleware_1.CustomMiddleware);
        (0, base_controller_1.baseController)(container);
    };
    App.prototype.createService = function () {
        var server = new inversify_express_utils_1.InversifyExpressServer(container);
        server.setConfig(function (app) {
            app.use(express.json());
        });
        server.setErrorConfig(function (app) {
            app.use(function (err, req, res, next) {
                if (err) {
                    if (err.name === "BusinessError") {
                        return res.status(400).json({
                            mensagem: err.message,
                        });
                    }
                    return res.status(500).json({
                        mensagem: "Internal Server Error",
                    });
                }
                next();
            });
        });
        var app = server.build();
        app.listen(PORT, function () {
            console.log("Servidor iniciado na porta ".concat(PORT));
        });
    };
    return App;
}());
exports.App = App;
exports.default = new App();
//# sourceMappingURL=app.js.map