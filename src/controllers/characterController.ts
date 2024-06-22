import { Request, Response } from 'express';
import CharacterService from '@services/characterService';

class CharacterController {
  // TODO Add documentation comments for Getting all Characters
  static getAllCharacters = async (req: Request, res: Response) => {
    try {
      const data = await CharacterService.getAllCharacters();
      res.status(200).json(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
    }
  };

  // TODO Add documentation comments for getting character by ID
  static getCharacterById = async (req: Request, res: Response) => {
    try {
      const data = await CharacterService.getOneCharacter(req.params.id);
      res.status(200).json(data);
    } catch (error: unknown) {
      if (error instanceof Error)
        res.status(500).json({ message: error.message });
    }
  };

  // TODO Add documentation comments for Creating a Character
  static createANewCharacter = async (req: Request, res: Response) => {
    try {
      const savedData = await CharacterService.createNewCharacter(req.body);
      res.status(201).json(savedData);
    } catch (error: unknown) {
      if (error instanceof Error)
        res.status(400).json({ message: error.message });
    }
  };

  // TODO Add documentation comments for Deleting Character
  static deleteCharacter = async (req: Request, res: Response) => {
    try {
      const deletedData = await CharacterService.deleteCharacter(req.params.id);
      res.send(
        `${deletedData?.firstName} ${deletedData?.surname} has been removed`
      );
    } catch (error: unknown) {
      if (error instanceof Error)
        res.status(500).json({ message: error.message });
    }
  };

  // TODO Add documentation comments for updating existing character
  static updateCharacter = async (req: Request, res: Response) => {
    try {
      const updatedData = await CharacterService.updateCharacter(
        req.params.id,
        req.body
      );
      res.status(201).json(updatedData);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
    }
  };
}

export default CharacterController;
