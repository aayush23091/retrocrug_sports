// backend/tests/productModel.test.js
import { Product } from '../model/Product.js';
import { sequelize } from '../database/index.js';

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Product Model', () => {
  it('should create a valid product', async () => {
    const product = await Product.create({
      sku: 'SKU123',
      productName: 'Test Ball',
      size: 'Medium',
      color: 'White',
      category: 'Cricket',
      price: 49.99,
      quantity: 10,
      status: 'Available',
      imageUrls: ['https://example.com/image1.jpg'],
    });

    expect(product.productName).toBe('Test Ball');
    expect(product.sku).toBe('SKU123');
    expect(product.category).toBe('Cricket');
  });

  it('should fail if required fields are missing', async () => {
    await expect(Product.create({})).rejects.toThrow();
  });

  it('should enforce unique SKU', async () => {
    await Product.create({
      sku: 'UNIQUE123',
      productName: 'First Product',
      category: 'Football',
      price: 20,
      quantity: 5,
      status: 'Available',
    });

    await expect(
      Product.create({
        sku: 'UNIQUE123',
        productName: 'Duplicate SKU',
        category: 'Football',
        price: 30,
        quantity: 3,
        status: 'Available',
      })
    ).rejects.toThrow();
  });
});
