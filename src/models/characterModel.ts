import { Document, Schema, Model, model } from 'mongoose';

export interface ICharacter extends Document {
  firstName: string;
  surname: string;
  nickname?: string;
  age?: number;
  nationality: string;
}

class CharacterModel {
  private _model: Model<ICharacter>;

  constructor() {
    const characterSchema = new Schema({
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

    this._model = model<ICharacter>('Character', characterSchema);
  }

  public get model(): Model<ICharacter> {
    return this._model;
  }
}

export default new CharacterModel().model;
