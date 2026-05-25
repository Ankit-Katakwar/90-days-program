const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyRegistered = await userModel.findOne({
    email,
  });
  if(isUserAlreadyRegistered){
    return res.send({
        message:"The user is already registered."
    });
    
  }

  const user = await userModel.create({
    username,
    email,
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JSON_WEBTOKEN_KEY,
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "The user has been register successfully.",
    user
  });
}

module.exports = { registerUser };
