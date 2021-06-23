import { Request, Response } from "express";
import { Service } from "typedi";
import CountryService from '../services/countries.service';
import { CountriesQueryParams } from '../models/countries-query-params.model';
import { OrderParam, OrderParamType } from "../models/order-param.enum";

import log from '../logger';

@Service()
export default class CountryController {

    constructor(
        private countryService: CountryService
    ) { }

    public async getCountries(req: Request, res: Response): Promise<Response> {

        try {
            const { filter, order } = req.query;

            if (
                (filter && typeof filter !== 'string') ||
                (order && !(order.toString() in OrderParam))
            ) return res.sendStatus(400)

            const queryParams: CountriesQueryParams = {
                filter: filter ? filter : undefined,
                order: order ? order as OrderParamType : undefined
            };

            const countries = await this.countryService.getCountries(queryParams);
            return res.status(200).json({data: countries});

        } catch (error) {
            log.error(error);
            return res.sendStatus(500);
        }
    }
}
