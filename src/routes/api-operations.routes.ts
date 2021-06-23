import { Router } from "express";
import Container from "typedi";
import ApiOperationController from "../controllers/api-operation.controller";

class Routes {

    private router: Router = Router();

    private controller: ApiOperationController = Container.get(ApiOperationController);

    constructor() {
        this.setRoutes();
    }

    public setRoutes(): void {
        this.router.put('/', (req, res) => this.controller.updateApiOperations(req, res));
    }

    public getRoutes(): Router {
        return this.router;
    }
}

const routes = new Routes()
export default routes.getRoutes();
