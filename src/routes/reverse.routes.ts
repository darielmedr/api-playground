import { Request, Response, Router } from "express";
import Container from "typedi";
import ReverseController from "../controllers/reverse.controller";

class Routes {

    private router: Router = Router();

    private controller: ReverseController = Container.get(ReverseController);

    constructor() {
        this.setRoutes();
    }

    public setRoutes(): void {

        /**
         * @swagger
         * /reverse/{urlParam}:
         *   get:
         *     description: Return the string you sent (by url param) but reversed with all vowels in uppercase.
         *     parameters:
         *       - name: urlParam
         *         description: the string value to be processed
         *         in: path
         *         schema:
         *           type: string
         *         required: true
         *     responses:
         *       '200':
         *         description: Success.
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 data:
         *                   type: string
         */
        this.router.get('/:urlParam',
            (req: Request, res: Response) => this.controller.getReversedData(req, res));
    }

    public getRoutes(): Router {
        return this.router;
    }
}

const routes = new Routes()
export default routes.getRoutes();
