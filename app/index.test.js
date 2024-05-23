const request = require('supertest');
const app = require('./index');

let server;

beforeAll((done) => {
  server = app.listen(3001, () => {
    console.log('Test server is running on http://localhost:3001');
    done();
  });
});

afterAll((done) => {
  server.close(() => {
    console.log('Test server closed');
    done();
  });
});

describe('POST /sum', () => {
  it('should return the sum of two numbers', async () => {
    const response = await request(app)
      .post('/sum')
      .send({ a: 1, b: 2 });
    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(3);
  });

  it('should return 400 for invalid input', async () => {
    const response = await request(app)
      .post('/sum')
      .send({ a: '1', b: 2 });
    expect(response.statusCode).toBe(400);
  });
});
