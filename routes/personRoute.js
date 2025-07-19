import express from 'express'
export const person = express.Router()
import { getPerson, postPerson, deletePerson , putPerson, getPersonId} from '../controller/personController.js' 

person.get('/person/' , getPerson ) // return all the people in the table
person.get('/person/:person_id' , getPersonId ) // return just 1 person of the table
person.post('/person/', postPerson )
person.delete('/person/:person_id', deletePerson)
person.put('/person/:person_id', putPerson)

/*

C = create
R = read
U = update
D = delete 

*/