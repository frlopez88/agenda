import { pool } from "../db/cn.js";

export const getPhone = async (req, res)=>{

    const sql = `select a.phone_id, 
                        a.person_id, 
                        b.name as person_name, 
                        a.phone_number
                from agenda.phones a 
                inner join agenda.person b on a.person_id = b.person_id`
    const result = await pool.query(sql)
    return res.json( result.rows )

}

export const getPhonePerUser = async (req, res)=>{

    const {person_id} = req.params;

    const sql = `select a.phone_id, 
                        a.person_id, 
                        b.name as person_name, 
                        a.phone_number
                from agenda.phones a 
                inner join agenda.person b on a.person_id = b.person_id
                where a.person_id = $1`
    const result = await pool.query(sql , [person_id])

    return res.json( result.rows )

}

export const postPhone = async (req, res)=>{

    const sql = `insert into agenda.phones (phone_number,person_id) values ($1, $2)`
    const body = req.body;
    const parameter = [body.phone_number, body.person_id];
    const result = await pool.query(sql, parameter)
    return res.json( {message: "Object Created"} )

}

export const deletePhone = async (req, res)=>{

    const sql = `delete from agenda.phones where phone_id = $1`
    const phone_id = req.params.phone_id
    const parameter = [phone_id];
    const result = await pool.query(sql, parameter)
    return res.json( {message: "Object removed"} )

}

export const putPhone = async (req, res)=>{

    const sql = `update agenda.phones 
                        set phone_number = $1, 
                            person_id = $2
                    where phone_id = $3`
    
    const body = req.body
                    
    const phone_id = req.params.phone_id
    const parameter = [body.phone_number, body.person_id,  phone_id];
    const result = await pool.query(sql, parameter)
    return res.json( {message: "Object Updated"} )

}