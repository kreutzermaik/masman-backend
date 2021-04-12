import pool from '../../config/db.config';

class RecordQuery {

    public async getAll() {
        try {
            const client = await pool.connect();
            const sql = "SELECT * FROM records";
            const { rows } = await client.query(sql);

            client.release();
            return rows[0];

        } catch (error) {
            return error;
        }
    }

    public async getExerciseId() {
        try {
            const client = await pool.connect();
            const sql = "SELECT exerciseid FROM records";
            const { rows } = await client.query(sql);

            client.release();
            return rows[0];

        } catch (error) {
            return error;
        }
    }

    public async post(req) {
        try {
            const client = await pool.connect();
            let exerciseId = await this.getExerciseId();
            let sql = `INSERT INTO records VALUES('${req.body.id}', '${req.body.name}', '${req.body.date}', 
                           '${req.body.result}', '${exerciseId}', '${req.body.username}')`;
            const { rows } = await client.query(sql);

            client.release();
            return rows[0];

        } catch (error) {
            return error;
        }
    }

}

export default new RecordQuery();
