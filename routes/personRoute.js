import express from 'express'
export const person = express.Router()
import { validateToken } from '../middleware/authValidation.js'
import { getPerson, postPerson, deletePerson , putPerson, getPersonId} from '../controller/personController.js' 

person.get('/person/' , validateToken,  getPerson ) // return all the people in the table
person.get('/person/:person_id' , validateToken , getPersonId ) // return just 1 person of the table
person.post('/person/',validateToken , postPerson )
person.delete('/person/:person_id', validateToken, deletePerson)
person.put('/person/:person_id', validateToken, putPerson)

/*

C = create
R = read
U = update
D = delete 

*/