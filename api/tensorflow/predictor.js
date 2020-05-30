const tf = require('@tensorflow/tfjs');
var express = require('express');
const router= express.Router();
const MODEL_URL = './models/model_1/model.json';
const MODEL_URL2 = './models/model_1/group1-shard1of1.bin';

async function Model(params){
    const model = await tf.loadLayersModel('http://localhost:9000/model/download');
    console.log("Model loaded");
    //const inputData = tf.tensor2d([[0.878873,0.579114,0.325688,0.188825,0.224696,0.596491,0.444705,0.852819,0.813248,0.772136,0.112255,0.055336,0.242188,0.693038,0.746835]], [1, 15]);
    const inputData = tf.tensor2d(params, [1, 5]);
    model.predict(inputData).array().then((res)=>{console.log(res)});
    const results = tf.variable(model.predict(inputData)).array().then((res)=>{return res});
    console.log(results);
    return results
}



router.get('/predict', (req,res,next)=>{
    //let model = loadModel();
    //let model = await tf.loadLayersModel('./../models/model_1/model.json');
    let str = req.query.param;
    let num = str.split(',');
    let param = [];
    num.map((x)=>{
        param.push(parseFloat(x));
        console.log(param)
    });
    let params = [param];
    //console.log(params);
    /*const inputData = tf.tensor2d([[0.878873, 0.579114, 0.325688, 0.188825, 0.224696, 0.596491, 0.444705, 0.852819, 0.813248, 0.772136, 0.112255, 0.055336, 0.242188, 0.693038, 0.746835]], [1, 15]);
// Get the highest confidence prediction from our model
    const result = model.predict(inputData);*/
    //console.log(typeof params)
    const results = Model(params).then((fin)=>{
        res.status(200).send(String(fin));
    });
});

router.get('/download', function(req, res){
    const file = MODEL_URL;
    res.download(file); // Set disposition and send it.
});

router.get('/group1-shard1of1.bin', function(req, res){
    const file = MODEL_URL2;
    res.download(file); // Set disposition and send it.
});

module.exports=router

/*
"Flow_to_EQ"
"EQ_COD"
"D_COD_ON"
"BT_C_MLSS"
"BT_N_MLSS"
"D_SS"
"EQ_N"
"BT_C_N"
"BT_N_N"
"D_N"
"EQ_PH"
"BT_N_DO"
"F/M"
"MA"
"t-1"
*/