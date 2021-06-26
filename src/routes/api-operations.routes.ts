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

        /**
         * @swagger
         * /append:
         *   put:
         *     description: Adds to the start and/or to the end of the array the string provided in the query
         *     parameters:
         *       - name: start
         *         description: add to the begin of the SIMPLE_ARRAY the string provided
         *         in: query
         *         type: string
         *         required: false
         *       - name: end
         *         description: add to the end of the SIMPLE_ARRAY the string provided
         *         in: query
         *         type: string
         *         required: false
         *     responses:
         *       '200':
         *         description: Success
         *         content:
         *           schema:
         *             type: string
         *       '400':
         *         description: Bad request. Must provide some query params (start and/or end)
         */
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
