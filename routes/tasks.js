const express = require('express');
const Task = require('../models/Task');


const router = express.Router();

const { protect } = require('../middleware/auth');

const getYesterday = () => {

    const today = new Date();
    const utcToday = new Date(today.toUTCString());
    utcToday.setHours(utcToday.getHours()-7);

    const pstToday = new Date(utcToday);
    const day = pstToday.getDay();

    let yesterday;

    if(day === 1) {
        yesterday = new Date(new Date(utcToday).setDate(new Date(utcToday).getDate() - 3)).toISOString().split('T')[0];
    } else {
        yesterday = new Date(new Date(utcToday).setDate(new Date(utcToday).getDate() - 1)).toISOString().split('T')[0];
    }

    return yesterday
}

router.get('/test', (req, res) => {
    try {

        const yesterday = getYesterday();

        const today = new Date();
        const utcToday = new Date(today.toUTCString());
        utcToday.setHours(utcToday.getHours()-7);

        const pstToday = new Date(utcToday);

        const pstYesterday = new Date(new Date(utcToday).setDate(new Date(utcToday).getDate() - 1)).toISOString().split('T')[0];


        res.json({ yesterday, pstToday, pstYesterday })

        

    } catch (err) {
        console.log(err)
    }
})


// GET api/tasks  [Get all tasks from a user from last day]
router.get('/lastday/:id', async (req, res) => {
    try {

        const yesterday = getYesterday();

        const tasks = await Task.find({ user: req.params.id, date: yesterday });


        res.status(200).json({tasks, date: yesterday });
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: 'Something went wrong'});
    }
})


router.get('/', async (req, res) => {
    try {

        const yesterday = getYesterday();

        const tasks = await Task.find({ date: yesterday });

        res.status(200).json({tasks, date: yesterday });

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