import express from 'express';
import {
  addGroceryItem,
  viewGroceryItems,
  removeGroceryItem,
  updateGroceryItem,
  manageInventory
} from '../controllers/adminController';

const router = express.Router();

router.post('/items', addGroceryItem);
router.get('/items', viewGroceryItems);
router.delete('/items/:id', removeGroceryItem);
router.put('/items/:id', updateGroceryItem);
router.put('/items/:id/inventory', manageInventory);

export default router;
