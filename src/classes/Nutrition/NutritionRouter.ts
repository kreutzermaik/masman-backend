import express from "express";
import NutritionController from "./NutritionController";
const router = express.Router();

router.get("/nutrition", async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await NutritionController.getRecipes());
    }
    catch(error) {
        res.status(400).json({msg: error})
    }
});

module.exports = router;
