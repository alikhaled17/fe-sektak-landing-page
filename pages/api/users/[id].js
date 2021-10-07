/* eslint-disable import/no-anonymous-default-export */
import dbConnect from "../../../utils/dbConnect";
import User from '../../../models/User'
import Auction from '../../../models/Auction'
import Product from '../../../models/Product'
import cors from "../cors";

dbConnect();

export default async (req, res) => {
    await cors(req, res)
    const {
        query: { id },
        method
    } = req;

    switch(method) {
        case 'GET':
            try {
                const user = await User.findById(id);
                if(!user) {
                    return res.status(400).json({ success : false});
                } 
                res.status(200).json({ success : true, data: user});
            } catch (error) {
                res.status(400).json({ success : false});
            }
            break;
        case 'PUT':
            try {
                const user = await User.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });
                if(!user) {
                    return res.status(400).json({ success : false});
                } 
                res.status(200).json({ success : true, data: user});
            } catch (error) {
                res.status(400).json({ success : false});
            }
            break;
        case 'DELETE':
            try {
                const deletUser = await User.deleteOne({_id: id});
                if(!deletUser) {
                    await Auction.deleteMany({owner: id});
                    await Product.deleteMany({owner: id});
                } 
                res.status(200).json({ success : true, data: {}});
            } catch (error) {
                res.status(400).json({ success : false});
            }
            break;
        default:
        res.status(400).json({ success : false});
        break;
    }
}