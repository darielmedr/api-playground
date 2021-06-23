import axios, { AxiosResponse } from "axios";
import { Service } from "typedi";
import { Country } from '../models/country.model';
import config from "config";


@Service()
export default class CountriesDB {

  private apiUri: string;

  constructor () {
    this.apiUri = config.get('countriesApiUri') as string;
  }

  public getCountries(): Promise<Country[]> {
    return axios.get(this.apiUri)
      .then((res: AxiosResponse) => res.data);
  }
}