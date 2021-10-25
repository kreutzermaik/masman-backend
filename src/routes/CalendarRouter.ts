import express from "express";
import CalendarQuery from "../queries/CalendarQuery";
const CalendarRouter = express.Router();

CalendarRouter.get("/plan/:category/:userId", async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await CalendarQuery.getAll(req.params.category, req.params.userId));
    }
    catch(error) {
        res.status(400).json({msg: error})
    }
});

CalendarRouter.post("/plan/:category/:userId", async (req: express.Request, res: express.Response) => {
    try {
        await CalendarQuery.post(req.body.date, req.body.category, req.body.kw, req.body.done, req.body.userId);
        res.status(200).send({msg: "Added day"});
    }
    catch(error) {
        res.status(400).json({msg: error});
    }
});

module.exports = CalendarRouter;
