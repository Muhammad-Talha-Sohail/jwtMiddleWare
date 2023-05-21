const myModel = require('../model/userModel')

const bcrypt =require('bcrypt-inzi');

const jwt =require('../middleware/jwtMiddleWare')


exports.createUser = async (req, res) => 
{
       try 
       {
           const { name, email, password } = req.body

            const existing = await myModel.findOne({ email });
            if (existing) 
            {
            return res.status(400).json({ message: "myModel already reqistered" });
           }
            
           if (!name || !email || !password) 
            {
                return res.status(400).json({ message: "All fields are required" });
   
           }

// Password
const hashPassword = await bcrypt.stringToHash(password,10)


            //create myModel 
            const user = await new myModel(
            {
                name,
                email,
                password:hashPassword
            })
        
           await  user.save()

           //token
           const token =await jwt.sign(req.body)

       }
        
    
catch (error) {
    console.log(error)
    return res.status(500).json({message:" internal server error"})
        }
    
}

exports.login = async (req,res) =>
{
    try{
    const {email,password} = req.body;
 /// find user if available
    const user = await myModel.findOne({email})
 // verifyHash 
const verifyHash = await bcrypt.varifyHash(password,user.password)

if (!verifyHash)
{
    return res.status(400).json({message:" Wrong password"})

}
return res.status(200).json(user)
}

catch(err)
{
    console.log(err)
    return res.status(500).json({message:" wrong",err,err:err.messsage})

}
}