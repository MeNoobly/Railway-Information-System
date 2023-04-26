import db from "../db.js";

export async function createRouteModel({
    to_station,
    from_station,
    to_city,
    from_city,
    to_time,
    from_time,
    train_id,
}) {
    try {
        const data = await db.query(
            "INSERT INTO route (to_station, from_station, to_city, from_city, to_time, from_time, train_id) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [
                to_station,
                from_station,
                to_city,
                from_city,
                to_time,
                from_time,
                train_id,
            ]
        );
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getRoutesModel() {
    try {
        const data = await db.query("SELECT * FROM route");
        return data.rows;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getOneRouteModel(id) {
    try {
        const data = await db.query("SELECT * FROM route WHERE id = $1", [id]);
        return data.rows;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function updateRouteModel({
    id,
    to_station,
    from_station,
    to_city,
    from_city,
    to_time,
    from_time,
    train_id,
}) {
    try {
        const data = await db.query(
            "UPDATE route SET to_station = $2, from_station = $3, to_city = $4, from_city = $5 WHERE id = $1 RETURNING *",
            [id, name, surname, username]
        );
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function deleteRouteModel({
    to_station,
    from_station,
    to_city,
    from_city,
    to_time,
    from_time,
    train_id,
}) {
    try {
        const data = await db.query(
            "INSERT INTO route (to_station, from_station, to_city, from_city, to_time, from_time, train_id) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [
                to_station,
                from_station,
                to_city,
                from_city,
                to_time,
                from_time,
                train_id,
            ]
        );
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}
