module.exports = (sequelize, dataTypes) => {
    let alias = 'Users'

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255)
        }, 
        email: {
            type: dataTypes.STRING(255)
        }, 
        password: {
            type: dataTypes.STRING(255)
        }, 
        remember_token: {
            type: dataTypes.STRING(100)
        }, 
        price: {
            type: dataTypes.INTEGER
        },         
        created_at:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updated_at:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },         
        rol: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'Users',
        timestamps: false
    }

    const User = sequelize.define(alias,cols,config)
    
    return User
}
