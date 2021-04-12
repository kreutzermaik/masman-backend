import express from "express";
import RecordController from "./RecordController";
const router = express.Router();

router.get("/records", async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).json(await RecordController.getRecords());
    }
    catch(error) {
        res.status(400).json({msg: error})
    }
});

router.post("/records", async (req: express.Request, res: express.Response) => {
    try {
        console.log('post request called');
        res.status(200).json(await RecordController.postRecords(req));
    }
    catch(error) {
        res.status(400).json({msg: error})
    }
});


module.exports = router;
