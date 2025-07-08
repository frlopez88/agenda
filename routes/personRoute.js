import express from 'express'
export const person = express.Router()
import { getPerson, postPerson, deletePerson , putPerson} from '../controller/personController.js' 

person.get('/person/' , getPerson )
person.post('/person/', postPerson )
person.delete('/person/:person_id', deletePerson)
person.put('/person/:person_id', putPerson)

/*

C = create
R = read
U = update
D = delete 

*/