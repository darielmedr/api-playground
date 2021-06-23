import { expect } from "chai";
import request from "supertest";

import app from '../../src/app';


describe('GET /countries', function () {

    it('should response with json 200 and data property when no query params', async function () {
        await request(app)
            .get('/countries')
            .query({  })
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).to.have.property('data');
            });
    });

    it('should accept query param (filter)', async function () {
        await request(app)
            .get('/countries')
            .query({ filter: 'fr' })
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).to.have.property('data');
            });
    });

    it('should accept query param (order)', async function () {
        await request(app)
            .get('/countries')
            .query({ order: 'asc' })
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).to.have.property('data');
            });
    });

    it('should accept query params (filter & order)', async function () {
        await request(app)
            .get('/countries')
            .query({ filter: 'fr', order: 'desc' })
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).to.have.property('data');
            });
    });

});
