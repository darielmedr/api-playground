import { expect } from "chai";
import { ApiOperationsQueryParams } from "../../src/models/api-op-query-params.model";
import ApiOperationsService from "../../src/services/api-operations.service";

describe('ApiOperationsService updateApiOperations()', function () {

    const service: ApiOperationsService = new ApiOperationsService();

    it('should return an array', function () {

        const params: ApiOperationsQueryParams = {};

        expect(service.updateApiOperations(params)).to.an.instanceOf(Array);
    });

    it('should have input at the start of the array when (params.first)', function () {

        const inputData: string = 'input mock data';

        const params: ApiOperationsQueryParams = {
            start: inputData,
        };

        expect(service.updateApiOperations(params)[0]).to.equal(inputData);
    });

    it('should have input at the end of the array when (params.end)', function () {

        const inputData: string = 'input mock data';

        const params: ApiOperationsQueryParams = {
            end: inputData,
        };

        const newData: string[] = service.updateApiOperations(params);

        expect(newData[newData.length - 1]).to.equal(inputData);
    });

    it('should have input at the start and end of the array when params (start & end)', function () {

        const startData: string = 'start mock data';
        const endData: string = 'end mock data';

        const params: ApiOperationsQueryParams = {
            start: startData,
            end: endData
        };

        const newData: string[] = service.updateApiOperations(params);

        expect(newData[0]).to.equal(startData);
        expect(newData[newData.length - 1]).to.equal(endData);
    });

});
