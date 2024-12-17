import { Request, Response } from 'express';
import * as groceryService from '../services/groceryService';

export const viewAvailableGroceryItems = async (req: Request, res: Response) => {
  try {
    const items = await groceryService.getAvailableGroceryItems();
    res.status(200).json(items);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const bookGroceryItems = async (req: Request, res: Response) => {
  const { items } = req.body;
  try {
    await groceryService.bookGroceryItems(items);
    res.status(200).json({ message: 'Items booked successfully' });
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};
