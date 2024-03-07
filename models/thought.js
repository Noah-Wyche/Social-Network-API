const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true },
  username: { type: String, required: true },
  reactions: [{
    reactionBody: { type: String },
    username: { type: String }
  }],
  createdAt: { type: Date, default: Date.now }
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
