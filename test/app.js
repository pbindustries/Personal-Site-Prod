const request = require('supertest');
const app = require('../app.js');

// Home Page
describe('GET /', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

// Login Page
describe('GET /login', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/login')
      .expect(200, done);
  });
});

// Signup Page
describe('GET /signup', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/signup')
      .expect(200, done);
  });
});

// Contact Page
describe('GET /contact', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/contact')
      .expect(200, done);
  });
});

// This test should fail
describe('GET /random-url', () => {
  it('should return 404', (done) => {
    request(app)
      .get('/reset')
      .expect(404, done);
  });
});


