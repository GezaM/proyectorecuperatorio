module.exports = (sequelize, dataTypes) => {
    let alias = 'Series'
    
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        genre_id : {
            type: dataTypes.INTEGER,
        },
        title: {
            type: dataTypes.STRING(500)
        }, 
        release_date: {
            type: dataTypes.DATE
        },         
        end_date: {
            type: dataTypes.DATE
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
        }
    }

    let config = {
        tableName: 'Series',
        timestamps: false
    }
    alias.associate = function () {
        alias.belongsTo(Genre, {
            as: "Genre",
            foreignKey: "genre_id",
        })}
    alias.associate = function () {
        alias.hasMany(Season, {
            as: "Season",
            foreignKey: "serie_id",
        })}

    const Serie = sequelize.define(alias,cols,config)
    
    return Serie
}
