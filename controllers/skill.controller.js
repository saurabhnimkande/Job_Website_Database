const express= require('express');

const Skill= require("../models/skill.model");

const router=express.Router();


router.post("", async (req, res) => {
    try {
        const skill= await Skill.create(req.body);
        res.status(201).send(skill);
    } catch (err) {
        res.status(500).json({message: err.message,status:"Failed"});
    }
       
})


router.get("", async (req, res) => {
    try {
        const skills= await Skill.find().lean().exec();
        res.status(200).send(skills);
    } catch (err) {
        res.status(500).json({message: err.message,status:"Failed"});
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const skill = await Skill.findByIdAndDelete(req.params.id).lean().exec();
        res.status(200).send(skill);
    } catch (err) {
        res.status(500).json({message: err.message,status:"Failed"});
    }
})


module.exports=router;