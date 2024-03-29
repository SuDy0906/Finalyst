import express from "express";
import KPI from "../model/KPI.js";
const router = express.Router();

//mongoose = ODM (Object Documentation Mapping) helps in setting a model to grab database


router.get("/kpis", async(req,res)=>{
    try{
        const kpis = await KPI.find();
        res.status(200).json(kpis);
    } catch(error){
        res.status(404).json({message: error.message});
    }
})

export default router;