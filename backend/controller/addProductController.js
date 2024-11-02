const userModel = require('../models/userModel.js');

const addUserController = async(req,res)=>{
    try{
        const user = req.body
        const newUser = await userModel.findOne(user)
        if(newUser){
            return res.status(505).json({
                message:"User Already exist",
                error:true,
                success:false
            })
        }
        const savedUser = await userModel.create(user)
        return res.status(200).json({
            message:"User added successfully",
            user:savedUser,
            success:true
        })
    }
    catch(err){
        res.status(404).json({
            message:"user not fount",
            error:message.err || err,
        suceess:true        })
    }
}

// Delete User
const userDeleteController = async(req,res)=>{
    try{
        const user = await userModel.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).json({
                message:"User not found",
                error:true,
                success:false
            })
        }
        return res.status(200).json({
            message:"User deleted successfully",
            user:user,
            success:true
        })
    }
    catch(err){
        res.status(404).json({
            message:"User not found",
            error:message.err || err,
            success:true        })
    }
}

// Get User
const getUserController = async(req,res)=>{
    try{
        const user = await userModel.findById(req.params.id)
        if(!user){
            return res.status(404).json({
                message:"User not found",
                error:true,
                success:false
            })
        }
        return res.status(200).json({
            message:"User found successfully",
            user:user,
            success:true
        })
    }
    catch(err){
        res.status(404).json({
            message:"User not found",
            error:message.err || err,
            success:true        })
    }
}

const userUpdateController = async(req,res)=>{
    try{
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if(!user){
            return res.status(404).json({
                message:"User not found",
                error:true,
                success:false
            })
        }
        return res.status(200).json({
            message:"User updated successfully",
            user:user,
            success:true
        })
    }
    catch(err){
        res.status(404).json({
            message:"User not found",
            error:message.err || err,
            success:true        })
    }
}

module.exports = {addUserController, userDeleteController,userUpdateController,getUserController};