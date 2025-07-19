import express from 'express'
export const phone = express.Router()

import { getPhone, deletePhone, postPhone, putPhone, getPhonePerUser } 
from '../controller/phoneController.js'

phone.get('/phone/' , getPhone )
phone.get('/phone/:person_id' , getPhonePerUser ) // return the list of phones of a person
phone.post('/phone/', postPhone )
phone.delete('/phone/:phone_id', deletePhone)
phone.put('/phone/:phone_id', putPhone)