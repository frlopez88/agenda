import { pool } from "../db/cn.js";

export const getPerson = async (req, res)=>{

    const sql = `select person_id, 
                        name, 
                        to_char(birth_date, 'dd-mon-yyyy') birth_date,
                        gender 
                from agenda.person`
    const result = await pool.query(sql)
    return res.json( result.rows )

}

export const getPersonId = async (req, res)=>{

    const {person_id} = req.params;

    const sql = `select person_id, 
                        name, 
                        to_char(birth_date, 'yyyy-MM-dd') birth_date,
                        gender 
                from agenda.person where person_id = $1`
    const result = await pool.query(sql, [person_id])
    return res.json( result.rows )

}

export const postPerson = async (req, res)=>{

    const sql = `insert into  agenda.person (name, birth_date, gender) values ($1, $2, $3)`
    const body = req.body;
    const parameter = [body.name, body.birth_date, body.gender ];
    const result = await pool.query(sql, parameter)
    return res.json( {message: "Object Created"} )

}

export const deletePerson = async (req, res)=>{

    const sql = `delete from agenda.person where person_id = $1`
    const person_id = req.params.person_id
    const parameter = [person_id];
    const result = await pool.query(sql, parameter)
    return res.json( {message: "Object removed"} )

}

export const putPerson = async (req, res)=>{

    const sql = `update agenda.person 
                        set name = $1, 
                            birth_date = $2,
                            gender = $3
                    where person_id = $4`
    
    const body = req.body
                    
    const person_id = req.params.person_id
    const parameter = [body.name, body.birth_date, body.gender, person_id];
    const result = await pool.query(sql, parameter)
    return res.json( {message: "Object Updated"} )

}