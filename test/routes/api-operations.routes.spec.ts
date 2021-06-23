import { assert, expect } from "chai";
import request from "supertest";

import app from '../../src/app';


describe('PUT /append', function () {

    it('should response with json 200 and data property', function (done) {

        request(app)
            .put('/append')
            .query({ start: 'post', end: 'delete' })
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).to.have.property('data');
                done();
            })
            .catch(err => done(err));
    });

    it('should have at least one query param (start)', function (done) {

        request(app)
            .put('/append')
            .query({ start: 'post' })
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).to.have.property('data');
                done();
            })
            .catch(err => done(err));

    });

    it('should have at least one query param (end)', function (done) {

        request(app)
            .put('/append')
            .query({ end: 'delete' })
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).to.have.property('data');
                done();
            })
            .catch(err => done(err));

    });

    it('should responde 400 if no query params', function (done) {

        request(app)
            .put('/append')
            .expect(400)
            .then(response => {
                assert(true);
                done();
            })
            .catch(err => done(err));

    });

});
