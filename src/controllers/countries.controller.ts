import { Request, Response } from "express";
import { Result, ValidationError, validationResult } from "express-validator";
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

            const errors: Result<ValidationError> = validationResult(req);

            if (!errors.isEmpty()) return res.sendStatus(400);

            const { filter, order } = req.query;

            const queryParams: CountriesQueryParams = {
                filter: filter ? filter as string : undefined,
                order: order ? order as OrderParamType : undefined
            };

            const countries = await this.countryService.getCountries(queryParams);
            return res.status(200).json({ data: countries });

        } catch (error) {
            log.error(error);
            return res.sendStatus(500);
        }
    }
}
