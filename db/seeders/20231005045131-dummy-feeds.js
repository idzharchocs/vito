'use strict';

/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Feeds', [{
      id: uuidv4(),
      title: 'Title Test 1',
      content: 'Content test 1',
      category: 'Category Test 1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      id: uuidv4(),
      title: 'Title Test 2',
      content: 'Content test 2',
      category: 'Category Test 2',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    // untuk mereset
   return queryInterface.dropTable('Feeds');
  }
};
