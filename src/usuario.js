// Definición del modelo de usuario
const { DataTypes } = require("sequelize");
const bd = require("./database");

const Usuario = bd.define("Usuario",
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "usuarios",
        timestamps: false
    }
);
module.exports = Usuario;