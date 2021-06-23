import { Service } from 'typedi';
import CountriesDB from '../db/countries.db';
import { Country } from '../models/country.model';
import { OrderParamType } from '../models/order-param.enum';
import { CountriesQueryParams } from '../models/countries-query-params.model';
import log from '../logger';

@Service()
export default class CountryService {

    constructor(
        private countriesDB: CountriesDB
    ) { }

    public async getCountries(queryParams?: CountriesQueryParams): Promise<Country[]> {

        try {
            log.info('Fetching all countries from API');

            const countries = await this.countriesDB.getCountries();

            if (!queryParams) {
                return countries;
            }

            let countriesResult: Country[] = countries;

            const { filter, order } = queryParams;

            if (filter) {
                countriesResult = this.filterCountries(countries, filter);
            }

            if (order) {
                countriesResult = this.sortCountries(countriesResult, order);
            }

            return countriesResult;

        } catch (error) {
            log.error(error);
            return [];
        }
    }

    public filterCountries(countries: Country[], searchString: string): Country[] {

        // Makes the search string a regular expression with case insensitive
        const regex = new RegExp(searchString, 'i');

        return countries.filter(
            (country: Country) => (
                regex.test(country.country) ||
                regex.test(country.code)
            )
        );
    }

    public sortCountries(countries: Country[], order: OrderParamType): Country[] {
        return countries.sort(
            (a: Country, b: Country) => (
                (order === 'asc')
                    ? a.vat - b.vat
                    : b.vat - a.vat
            )
        );
    }
}