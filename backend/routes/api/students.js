const express = require('express');
const Student = require('../../models/Student');
const router = express.Router();

router.get('/test', (req, res) => res.send('Student route testing'));

//get all students:
router.get('/', (req, res) => {
    Student.find()
        .then(student => res.json(student))
        .catch(err => res.status(404).json({ nostudentsfound: 'No students record found' }));
})

//get student by id.
router.get('/:id', (req, res) => {
    Student.findById(req.params.id)
        .then(student => res.json(student))
        .catch(err => res.status(404).json({ nonstudentfound: 'No student record foound' }));
})

//add a new student.
router.post('/', (req, res) => {
    Student.create(req.body)
        .then(student => res.json({ msg: 'Student added Successfuly' }))
        .catch(err => res.status(404).json({ err: 'Unable to update the student to the database' }));
})

//update the student.
router.put('/:id', (req, res) => {
    Student.findByIdAndUpdate(req.params.id, req.body)
        .then(student => res.json({ ms: "Updated Successfuly" }))
        .catch(err => res.status(404)).json({ error: 'Unable to update the student to the database' });
})
//delete student record.
router.delete('/:id', (req, res) => {
    Student.findByIdAndDelete(req.params.id, req.body)
        .then(student => res.json({ msg: 'Student is deleted Successfuly' }))
        .catch(err => res.status(404).json({ err: 'Student Deleted Successfuly' }));
})

module.exports = router;