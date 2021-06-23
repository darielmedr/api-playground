
import Container from 'typedi';
import CountryService from '../../src/services/countries.service';
import { assert, expect } from 'chai';

describe('CountriesService', function () {

    const service: CountryService = Container.get(CountryService);

    describe('getCountries()', function () {

        it('should return an promise', function () {

            service.getCountries()
                .then(() => {
                    assert.equal(true, true);
                });

        });

        it('should return an array', function () {

            service.getCountries()
                .then((res) => {
                    expect(res).to.be.an.instanceOf(Array);
                });

        });

    });

});
