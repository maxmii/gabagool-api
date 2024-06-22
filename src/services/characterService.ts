import CharacterModel, { ICharacter } from '@models/characterModel';

class CharacterService {
  static getAllCharacters = async () => {
    return CharacterModel.find();
  };

  static getOneCharacter = async (id: string) => {
    return CharacterModel.findById(id);
  };

  static createNewCharacter = async (data: Partial<ICharacter>) => {
    data = new CharacterModel({ ...data });
    return data.save?.();
  };

  static updateCharacter = async (id: string, data: Partial<ICharacter>) => {
    const updatedData = await CharacterModel.findByIdAndUpdate(
      id,
      { $set: data },
      {
        new: true
      }
    );
    return updatedData;
  };
  static deleteCharacter = async (id: string) => {
    const deletedData = await CharacterModel.findByIdAndDelete(id);
    return deletedData;
  };
}

export default CharacterService;
