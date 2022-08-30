import { BaseHttpController, interfaces } from "inversify-express-utils";
export declare class AppController extends BaseHttpController implements interfaces.Controller {
    constructor();
    index(): interfaces.IHttpActionResult;
}
