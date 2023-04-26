import db from "../db.js";

export async function getUsersModel() {
    try {
        const data = await db.query("SELECT * FROM users");
        return data.rows;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
