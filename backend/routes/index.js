const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router({
  caseSensitive: true, // Pastikan ini sudah terdefinisi jika menggunakan.
});

router.get("/contact", Controller.GetContact);
router.post("/contact", Controller.AddContact);
router.put("/contact/:id", Controller.EditContact);
router.delete("/contact/:id", Controller.DeleteContact);

module.exports = router;
