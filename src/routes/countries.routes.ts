import { Request, Response, Router } from "express";
import { oneOf, query } from "express-validator";
import Container from "typedi";
import CountryController from "../controllers/countries.controller";

class Routes {

    private router: Router = Router();

    private controller: CountryController = Container.get(CountryController);

    constructor() {
        this.setRoutes();
    }

    public setRoutes(): void {

        /**
         * @swagger
         * definitions:
         *   Countries:
         *     type: object
         *     properties:
         *       data:
         *         type: array
         *         items:
         *           $ref: '#/definitions/Country'
         *
         *   Country:
         *     type: object
         *     properties:
         *       country:
         *         type: string
         *       code:
         *         type: string
         *       vat:
         *         type: integer
         */

        /**
         * @swagger
         * /countries:
         *   get:
         *     description: Return the list of countries filtered (optional) and sorted (optional)
         *     parameters:
         *       - name: filter
         *         description: filter by country or code
         *         in: query
         *         type: string
         *         required: false
         *       - name: order
         *         description: sort the list of countries by the property 'vat'
         *         in: query
         *         type: string
         *         enum: [asc, desc]
         *         required: false
         *     responses:
         *       '200':
         *         description: Success. An object with 'data' property that contain a collection of countries filtered (optional) and sorted (optional)
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/definitions/Countries'
         *       '400':
         *         description: Bad request. Invalid query paramas
         *       '500':
         *         description: Internal error.
         */
        this.router.get('/',
            query('filter', 'filter must be a string').optional().isString(),
            query('order', "order must be 'asc' | 'desc'").optional().isIn(['asc', 'desc']),
            (req: Request, res: Response) => this.controller.getCountries(req, res));
    }

    public getRoutes(): Router {
        return this.router;
    }
}

const routes = new Routes()
export default routes.getRoutes();
