const {createpatient} = require('../models/patient');
exports.createPatient = async (req,res) => {
  //const userinfo = req.body;
  //const result = createpatient(userinfo)
  const info = {cin:'22471117',fullname:'nada',password:'pass'}
  const user = createpatient(info)
  console.log(user.cin)
  //await user.save();

  //res.json(user);
}
/*const createPatient = async () => {
  //const userinfo = req.body;
  //const result = createpatient(userinfo)
  const info = {cin:'22471117',fullname:'nada',password:'pass'}
  const user = createpatient(info)
  console.log(user.cin)
  //await user.save();

  //res.json(user);
}
createPatient()*/