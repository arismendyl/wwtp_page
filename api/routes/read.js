const express= require("express");
const router= express.Router();


const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'ywdqmetqjymdsv',
    host: 'ec2-54-210-128-153.compute-1.amazonaws.com',
    database: 'dc33ue2c5evg3e',
    password: 'f9f97a9ac26e219bc5149479ab8def127bf3190454fc37f24a6a1786b31cd068',
    port: '5432',
    ssl: true
})

router.get('/',async (req,res)=>{
    const rqst = await pool.query('SELECT * FROM data')
    res.json(rqst.rows);
})


router.get('/columns',async (req,res)=>{
    const rqst = await pool.query("SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N\'data\' ")
    res.json(rqst.rows);
})

router.get('/model',async (req,res)=>{
    const rqst = await pool.query('SELECT * FROM model')
    res.json(rqst.rows);
})

router.get('/decomposition',async (req,res)=>{
    const rqst = await pool.query('SELECT * FROM decomposition')
    res.json(rqst.rows);
})

module.exports=router