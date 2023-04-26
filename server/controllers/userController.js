import { getUsersModel } from "../models/userModel.js";

class userController {
    async check(request, response, next) {
        try {
            const users = await getUsersModel();
            return response.json(users);
        } catch (error) {
            response.json(error);
        }
    }
}

export default new userController();
