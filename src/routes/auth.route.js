import express from 'express';
import { login, register } from '../controllers/auth.controller.js';
import { body } from 'express-validator';
import { validationResultExpress } from '../middlewares/validationResultExpress.js';

const router = express.Router();

router.post('/register',
        [body('email',"Formato incorrecto")
        .trim().isEmail().normalizeEmail(),
        body('password', "Formato incorrecto").trim().isLength({min:8}).custom((value,{req}) =>{
            if(value !== req.body.repassword){
                throw new Error("No coincide la contraseña")
            }
            return value
        })
        
    ], 
    validationResultExpress,
     register
);

router.post('/login',
        [body('email',"Formato incorrecto")
        .trim().isEmail().normalizeEmail(),
        body('password', "Formato incorrecto").trim().isLength({min:8}).custom((value,{req}) =>{
            if(value !== req.body.repassword){
                throw new Error("No coincide la contraseña")
            }
            return value
        })
     ],
     validationResultExpress,
     login
);


export default router;