import pool from '../config/db';
import { GroceryItem } from '../models/groceryItem';

export const addGroceryItem = async (item: GroceryItem) => {
  const { name, price, inventory } = item;
  const result = await pool.query(
    'INSERT INTO grocery_items (name, price, inventory) VALUES ($1, $2, $3) RETURNING *',
    [name, price, inventory]
  );
  return result.rows[0];
};

export const getGroceryItems = async () => {
  const result = await pool.query('SELECT * FROM grocery_items');
  return result.rows;
};

export const removeGroceryItem = async (id: number) => {
  await pool.query('DELETE FROM grocery_items WHERE id = $1', [id]);
};

export const updateGroceryItem = async (id: number, item: GroceryItem) => {
  const existingResult = await pool.query(`SELECT * FROM grocery_items where id = ${id}`);
  const oldResult = existingResult.rows[0];
  const { name=oldResult.name, price=oldResult.price, inventory=oldResult.inventory } = item;

  const result = await pool.query(
    'UPDATE grocery_items SET name = $1, price = $2, inventory = $3 WHERE id = $4 RETURNING *',
    [name, price, inventory, id]
  );
  return result.rows[0];
};

export const manageInventory = async (id: number, inventory: number) => {
  const result = await pool.query(
    'UPDATE grocery_items SET inventory = $1 WHERE id = $2 RETURNING *',
    [inventory, id]
  );
  return result.rows[0];
};

export const getAvailableGroceryItems = async () => {
  const result = await pool.query('SELECT * FROM grocery_items WHERE inventory > 0');
  return result.rows;
};

export const bookGroceryItems = async (items: { id: number; quantity: number }[]) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    for (const item of items) {
      const { id, quantity } = item;
      const result = await client.query(
        'UPDATE grocery_items SET inventory = inventory - $1 WHERE id = $2 AND inventory >= $1 RETURNING *',
        [quantity, id]
      );
      if (result.rowCount === 0) {
        throw new Error(`Not enough inventory for item ${id}`);
      }
    }
    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
};
