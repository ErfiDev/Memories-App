const MessageSchema = require('../models/postMessage'); 

async function getPost(req , res)
{
    await res.send('hello worlds!');
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
                    // .then(data => res.json({
                    //     data,
                    //     status: 200
                    // }))
                    // .catch(err => res.json(err));
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
    getPost,
    createPost
};