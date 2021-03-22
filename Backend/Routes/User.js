const express = require("express");
const router = express.Router();

const {getAllUsers,getUserById,createTransaction,createUser}=require("../Controllers/User")





router.get(
  "/getAllCustomer",
  getAllUsers
);
router.post(
    "/createCustomer",
    createUser
  );
router.get(
    "/getUserById",
    getUserById
  );
  router.post(
    "/createTransaction",
    createTransaction
  );

module.exports = router;