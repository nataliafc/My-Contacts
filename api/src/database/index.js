const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    port: 5432,
    user: 'root',
    password: 'root',
    database: 'mycontacts'
});

client.connect()

exports.query = async (query, values) => {
    const result = await client.query(query, values)
    return result.rows
}


// se der algum erro ao executar com <node src/database/index.js>, finaliza a tarefa que executa o postgres no gerenciador de tarefas