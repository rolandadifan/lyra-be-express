module.exports = (sequelize, DataTypes) => {
    const Music = sequelize.define('Music', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false 
          },
        judul: DataTypes.STRING,
        singer: DataTypes.STRING,
        genre: DataTypes.STRING,
        duration: DataTypes.STRING,
        year: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        music: DataTypes.STRING,
        createdAt:{
            field: 'created_at', 
            type: DataTypes.DATE
        },
        updatedAt:{
            field: 'updated_at', 
            type: DataTypes.DATE
        },
    },{
        tableName: 'musics',
        timestamps: true
    })
    return Music;
}