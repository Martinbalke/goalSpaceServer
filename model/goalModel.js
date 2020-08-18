const Model = require ( './Model');
const schema  = require('./goalSchema');


class GoalModel extends Model {
  constructor(){
    super(schema)
  }
}


module.exports =  GoalModel;