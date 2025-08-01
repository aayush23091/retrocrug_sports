// backend/tests/productController.test.js
import { Product } from '../model/Product.js';
import { sequelize } from '../database/index.js';

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Product Controller Logic', () => {
  it('should create and fetch products', async () => {
    await Product.create({
      sku: 'CTRL001',
      productName: 'Controller Product',
      category: 'Rugby',
      price: 99.99,
      quantity: 15,
      status: 'Available',
    });

    const products = await Product.findAll();
    expect(products.length).toBeGreaterThan(0);
  });
});
