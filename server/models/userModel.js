import db from "../db.js";

export async function getOneUserModel(login) {
    try {
        const data = await db.query("SELECT * FROM users WHERE login=$1", [
            login,
        ]);
        return data.rows;
    } catch (error) {
        throw new Error(error);
    }
}

export async function createUserModel({ login, password, role }) {
    try {
        const data = await db.query(
            "INSERT INTO users (login, password, role) VALUES($1, $2, $3) RETURNING *",
            [login, password, role]
        );
        return data.rows;
    } catch (error) {
        throw new Error(error);
    }
}
