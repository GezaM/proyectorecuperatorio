module.exports = (sequelize, dataTypes) => {
    let alias = 'PasswordResets'

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING(255)
        }, 
        token: {
            type: dataTypes.STRING(255)
        }, 
        created_at:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }

    let config = {
        tableName: 'PasswordResets',
        timestamps: false
    }

    const PasswordReset = sequelize.define(alias,cols,config)
    
    return PasswordReset
}
