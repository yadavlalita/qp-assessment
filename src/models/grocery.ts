import { Schema, model } from 'mongoose';

// Creating an interface
interface Grocery {
    name: String,
    price: Number,
    inventory: Number
}

const GrocerySchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    inventory: { type: Number, required: true }
  });
export const Grocery = model('Grocery', GrocerySchema);