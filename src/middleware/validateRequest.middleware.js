 import { body, validationResult } from "express-validator";
const validateRequest = async(req,res,next)=>{

   const rules =[
     body('name')
     .notEmpty()
     .withMessage("name is required"),
    body('price')
    .isFloat({gt:0})
    .withMessage('price is positive '),
    body('image')
    .isURL()
    .withMessage("enter the valid URL")
];
 await Promise.all(
    rules.map((rule)=>{
  rule.run(req);
    })
 );
 var validationErrors = validationResult(req);

    if(!validationErrors.isEmpty()){
        return res.render("add_product",{
            errorMessage:validationErrors.array()[0].msg,
        })
    }
    next();
}

export default validateRequest;