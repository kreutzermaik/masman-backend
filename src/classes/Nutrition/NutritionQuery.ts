import pool from '../../config/db.config';

class NutritionQuery {

    public async getAll() {
        try {
            const client = await pool.connect();
            //const sql = "SELECT * FROM nutrition INNER JOIN nutrition_values ON nutrition_values.id = nutrition.id";
            const sql = "SELECT * FROM punit";
            const { rows } = await client.query(sql);

            client.release();
            return rows;

        } catch (error) {
            return error;
        }
    }

}

export default new NutritionQuery();
