const request = require('supertest');
const app = require('./app'); 

describe('GET /', () => {
  it('test server', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual('SERVER IS UP');
  });
});
