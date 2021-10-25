import express from "express";
const router = express.Router();
import WorkoutController from "./WorkoutController";

router.get("/workouts/:week/:workoutId", (req: express.Request, res: express.Response) => {
    WorkoutController.getWorkouts(req.params.week, req.params.workoutId).then((workout) => {
        res.status(200).json(workout);
    })
        .catch((error) => {
            res.status(400).json({msg: error})
        })
});

module.exports = router;
