import { assert, expect } from "chai";
import request from "supertest";

import app from '../../src/app';


describe('PUT /append', function () {

    it('should response with json 200 and data property', async function () {
        await request(app)
            .put('/append')
            .query({ start: 'post', end: 'delete' })
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).to.have.property('data');
            });
    });

    it('should have at least one query param (start)', async function () {
        await request(app)
            .put('/append')
            .query({ start: 'post' })
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).to.have.property('data');
            });
    });

    it('should have at least one query param (end)', async function () {
        await request(app)
            .put('/append')
            .query({ end: 'delete' })
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).to.have.property('data');
            });
    });

    it('should responde 400 if no query params', function (done) {
        request(app)
            .put('/append')
            .expect(400, done);
    });

});
