export class GoalService {

    private static instance: GoalService;
    private static goals = 'Goals';
    private static records = 'Records';

    constructor() {
        if (GoalService.instance) {
            return GoalService.instance;
        }

        GoalService.instance = this;
    }

    public static getInstance(): GoalService {
        return this.instance;
    }

    public static setGoals(goals): GoalService {
        this.goals = goals;
        return 0;
    }

    public static getGoals() {
        return this.goals;
    }

    public static getRecords() {
        return this.records;
    }


}