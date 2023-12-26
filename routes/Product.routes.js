const express = require("express")
const router = express.Router()

const { ProductCotroller } = require("../controller/Product.controller")

router.get("/", ProductCotroller.getAll)
router.get("/:id", ProductCotroller.getByID)
router.post("/", ProductCotroller.add)
router.put("/:id", ProductCotroller.edit)
router.delete("/:id", ProductCotroller.delete)

module.exports = router