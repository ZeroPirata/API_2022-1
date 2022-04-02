import { AppDataSource } from "./data-source"
import { USER } from "./entity/user"


AppDataSource.initialize().then(async () => {
    console.log("Conectando a database....")

}).catch((err) => {
    console.error("Erro ao iniciar:", err)
})