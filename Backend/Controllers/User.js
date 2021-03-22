const User = require("../Models/Customer");
const Transaction = require("../Models/Record")


exports.getUserById = (req, res, next) => {
  User.findById(req.body.id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "NO USER FOUND IN DB"
      });
    }
return user
  });
};


exports.getAllUsers = async (req,res)=>{
    try{
    const u = await User.find()
    return res.json(u)
}
    catch{
        return res.status(400).json({err:  "NO USER FOUND IN DB"})
    }
}


exports.createTransaction = async (req,res)=>{
    try{

        const { reciverId,senderId,amount }=req.body
         await User.findByIdAndUpdate(reciverId,{ $inc: { amount: amount } })
         await User.findByIdAndUpdate(senderId,{ $inc: { amount: -amount } })


        const order = new Transaction({reciversId :reciverId,sendersId:senderId,amount});
  order.save((err, order) => {
    if (err) {
      console.log(err)
      return res.status(400).json({ err: "Failed to Save Your Transaction In DB" });
    }
    return res.json(order);
  });}

    catch{
        return res.status(400).json({err:  "Can't do transaction"})
    }
}

exports.createUser = async (req,res)=>{
    try{
}

    catch{
        return res.status(400).json({err:  "Can't do transaction"})
    }
}







