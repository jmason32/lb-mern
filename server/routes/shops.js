//Code to handle SHOP operations 

import express from 'express';
import { getShops, createShop } from '../controllers/shops.js';

const router = express.Router();

//localhost:5000/shops
router.get('/', getShops);
router.post('/', createShop);

export default router;
