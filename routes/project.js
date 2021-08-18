const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const { protect } = require('../middleware/auth');

/* ===================================
   GET Request
=================================== */

// GET api/projects 
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();

        res.status(200).json(projects);

    } catch (err) {
        console.log(err);
        res.status(500).json({msg: 'Something went wrong'});
    }
})

// GET api/projects/:id  
router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if(!project) {
            return res.status(404).json({msg: "Project not found"});
        }

        res.status(200).json(project);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: 'Something went wrong'});
    }
});


/* ===================================
   POST Request
=================================== */

// POST api/projects 
router.post('/', async (req, res) => {
    try {
        const reqProject = {
            name: req.body.name
        }

        const newProject = await Project.create(reqProject);

        const project = await Project.findById(newProject._id);

        res.status(201).json(project);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: 'Something went wrong'});
    }
});


/* ===================================
   PUT Request
=================================== */

// PUT api/projects/:id  
router.put('/:id', async (req, res) => {
    try {
        const updateProject = await Project.findByIdAndUpdate(req.params.id, req.body, {new: true});

        if(!updateProject) {
            return res.status(404).json({msg: "Project not found"});
        }

        const project = await Project.findById(updateProject._id);

        res.status(200).json(project);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: 'Something went wrong'});
    }
})


/* ===================================
   DELETE Request
=================================== */

// DELETE api/projects/:id  
router.delete('/:id', protect, async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);

        if(!project) {
            return res.status(404).json({msg: "Project not found"});
        }
    
        res.status(200).json(project)
    } catch (err) {
        res.status(500).json({msg: 'Something went wrong'});
    }
})

module.exports = router;