const express=require('express');

const Job= require("../models/job.model")

const router=express.Router();

router.post("", async (req, res) => {
    try {
        const job= await Job.create(req.body);
        res.status(201).send(job);
    } catch (err) {
        res.status(500).json({message: err.message,status:"Failed"});
    }
       
})

router.get("", async (req, res) => {
    try {
        const jobs= await Job.find().populate('skills_id').lean().exec();
        res.status(200).send(jobs);
    } catch (err) {
        res.status(500).json({message: err.message,status:"Failed"});
    }
})

router.get("/:id/bangalore", async (req, res) => {
    try {
        const jobs= await Job.find({city:"bangalore",skills_id:req.params.id}).populate('skills_id').lean().exec();

        res.status(200).send(jobs)
    } catch (err) {
        res.status(500).json({message: err.message,status:"Failed"});
    }
})

router.get("/:id/mumbai", async (req, res) => {
    try {
        const jobs= await Job.find({city:"Mumbai",skills_id:req.params.id}).populate('skills_id').lean().exec();

        res.status(200).send(jobs)
    } catch (err) {
        res.status(500).json({message: err.message,status:"Failed"});
    }
})

router.get('/online', async (req, res) => {
    try {
        const jobs = await Job.find({work_type:"online"}).populate("skills_id").lean().exec();
        
        res.status(200).send(jobs);
    } catch (err) {
        res.status(500).json({message: err.message,status:"Failed"});
    }
})

router.get('/2monthsnotice', async (req, res) => {
    try {
        const jobs = await Job.find({notice_period:"2Months"}).populate("skills_id").lean().exec();
        
        res.status(200).send(jobs);
    } catch (err) {
        res.status(500).json({message: err.message,status:"Failed"});
    }
})


router.get('/ratings', async (req, res) => {
    try {
        const jobs = await Job.find().populate("skills_id").sort({rating:-1}).lean().exec();
        
        res.status(200).send(jobs);
    } catch (err) {
        res.status(500).json({message: err.message,status:"Failed"});
    }
})

router.get('/:id', async (req, res) => {
    try {
        const job = await Job.findOne({_id:req.params.id}).populate("skills_id").lean().exec();
        
        res.status(200).send(job);
    } catch (err) {
        res.status(500).json({message: err.message,status:"Failed"});
    }
})

router.get('/openings/max', async (req, res) => {
    try {
        const jobs= await Job.findOne().populate('skills_id').sort({no_of_jobs:-1}).lean().exec();;
        
        res.status(200).send(jobs);
    } catch (err) {
        res.status(500).json({message: err.message,status:"Failed"});
    }
})


router.delete("/jobs/:id", async (req, res) => {
    try {
        const job = await Job.findByIdAndDelete(req.params.id).lean().exec();
        res.status(200).send(job);
    } catch (err) {
        res.status(500).json({message: err.message,status:"Failed"});
    }
})

module.exports=router;