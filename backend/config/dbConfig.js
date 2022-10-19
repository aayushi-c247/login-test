module.exports = {
    HOST: process.env.HOST,
    USER: "root",
    PASSWORD: "",
    DB: process.env.DB,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idel: 10000
    }
}