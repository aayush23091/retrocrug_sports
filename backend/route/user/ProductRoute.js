import express from "express"
import { productController } from "../../controller/index.js"

const router = express.Router()

router.get("/", productController.getAll)
router.get("/active", productController.getActive)
router.get("/category/:category", productController.getByCategory)
router.post("/", productController.create)
router.patch("/:id", productController.update)
router.get("/:id", productController.getById)
router.delete("/:id", productController.deleteById)

export { router as productRouter }
