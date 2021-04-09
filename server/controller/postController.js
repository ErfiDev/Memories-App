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

const createPost = async (req , res)=>
{
    try{
        let {title , description , tags , file , creator} = await req.body;
        if(!title || !description || !tags || !file || !creator)
        {
            return res.json({
                msg: 'Please complete the required items',
                status: 406
            });
        }
        else{
            let findPost = await MessageSchema.find({title});
            if(findPost.length > 0)
            {
                return res.json({
                    msg: 'This title is already used, please edit',
                    status: 401
                });
            }else{
                const data = new MessageSchema({
                    title: req.body.title,
                    description: req.body.description,
                    tags: req.body.tags,
                    file: req.body.file,
                    creator: req.body.creator,
                });
    
                await data.save()
                .then(e => res.status(201).json({
                    data: e,
                    status: 201
                }))
                .catch(err => res.status(403).json(err));
            }
        }
    }catch(err){ res.json({msg: err}) }
}

module.exports = {
    init,
    createPost
};