import express from "express";
import PlanQuery from "../queries/PlanQuery";
const PlanRouter = express.Router();

PlanRouter.get("/plans/:userId", async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await PlanQuery.getAll(req.params.userId));
    }
    catch(error) {
        res.status(400).json({msg: error})
    }
});

PlanRouter.post("/plans/:userId", async (req: express.Request, res: express.Response) => {
    try {
        await PlanQuery.post(req.body.category, req.body.userId);
        res.status(200).send({msg: "Added plan"});
    }
    catch(error) {
        res.status(400).json({msg: error});
    }
});

module.exports = PlanRouter;
