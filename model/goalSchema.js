const mongoose = require('mongoose');
const progressSchema = require ( './progressSchema');

const Schema = mongoose.Schema;


const goalSchema = new Schema({
  goal: {type: String, required: true},
  milestone: {type: String},
  habits: {type: Array, required: true},
  user: {type: String, required: true}
})


//Middleware 
goalSchema.post('findOneAndDelete', async function (goal) {
  await progressSchema.deleteOne({associatedGoal: goal._id})
})


const goal = mongoose.model('goals', goalSchema);

module.exports = goal;