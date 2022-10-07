
const router = require("express").Router();
const { User1, validate } = require("../models/personaldetail");
const bcrypt = require("bcrypt");

router.post("/src/components/PersonalInfo/PersonalInfo.jsx", async (req,res) => {  

const { name, phoneno, email, linkdin, github, other} = User1;

if (!name ||  !phoneno || !email || !linkdin || !github || !other ) {
  return res.status(419).json({error:"fill the details correctly"});
}
     
try{
    const userExist = await User1.findOne({name: email})
       //  .then((userExist) => {
        if(userExist) {
            return res.status(421).json({error:"user already used that email "});
        }
         
        const user = new User1({name,email,phoneno,linkdin,github,other});
        
        await user.save()
          res.status(520).json({message:"Data saved succcessfully"});
  
 
      } catch(err) {console.log(err);
      
      }
 
    }); 



module.exports = router;















