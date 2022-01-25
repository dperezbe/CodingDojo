const res = require('express/lib/response');
const jokesModel = require('../Models/jokesModel');

exports.alljokes = (req,res) => {
    try {
        jokesModel.find({}).then( data => res.send(data));
    } catch (error) {

    }
}

exports.idjokes = (req,res) => {
    try {
        jokesModel.findById(req.params.id)
        .then(data =>  res.json({data:data, message:null, error:false}))
        .catch(error => res.json({data:null, message:error, error: true}));
       
    } catch (error) {
        res.send('not match id joke');
    }
}

exports.random = (req,res) => {
    try {
        jokesModel.aggregate([{ $sample: { size: 1 } }])
        .then((data) => res.json({ data: data }))
        .catch((err) => res.json({ error: err }));
    } catch (error) {
        
    }
}

exports.create = (req,res) => {
    try {
        let newjoke = new jokesModel(req.body);
        newjoke.save();
        res.send('Chiste guardado correctamente');
    } catch (error) {
        res.send('error');
    }
}

exports.update = (req,res) => {
    try {
        jokesModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then((data) => res.json({ data: data }))
            .catch((err) => res.json({  error: err }));

        console.log("actualiza un joke");
    } catch (error) {
              res.send(error.message);
    }
}


exports.delete = (req,res) => {
    try {
        jokesModel.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ result: result }))
        .catch((error) => res.json({  error: error }));    
    } 
    catch (error) {
        res.send(error.message);
    }
}