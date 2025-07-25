import express from 'express'
export const phone = express.Router()
import { validateToken } from '../middleware/authValidation.js'

import { getPhone, deletePhone, postPhone, putPhone, getPhonePerUser } 
from '../controller/phoneController.js'

phone.get('/phone/' , validateToken ,  getPhone )
phone.get('/phone/:person_id' , validateToken, getPhonePerUser ) // return the list of phones of a person
phone.post('/phone/', validateToken, postPhone )
phone.delete('/phone/:phone_id', validateToken, deletePhone)
phone.put('/phone/:phone_id', validateToken, putPhone)