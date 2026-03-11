
const testControllers=(req,res)=>{
    try {
                res.status(201).json({
                    succes:true,
                    message:"test user data."
                })

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

module.exports={testControllers}