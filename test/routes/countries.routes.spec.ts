import { assert, expect } from "chai";
import request from "supertest";

import app from '../../src/app';


describe('GET /countries', function () {

    it('should response with json 200 and data property when no query params', function (done) {

        request(app)
            .get('/countries')
            .query({})
            .expect('Content-Type', /json/)
            .expect(200)
            .then(res => {
                expect(res.body).to.have.property('data');
                done();
            })
            .catch(err => done(err));

    });

    it('should accept query param (filter)', function (done) {

        request(app)
            .get('/countries')
            .query({ filter: 'fr' })
            .expect('Content-Type', /json/)
            .expect(200)
            .then(res => {
                expect(res.body).to.have.property('data');
                done();
            })
            .catch(err => done(err));

    });

    it('should accept query param (order)', function (done) {

        request(app)
            .get('/countries')
            .query({ order: 'asc' })
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                assert(true);
                done();
            })
            .catch(err => done(err));

    });

    it('should accept query params (filter & order)', function (done) {

        request(app)
            .get('/countries')
            .query({ filter: 'fr', order: 'desc' })
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).to.have.property('data');
                done();
            })
            .catch(err => done(err));

    });

    it('should response 400 when both params are invalid (filter & order)', function (done) {

        const invalidFilter: number = 1;
        const invalidOrder: string = 'inavlid_order';

        request(app)
            .get('/countries')
            .query({ filter: invalidFilter, order: invalidOrder })
            .expect(400)
            .then(response => {
                assert(true);
                done();
            })
            .catch(err => done(err));

    });

});
