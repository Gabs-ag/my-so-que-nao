// 1 - Importar o sequelize
const sequelize = require('sequelize')

// 2 - Elencar os dados para conexão com o BD
const config = {
    username:"root",
    password:"GABIreis1234",
    host:"localhost",
    port:3306,
    dialect:"mysql",
    database:"osmaker"
}

// 3 - Criar a conexão com o banco!
const conexao = new sequelize(config)

// 4 - Realizar uma consulta!!!
let resultado = conexao.query("select * from funcionarios");
resultado.then(
    (dados)=>{console.log(dados)}
)