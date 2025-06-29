import { Product } from "../../models/index.js"

/**
 *  fetch all products
 */
const getAll = async (req, res) => {
  try {
    //fetching all the data from products table
    const products = await Product.findAll()
    res.status(200).send({ data: products, message: "successfully fetched data" })
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch products" })
  }
}

/**
 *  create new product
 */
const create = async (req, res) => {
  try {
    const body = req.body
    console.log(req.body)
    //validation
    if (!body?.name || !body?.price)
      return res.status(400).send({ message: "Invalid payload - name and price are required" })

    const product = await Product.create({
      name: body.name,
      description: body.description,
      price: body.price,
      category: body.category,
      stock: body.stock || 0,
      image: body.image,
      isActive: body.isActive !== undefined ? body.isActive : true,
    })
    res.status(201).send({ data: product, message: "successfully created product" })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: "Failed to create product" })
  }
}

/**
 *  update existing product
 */
const update = async (req, res) => {
  try {
    const { id = null } = req.params
    const body = req.body
    console.log(req.params)

    //checking if product exists or not
    const oldProduct = await Product.findOne({ where: { id } })
    if (!oldProduct) {
      return res.status(404).send({ message: "Product not found" })
    }

    oldProduct.name = body.name || oldProduct.name
    oldProduct.description = body.description || oldProduct.description
    oldProduct.price = body.price || oldProduct.price
    oldProduct.category = body.category || oldProduct.category
    oldProduct.stock = body.stock !== undefined ? body.stock : oldProduct.stock
    oldProduct.image = body.image || oldProduct.image
    oldProduct.isActive = body.isActive !== undefined ? body.isActive : oldProduct.isActive

    await oldProduct.save()
    res.status(200).send({ data: oldProduct, message: "product updated successfully" })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: "Failed to update product" })
  }
}

/**
 *  delete product
 */
const deleteById = async (req, res) => {
  try {
    const { id = null } = req.params
    const oldProduct = await Product.findOne({ where: { id } })

    //checking if product exists or not
    if (!oldProduct) {
      return res.status(404).send({ message: "Product not found" })
    }

    await oldProduct.destroy()
    res.status(200).send({ message: "product deleted successfully" })
  } catch (e) {
    res.status(500).json({ error: "Failed to delete product" })
  }
}

/**
 *  fetch product by id
 */
const getById = async (req, res) => {
  try {
    const { id = null } = req.params
    const product = await Product.findOne({ where: { id } })
    if (!product) {
      return res.status(404).send({ message: "Product not found" })
    }
    res.status(200).send({ message: "product fetched successfully", data: product })
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch product" })
  }
}

/**
 *  fetch products by category
 */
const getByCategory = async (req, res) => {
  try {
    const { category } = req.params
    const products = await Product.findAll({ where: { category, isActive: true } })
    res.status(200).send({ message: "products fetched successfully", data: products })
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch products by category" })
  }
}

/**
 *  fetch active products only
 */
const getActive = async (req, res) => {
  try {
    const products = await Product.findAll({ where: { isActive: true } })
    res.status(200).send({ message: "active products fetched successfully", data: products })
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch active products" })
  }
}

export const productController = {
  getAll,
  create,
  getById,
  deleteById,
  update,
  getByCategory,
  getActive,
}