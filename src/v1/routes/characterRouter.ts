import express, { Request, Response } from 'express';

import CharacterModel from '@models/characterModel';

const router = express.Router();

// Post API
router.post('/character', async (req: Request, res: Response) => {
  const data = new CharacterModel({
    firstName: req.body.firstName,
    surname: req.body.surname,
    age: req.body.age
  });

  try {
    const savedData = await data.save();
    res.status(201).json(savedData);
  } catch (error: unknown) {
    if (error instanceof Error)
      res.status(400).json({ message: error.message });
  }
});

// Get All Characters
router.get('/characters', async (req: Request, res: Response) => {
  try {
    const data = await CharacterModel.find();
    res.status(200).json(data);
  } catch (error: unknown) {
    if (error instanceof Error)
      res.status(500).json({ message: error.message });
  }
});

// Get Character by ID
router.get('/character/:id', async (req: Request, res: Response) => {
  try {
    const data = await CharacterModel.findById(req.params.id);
    res.json(data);
  } catch (error: unknown) {
    if (error instanceof Error)
      res.status(500).json({ message: error.message });
  }
});

// Update character by ID
router.patch('/character/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await CharacterModel.findByIdAndUpdate(
      id,
      updatedData,
      options
    );

    res.status(204).send(result);
  } catch (error: unknown) {
    if (error instanceof Error)
      res.status(500).json({ message: error.message });
  }
});

router.delete('/character/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = await CharacterModel.findByIdAndDelete(id);
    res.send(`${data?.firstName} ${data?.surname} has been removed`);
  } catch (error: unknown) {
    if (error instanceof Error)
      res.status(500).json({ message: error.message });
  }
});

export const characterRouter = router;
