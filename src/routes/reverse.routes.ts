import { Router } from "express";
import Container from "typedi";
import ReverseController from "../controllers/reverse.controller";

class Routes {

    private router: Router = Router();

    private controller: ReverseController = Container.get(ReverseController);

    constructor() {
        this.setRoutes();
    }

    public setRoutes(): void {
        this.router.get('/:urlParam', (req, res) => this.controller.getReversedData(req, res));
    }

    public getRoutes(): Router {
        return this.router;
    }
}

const routes = new Routes()
export default routes.getRoutes();
