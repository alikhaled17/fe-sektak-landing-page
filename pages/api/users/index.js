/* eslint-disable import/no-anonymous-default-export */
import dbConnect from "../../../utils/dbConnect";

import User from '../../../models/User';

import cors from "../cors";

dbConnect();
 
export default async (req, res) => {
    await cors(req, res)
    const {method} = req;

    switch(method) {
        case 'GET':
            try {
                const users = await User.find({});
                res.status(200).json({ success : true, data: users });
            } catch (error) {
                res.status(400).json({ success : false});
            }
            break; 
        case 'POST':
            try {
                const user = await User.create(req.body);
                res.status(200).json({ success : false, data: user  });
            } catch (error) {
                res.status(201).json({ success : false, data: {msg: "connection field!" } });
            }
            break;
        default:
        res.status(400).json({ success : false});
        break;
    }

}