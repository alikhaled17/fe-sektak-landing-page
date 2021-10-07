/* eslint-disable import/no-anonymous-default-export */
import dbConnect from "../../../utils/dbConnect";
import Message from '../../../models/Message'

dbConnect();

export default async (req, res) => {
    
    const {
        query: { id },
        method
    } = req;

    switch(method) {
        case 'GET':
            try {
                const message = await Message.findById(id);
                if(!message) {
                    return res.status(400).json({ success : false});
                } 
                res.status(200).json({ success : true, data: message});
            } catch (error) {
                res.status(400).json({ success : false});
            }
            break;
        case 'PUT':
            try {
                const message = await Message.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });
                if(!message) {
                    return res.status(400).json({ success : false});
                } 
                res.status(200).json({ success : true, data: message});
            } catch (error) {
                res.status(400).json({ success : false});
            }
            break;
        case 'DELETE':
            try {
                const deletMessage = await Message.deleteOne({_id: id});
                if(!deletMessage) {
                    return res.status(400).json({ success : false});
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