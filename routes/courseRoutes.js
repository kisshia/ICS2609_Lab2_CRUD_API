const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/courseController');

// CRUD for courses
router.get('/', ctrl.getCourses);        // GET all courses
router.get('/:id', ctrl.getCourseById); // GET by ID
router.post('/', ctrl.createCourse);    // CREATE course
router.put('/:id', ctrl.updateCourse);  // UPDATE course
router.delete('/:id', ctrl.deleteCourse);// DELETE course

module.exports = router;
