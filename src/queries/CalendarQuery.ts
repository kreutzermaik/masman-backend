import pool from '../config/db.config';

class CalendarQuery {

    public async getAll(category, userId) {
        try {
            const client = await pool.connect();
            const sql = `SELECT * FROM weekly_list WHERE category = '${category}' AND user_id = '${userId}'`;
            const { rows } = await client.query(sql);

            client.release();
            return rows;
        } catch (error) {
            return error;
        }
    }

    public async post(date, category, kw, done, userId) {
        try {
            const client = await pool.connect();
            const sql = `INSERT INTO weekly_list(date, category, kw, done, user_id) 
                            VALUES($1, $2, $3, $4, $5)`;
            const values = [date, category, kw, done, userId]

            const { rows } = await client.query(sql, values);

            client.release();
            return rows;
        } catch (error) {
            console.log(error)
            return error;
        }
    }
}

export default new CalendarQuery();