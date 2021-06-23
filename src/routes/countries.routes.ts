import { Router } from "express";
import Container from "typedi";
import CountryController from "../controllers/countries.controller";

class Routes {

    private router: Router = Router();

    private controller: CountryController = Container.get(CountryController);

    constructor() {
        this.setRoutes();
    }

    public setRoutes(): void {
        this.router.get('/', (req, res) => this.controller.getCountries(req, res));
    }

    public getRoutes(): Router {
        return this.router;
    }
}

const routes = new Routes()
export default routes.getRoutes();
