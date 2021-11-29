const mongoose = require('mongoose');

const jobSchema= new mongoose.Schema({
    company_name:{type:"String",required:true},
    work_type:{type:"String",required:true},
    notice_period:{type:"String",required:true},
    city:{type:"String",required:true},
    rating:{type:"Number",required:true},
    company_details:{type:"String",required:true},
    no_of_jobs:{type:"Number",required:true},
    skills_id:[{type:mongoose.Schema.Types.ObjectId,
    ref:"skill",
    required:true}],
}, {
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("job",jobSchema);