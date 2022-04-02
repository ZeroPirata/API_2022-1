import "reflect-metadata"
import { DataSource } from "typeorm"
import { USER } from "./entity/user"
import { Acesso } from "./entity/acesso_sistema"
import { Documentos, Endereco, Escolaridade, Idiomas, Telefone } from "./entity/user_details"
import { Cargo, Contrato, Departamento, Empresa_Contrante, Empresa_PJ } from "./entity/empresa"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "Fatec_Ionic",
    password: "123456",
    database: "fatec_ionic",
    synchronize: true,
    logging: false,
    entities: [USER, Acesso, Escolaridade, Idiomas, Documentos, Telefone, Endereco, Contrato, Empresa_Contrante, Empresa_PJ, Cargo, Departamento],
    migrations: [],
    subscribers: [],
})