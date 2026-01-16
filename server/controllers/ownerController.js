import User from "../models/User.js";


export const changeRoleToOwner = async (req,res)=>{
    try {
        const{_id}=req.user;
        await User.findByIdAndUpdate(_id , {role:"owner"})
        res.json({success:true , message:"Now You can list cars"})
    } catch (error) {
        console.log(error.message);
        req.json({success:false , message: error.message})
    }
}