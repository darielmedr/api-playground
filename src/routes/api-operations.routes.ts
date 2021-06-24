import { Request, Response, Router } from "express";
import { oneOf, query } from "express-validator";
import Container from "typedi";
import ApiOperationController from "../controllers/api-operation.controller";

class Routes {

    private router: Router = Router();

    private controller: ApiOperationController = Container.get(ApiOperationController);

    constructor() {
        this.setRoutes();
    }

    public setRoutes(): void {
        this.router.put('/',
            oneOf([
                query('start', 'start must be a string').isString(),
                query('end', 'end must be a string').isString()
            ]),
            (req: Request, res: Response) => this.controller.updateApiOperations(req, res));
    }

    public getRoutes(): Router {
        return this.router;
    }
}

const routes = new Routes()
export default routes.getRoutes();
