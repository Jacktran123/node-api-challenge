const express =require('express');

const actionMethod=require('../data/helpers/actionModel');
const router= express.Router();

router.get('/:id', (req,res)=>{
    const {id}= req.params.id;
    actionMethod.get(id)
    .then(s=> res.status(200).json(s))
    .catch(e=> res.status(500).json({error: "Internal database error"}))
})

router.post('/', (req,res)=>{
    const newAction= req.body;
    actionMethod.insert(newAction)
    .then(e=> res.status(200).json(e))
    .catch(err=> res.status(500).json(err))
})

router.delete('/:id', (req,res)=>{
    const {id}= req.params.id;
    actionMethod.remove(id)
    .then(e=> res.status(200).json(e))
    .catch(err=> res.status(500).json(err))
    
})

router.put('/:id', (req,res)=>{
    const {id}= req.params.id;
    const newAction= req.body;
    actionMethod.update(id,newAction)
    .then(e=> res.status(200).json(e))
    .catch(err=> res.status(500).json(err))
})

module.exports= router;