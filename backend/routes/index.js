const { Router } = require("express");
const { authRoutes } = require("./authRoutes");
const auth = require("../middleware/auth");
const { employeeRoutes } = require("./employeeRoutes");

const router  = Router()

router.use(
  "/auth",
  authRoutes
  /* 
  #swagger.tags = ['Auth']*/
);

router.use(

  employeeRoutes
  /* 
  #swagger.tags = ['Employee']
  #swagger.security = [{
            "bearerAuth": []
}]
  */
);

module.exports.router = router;