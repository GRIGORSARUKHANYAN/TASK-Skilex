import express from "express";
import CombinationsController from "../controllers/combination.controller.js";
const router = express.Router();
const combinationsController = new CombinationsController();

router.post("/combination", combinationsController.createCombination);

export default router;
