const { Router } = require("express");
const controller = require("../controllers/loginController");
const {
  validatePassword,
  validateEmail,
} = require("../middlewares/userValidate");

const router = Router();

router.post("/", validatePassword, validateEmail, controller.login);

module.exports = router;
