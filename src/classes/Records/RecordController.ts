import RecordQuery from "./RecordQuery";

class RecordController {

    public async getRecords() {
        try {
            let records = await RecordQuery.getAll();
            return records;

        } catch (error) {
            return error;
        }
    }

    public async getExerciseId() {
        try {
            let exerciseId = await RecordQuery.getExerciseId();
            return exerciseId;

        } catch (error) {
            return error;
        }
    }

    public async postRecords(req) {
        try {
            let exerciseId = await this.getExerciseId();
            let post = await RecordQuery.post(req);
            return post;

        } catch (error) {
            return error;
        }
    }

}

export default new RecordController();