// backend/tests/security.test.js
import request from 'supertest';
import app from '../server.js';

describe('Security Tests', () => {
  it('should not crash on SQL injection attempt', async () => {
    const res = await request(app).get('/products?search=" OR 1=1 --');
    expect(res.statusCode).toBeLessThan(500);
  });
});
