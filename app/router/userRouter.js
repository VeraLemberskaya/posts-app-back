const router = require("express").Router();

const {
  getById,
  getAll,
  getCurrentUser,
  updateCurrentUser,
  deleteCurrentUser,
} = require("../controllers/userController");
const { getByIdSchema, updateSchema } = require("../validation/userValidator");
const checkAuth = require("../middleware/checkAuth");
const validateRequest = require("../middleware/validateRequest");

router.get("/", checkAuth, getCurrentUser);
router.put(
  "/",
  checkAuth,
  validateRequest(updateSchema, "body"),
  updateCurrentUser
);
router.delete("/", checkAuth, deleteCurrentUser);

router.get("/all", getAll);
router.get("/:id", validateRequest(getByIdSchema, "params"), getById);

module.exports = router;
