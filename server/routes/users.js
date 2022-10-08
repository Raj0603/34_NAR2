const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });
 
         // username change
		const user = await User.findOne({ userName: req.body.userName},{email: req.body.email});
		if (user)
			return res
				.status(409)
				.send({ message: `Following username ${userName} has already Signed up!` });
	    if(user)
	        return res
			    .send(409)
				.send({message:`Email Id ${email} is already acessed`});
		
/* 		 		const user = await User.findOne({ email: req.body.email})
		 if (user)
		 	return res
		 	 .status(420)
		 	 .send({message: "Following Email Id is already utilized"}) */

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message:"joined up successfully You will be directed to the login page, Press OK" });
	} catch (error) {
		res.status(500).send({ message: "I did'nt like it , try again" });
	}
});

module.exports = router;

