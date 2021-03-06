import { assert, expect } from "chai";
import request from "supertest";

import app from '../../src/app';


describe('GET /reverse:urlParam', function () {

    it('should response with json 200 and data property', function (done) {

        request(app)
            .get('/reverse/param')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).to.have.property('data');
                done();
            })
            .catch(err => done(err));

    });

    it('should response the url param reversed with all vowels in uppercase', function (done) {

        const param: string = 'delete';
        const processedParam: string = 'EtElEd';

        request(app)
            .get(`/reverse/${param}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .expect('{"data":"EtElEd"}')
            .then(response => {
                expect(response.body.data).to.equal(processedParam);
                done();
            })
            .catch(err => done(err));

    });

});
