import {
    createRouteModel,
    getOneRouteModel,
    getRoutesModel,
} from "../models/routeModel.js";
import ApiError from "../error/ApiError.js";

class routeController {
    async getRoutes(request, response, next) {
        try {
            const routes = await getRoutesModel();
            return response.json(routes);
        } catch (error) {
            return next(ApiError.badRequest(error.message));
        }
    }

    async getOneRoutes(request, response, next) {
        try {
            const id = request.params.id;
            const route = await getOneRouteModel(id);
            return response.json(route);
        } catch (error) {
            return next(ApiError.badRequest(error.message));
        }
    }

    async postRoutes(request, response, next) {
        try {
            const {
                to_station,
                from_station,
                to_city,
                from_city,
                to_time,
                from_time,
                train_id,
            } = request.body;
            const route = await createRouteModel({
                to_station,
                from_station,
                to_city,
                from_city,
                to_time,
                from_time,
                train_id,
            });
            return response.json(route);
        } catch (error) {
            return next(ApiError.badRequest(error.message));
        }
    }
}

export default new routeController();
