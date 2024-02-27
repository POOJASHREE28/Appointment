import jwt from 'jsonwebtoken'
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'

export const authenticate=async(req,res,next)=>{
    const authToken=req.headers.authorization
    if(!authToken || !authToken.startWith("Bearer")){
        return res.status(401).json({success:false,message:'No token ,Autherization denied'});
    }
    try{
        console.log(authToken);
        next();

    }catch(err){

    }
}
