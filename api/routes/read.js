const express= require("express");
const router= express.Router();


const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'wwtp',
    password: 'Luis0139',
    port: '5432'
})

router.get('/',async (req,res)=>{
    const rqst = await pool.query('SELECT * FROM data')
    res.json(rqst.rows);
})


router.get('/columns',async (req,res)=>{
    const rqst = await pool.query("SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N\'data\' ")
    res.json(rqst.rows);
})


module.exports=router