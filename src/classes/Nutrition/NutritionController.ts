import NutritionQuery from "./NutritionQuery";

class NutritionController {

    public async getRecipes() {
        try {
            let recipes = await NutritionQuery.getAll();
            return recipes;

        } catch (error) {
            return error;
        }
    }

}

export default new NutritionController();