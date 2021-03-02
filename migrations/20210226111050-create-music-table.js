'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('musics', {
       id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         primaryKey: true,
         allowNull:false
        },
        judul:{
          type: Sequelize.STRING,
          allowNull: false
        },
        singer:{
          type: Sequelize.STRING,
          allowNull: false
        },
        genre:{
          type: Sequelize.STRING,
          allowNull: false
        },
        duration:{
          type: Sequelize.STRING,
          allowNull: false
        },
        year:{
          type: Sequelize.STRING,
          allowNull: false
        },
        thumbnail:{
          type: Sequelize.STRING,
          allowNull: false
        },
        music:{
          type: Sequelize.STRING,
          allowNull: false
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false
        },
      });
     
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('musics');
     
  }
};
