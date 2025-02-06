import { Schema, model } from 'mongoose';

const OrderSchema = new Schema({
  items: [{
    groceryId: { type: Schema.Types.ObjectId, ref: 'Grocery', required: true },
    quantity: { type: Number, required: true }
  }],
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['Pending', 'Completed', 'Cancelled'], default: 'Pending' }
});
export const Order = model('Order', OrderSchema);