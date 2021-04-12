import pool from '../../config/db.config';

class GoalDAO {

    public async getGoals() {
        try {
            const client = await pool.connect();
            const sql = "SELECT * FROM goals";
            const { rows } = await client.query(sql);
            const goals = rows;

            client.release();

            return new Promise((resolve, reject) => {
                resolve(goals);
            })

        } catch (error) {
            return error;
        }
    }

}

export default new GoalDAO();
