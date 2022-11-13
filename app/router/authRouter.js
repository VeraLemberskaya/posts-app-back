const router = require("express").Router();

const { login, register, refresh } = require("../controllers/authController");
const {
  registerSchema,
  loginSchema,
  refreshSchema,
} = require("../validation/authValidator");
const validateRequest = require("../middleware/validateRequest");

router.post("/register", validateRequest(registerSchema, "body"), register);

router.post("/login", validateRequest(loginSchema, "body"), login);

router.post("/refresh", validateRequest(refreshSchema, "body"), refresh);

module.exports = router;
