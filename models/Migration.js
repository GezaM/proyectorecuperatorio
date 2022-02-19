module.exports = (sequelize, dataTypes) => {
    let alias = 'Migrations'

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        migration: {
            type: dataTypes.STRING(255)
        }, 
        batch: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'Migrations',
        timestamps: false
    }

    const Migration = sequelize.define(alias,cols,config)
    
    return Migration
}
