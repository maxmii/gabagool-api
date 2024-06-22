import express, { Request, Response } from 'express';

import CharacterController from '../../controllers/characterController';

const router = express.Router();

// Creates a new character
// @route POST /api/characters
// @description Adds a new character to the database
// @param req.body - The character details
// @returns {Object} - The created character object on success
router.post(
  '/',
  async (req: Request, res: Response) =>
    await CharacterController.createANewCharacter(req, res)
);

// Retrieves all characters
// @route GET /api/characters
// @description Fetches all characters from the database
// @returns {Array} - An array of character objects
router.get(
  '/',
  async (req: Request, res: Response) =>
    await CharacterController.getAllCharacters(req, res)
);

// Retrieves a single character by ID
// @route GET /api/characters/:id
// @description Fetches a character by its ID from the database
// @param req.params.id - The ID of the character to retrieve
// @returns {Object} - The requested character object on success
router.get('/:id', async (req: Request, res: Response) => {
  await CharacterController.getCharacterById(req, res);
});

// Updates a character by ID
// @route PATCH /api/characters/:id
// @description Updates the details of an existing character
// @param req.params.id - The ID of the character to update
// @param req.body - The character details to update
// @returns {Object} - The updated character object on success
router.patch('/:id', async (req: Request, res: Response) => {
  await CharacterController.updateCharacter(req, res);
});

// Deletes a character by ID
// @route DELETE /api/characters/:id
// @description Removes a character from the database by its ID
// @param req.params.id - The ID of the character to delete
// @returns {Object} - A success message on successful deletion
router.delete('/:id', async (req: Request, res: Response) => {
  await CharacterController.deleteCharacter(req, res);
});

export const characterRouter = router;
