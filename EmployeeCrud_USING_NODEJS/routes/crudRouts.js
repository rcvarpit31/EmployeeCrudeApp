const express = require('express');
const {
     getAllEmployee,getSigleEmployee,
     deleteSigleEmployee,updateSigleEmployee,createEmployee } = require('../controller/employeeContoller');
const router =  express.Router();

router.post("/register", createEmployee);
router.get("/getall",getAllEmployee);
router.get("/:id",getSigleEmployee);
router.delete("/:id",deleteSigleEmployee);
router.put("/:id",updateSigleEmployee);






module.exports = router ;