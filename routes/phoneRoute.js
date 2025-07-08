import express from 'express'
export const phone = express.Router()

import { getPhone, deletePhone, postPhone, putPhone } 
from '../controller/phoneController.js'

phone.get('/phone/' , getPhone )
phone.post('/phone/', postPhone )
phone.delete('/phone/:phone_id', deletePhone)
phone.put('/phone/:phone_id', putPhone)