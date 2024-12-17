import { Request, Response } from 'express';
import * as groceryService from '../services/groceryService';

export const addGroceryItem = async (req: Request, res: Response) => {
  try {
    const item = await groceryService.addGroceryItem(req.body);
    res.status(201).json(item);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const viewGroceryItems = async (req: Request, res: Response) => {
  try {
    const items = await groceryService.getGroceryItems();
    res.status(200).json(items);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const removeGroceryItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id)
  try {
    await groceryService.removeGroceryItem(parseInt(id));
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateGroceryItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const item = await groceryService.updateGroceryItem(parseInt(id), req.body);
    res.status(200).json(item);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const manageInventory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { inventory } = req.body;
  console.log(id, inventory);
  try {
    const item = await groceryService.manageInventory(parseInt(id), inventory);
    res.status(200).json(item);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};
