let mysql = require("mysql2");
const db = require('../models/index');
const DimitrisGioulisStudents = db.sequelize.models.DimitrisGioulisStudents;
const express = require('express');
const router = express.Router();

// Get Find All
router.get('/', async function (req, res) {
  let students = await DimitrisGioulisStudents.findAll();
  res.render('students/list',
    {
      title: 'Students Page',
      list: students
    });
});

// GET create 
router.get('/create', (req, res) => {
  res.render('students/create',
    {
      title: 'New Student Page',
      message: 'New Student'
    });
});

// POST create 
router.post('/create', async (req, res) => {
  await DimitrisGioulisStudents.create(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      tuitionFees: req.body.tuitionFees
    });
  res.redirect('/students')
});

// Delete 
router.get('/delete', async (req, res) => {
  await DimitrisGioulisStudents.destroy({
    where: {
      id: req.query.id
    },
  });
  res.render('students/deleted', {
    title: 'Students Delete Page',
    message: `You deleted student with id: ${req.query.id}`
  });
});

// Update GET
router.get('/edit', async (req, res) => {
  let student = await DimitrisGioulisStudents.findAll({
    where: {
      id: req.query.id,
    }
  });
  res.render('students/edit', {
    title: 'Student Edit Page',
    message: 'Update the Student',
    id: req.query.id,
    firstName: student[0].dataValues.firstName,
    lastName: student[0].dataValues.lastName,
    dateOfBirth: student[0].dataValues.dateOfBirth,
    tuitionFees: student[0].dataValues.tuitionFees
  });
});

//Update POST
router.post('/edit', async function (req, res) {
  await DimitrisGioulisStudents.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      tuitionFees: req.body.tuitionFees
    },
    {
      where: {
        id: req.body.id
      }
    });
  res.redirect('/students');
});

module.exports = router;