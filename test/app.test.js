const request = require('supertest');
const app = require('../app/index');

describe('GET /', () => {
  it('should return Hello from Jenkins!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from Jenkins!');
  });
});
