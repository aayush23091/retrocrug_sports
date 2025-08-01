// backend/tests/productRoutes.test.js
import request from 'supertest';
import app from '../server.js';
import { sequelize } from '../database/index.js';

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Product API Endpoints', () => {
  it('POST /products should create a product', async () => {
    const res = await request(app).post('/products').send({
      sku: 'ROUTE001',
      productName: 'Route Product',
      category: 'Tennis',
      price: 59.99,
      quantity: 20,
      status: 'Available',
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.productName).toBe('Route Product');
  });

  it('GET /products should return products', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
