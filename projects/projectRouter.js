const express =require('express');

const projectMethod=require('../data/helpers/projectModel');

const router= express.Router();

router.get('/:id', (req,res)=>{
    const {id} = req.params.id;
    const {body} =req.body;
    projectMethod.get(id)
    .then(projects=>{res.status(200).json(body)})
    .catch(err=> res.status(500).json({error: 'Something wrong on our side, please try again later'}))
});

router.post('/', (req,res)=>{
    projectMethod.insert(req.body)
    .then(u=> res.status(200).json(u))
    .catch(err=> res.status(500).json(err))
});

router.delete('/:id', (req,res)=>{
    const {id}= req.params.id;
    projectMethod.remove(id)
    .then(u=> res.status(200).json({message: "Successfully delete the project"}))
    .catch(err=> res.status(500).json(err))
});

router.put('/:id', (req,res)=>{
    const {id}= req.params.id;
    const updatePro=req.body;
    projectMethod.update(id, updatePro)
    .then(u=> res.status(200).json(u))
    .catch(e=> res.status(500).json(e))
})

// custom middleware


module.exports= router;