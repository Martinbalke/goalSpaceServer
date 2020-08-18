const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const progressSchema = new Schema({
  dailyProgress:{type: Object, required: true},
  monthlyProgress: { type: Object, required: true },
  associatedGoal: {type: Schema.Types.ObjectId, ref: 'goals', required: true},
  user: { type: String, required: true }
})


progressSchema.pre('find', function (next) {
  this.populate('associatedGoal');
  next();
});


const progress = mongoose.model('progress', progressSchema);
module.exports = progress;