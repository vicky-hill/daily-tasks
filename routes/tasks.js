const express = require('express');
const Task = require('../models/Task');



const router = express.Router();

const { protect } = require('../middleware/auth');


// GET api/tasks  [Get all tasks from a user from last day]
router.get('/lastday/:id', async (req, res) => {
    try {

        const today = new Date();
		const lastDay = new Date();

		lastDay.setDate(lastDay.getDate() - 1);
		lastDay.setHours(0,0,0,0);

        if(today.getDay() === 1) {
            lastDay.setDate(lastDay.getDate() - 2);
        }

        const tasks = await Task.find({ user: req.params.id, date: { $gt: lastDay } });


        res.status(200).json({tasks, date: lastDay });
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: 'Something went wrong'});
    }
})


router.get('/', async (req, res) => {
    try {

        const today = new Date();
		const lastDay = new Date();

		lastDay.setDate(lastDay.getDate() - 1);
		lastDay.setHours(0,0,0,0);

        if(today.getDay() === 1) {
            lastDay.setDate(lastDay.getDate() - 2);
          }

        const tasks = await Task.find({ date: { $gt: lastDay } });

        res.status(200).json({tasks, date: lastDay });

    } catch (err) {
        console.log(err);
        res.status(500).json({msg: 'Something went wrong'});
    }
})


// POST api/tasks  [Save a new task]
router.post('/', async (req, res) => {
    try {
        const reqTask = { 
            name: req.body.name,
            user: req.body.user
        }

        const task = await Task.create(reqTask);
        res.status(201).json(task);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: 'Something went wrong'});
    }
})


// PUT api/tasks/:id  [Update a list]
router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});

        if(!task) {
            return res.status(404).json({msg: "Task not found"});
        }

        res.status(200).json(task);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: 'Something went wrong'});
    }
})

module.exports = router;