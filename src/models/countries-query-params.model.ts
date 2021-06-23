import { OrderParamType } from "./order-param.enum";

export interface CountriesQueryParams {
    filter?: string,
    order?: OrderParamType
}