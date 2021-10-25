import pool from '../config/db.config';

class PlanQuery {

    public async getAll(userId) {
        try {
            const client = await pool.connect();
            const sql = `SELECT * FROM plans WHERE user_id = '${userId}'`;
            const { rows } = await client.query(sql);

            client.release();
            return rows;
        } catch (error) {
            return error;
        }
    }

    public async post(category, userId) {
        try {
            const client = await pool.connect();
            const sql = `INSERT INTO plans(category, user_id) 
                            VALUES($1, $2)`;
            const values = [category, userId]

            const { rows } = await client.query(sql, values);

            client.release();
            return rows;
        } catch (error) {
            console.log(error)
            return error;
        }
    }
}

export default new PlanQuery();