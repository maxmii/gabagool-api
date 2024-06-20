import mongoose from 'mongoose';

const characterSchema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String
  },
  surname: {
    required: true,
    type: String
  },
  nickname: {
    required: false,
    type: String
  },
  age: {
    required: false,
    type: Number
  },
  nationality: {
    required: false,
    type: String
  }
});

const CharacterModel = mongoose.model('characters', characterSchema);

export default CharacterModel;
