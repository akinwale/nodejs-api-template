

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
const errors = require('../src/controllers/errors');
const server = require('../src/app');

describe('Errors', () => {
  describe('newHttpError', () => {
    it('creates a new error', (done) => {
      const err = errors.newHttpError(401, 'unauthorized');
      err.message.should.equal('unauthorized');
      err.status.should.equal(401);
      done();
    });

    it('creates a new error without status', (done) => {
      const errStatusNull = errors.newHttpError(null, 'status is null');
      const errStatusUndefined = errors.newHttpError(undefined, 'status is undefined');
      errStatusNull.message.should.equal('status is null');
      errStatusUndefined.message.should.equal('status is undefined');
      should.not.exist(errStatusNull.status);
      should.not.exist(errStatusUndefined.status);
      done();
    });

    it('creates a new error without message', (done) => {
      const errMessageNull = errors.newHttpError(403, null);
      const errMessageUndefined = errors.newHttpError(418);
      errMessageNull.status.should.equal(403);
      errMessageUndefined.status.should.equal(418);

      // By default, if you don't pass in a message to a new Error, the
      // message becomes an empty string
      errMessageNull.message.should.equal('');
      errMessageUndefined.message.should.equal('');

      done();
    });
  });

  describe('Null Route', () => {
    it('returns a 404 response', (done) => {
      chai.request(server)
        .get('/nonexistentroute')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.message.should.equal('not found');
          done();
        });
    });
  });
});
