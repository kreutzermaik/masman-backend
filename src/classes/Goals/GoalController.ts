import {GoalService} from "../../services/GoalService";

class GoalController {

    public getAllGoals() {

        let nextUpdate = null;
        let now = new Date();

        let goals = GoalService.getGoals();
        let records = GoalService.getRecords();

        if(now.getHours() == 15) {
            console.log(goals + records);
        }

        else {
            console.log(goals + records);
        }
    }

}

export default new GoalController();