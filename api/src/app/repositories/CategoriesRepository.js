const db = require("../../database");

class CategoriesRepository {
    async findAll(orderBy = "ASC") {
        // o select já traz a lista em ordem alfabética do database se colocar o ORDER BY name. se quiser colocar ascendente ou descendente, ASC ou DESC
        const direction = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";
        const rows = await db.query(
            `SELECT * FROM categories ORDER BY name ${direction}`
        );
        return rows;
    }
    async findById(id) {
        const [row] = await db.query("SELECT * FROM categories WHERE id = $1", [
            id,
        ]);
        return row;
    }
    async findByName(name) {
        const [row] = await db.query("SELECT * FROM categories WHERE name = $1", [
            name,
        ]);
        return row;
    }
    async create({ name }) {
        // para usar valor de variável no postgres, se usa o binding, que é colocar $ e o número da posição onde o dado vai ser inserido na tabela
        // se inserir a variável ${}, pode acontecer de o usuário forçar um sql injection
        // depois da query, a gente coloca dentro de um array os nomes das colunas onde os itens serão inseridos

        const [row] = await db.query(
            `
            INSERT INTO categories(name)
            VALUES($1)
            RETURNING *
        `,
            [name]
        );

        return row;
    }
    async update(id, { name }) {
        const [row] = await db.query(
            `
            UPDATE categories
            SET name = $1
            WHERE id = $2
            RETURNING *
       `,
            [name, id]
        );

        return row;
    }
    async delete(id) {
        const deleteOp = await db.query("DELETE FROM categories WHERE id = $1", [
            id,
        ]);
        return deleteOp;
    }
}

module.exports = new CategoriesRepository();