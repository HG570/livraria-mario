'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    static associate(models) {
      Livro.belongsTo(models.Editora, {
        foreignKey: 'fk_editora',
        as: 'editora'
      });
      // Definindo o relacionamento com a tabela Categoria
      Livro.belongsTo(models.Categoria, {
        foreignKey: 'fk_categoria',
        as: 'categoria'
      });
      // Definindo o relacionamento com a tabela Autor
      Livro.belongsTo(models.Autor, {
        foreignKey: 'fk_autor',
        as: 'autor'
      });
    }
  }
  Livro.init({
    fk_editora: DataTypes.INTEGER,
    fk_categoria: DataTypes.INTEGER,
    fk_autor: DataTypes.INTEGER,
    titulo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Livro',
  });
  return Livro;
};