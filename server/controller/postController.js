const MessageSchema = require('../models/postMessage'); 

async function init(req , res)
{
    try
    {
        const Data = await MessageSchema.find();
        res.json(Data);
    }
    catch(err)
    {
        res.json({err});
    }
}

async function createPost(req , res)
{
    try{
        try 
        {
            const title = req.body.title;
            const find = await MessageSchema.find({title});
            if(find.length > 0){
                res.json({
                    msg: 'this title is used please edit a title',
                    status: 401
                })
            }
            else if(find.length === 0){
                const body = req.body;
                const data = new MessageSchema(body);
        
                try{
                    await data.save();

                    res.status(201).json(data);
                }catch(err){res.json({err , status: 501})}
            }
        } 
        catch (error) 
        {
            res.json(error)
        }
    }
    catch(err)
    {
        res.json({err});
    }
}

module.exports = {
    init,
    createPost
};