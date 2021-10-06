import ShopModel from '../models/shopModel.js';

//Make function async because getting shops takes time
export const getShops = async (req, res) => {
    try {
        const allShops = await ShopModel.find() // add await for async

        res.status(200).json(allShops)
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}

export const createShop = async (req, res) => {
    const shop = req.body; // get the body from the request 

    const newShop = new ShopModel(shop) // create a new shopEntry from request 

    try {
        await newShop.save(); // await needed to create/save

        res.status(201).json(newShop)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}