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

const findOnePost = async (req , res)=>{
    let {id: _id} = await req.params;
    try{
        let data = await MessageSchema.findById(_id);
        res.status(200).json(data);
    }
    catch(err){ res.json({msg: err}) }
}

const updatePost = async (req , res)=>{
    let {id} = await req.params;
    let {title , description , creator , tags , file} = req.body;
    if(!title || !description || !tags || !creator)
    {
        return res.json({
            msg: 'Please complete the required items' , 
            status: 406
        });
    }
    else{
        let update = await MessageSchema.updateOne(
            {_id: id},
            {
                $set: 
                {
                    title,
                    description,
                    creator,
                    tags,
                    file
                }
            }
        ); 
        res.json({
            data: update,
            status: 200
        });
    }
}

async function like(req , res){
    const {uuid} = req.params;
    if(!uuid){
        return res.json({
            msg: 'Please complete require parametr!',
            status: 406
        });
    }else{
        await MessageSchema.findOneAndUpdate(
            {uuid},
            {
                $inc: {
                    likeCount: 1
                }
            }
        )

        res.json({
            status: 200
        });
    }
}

async function unLike(req , res){
    const {uuid} = req.params;
    if(!uuid){
        return res.json({
            msg: 'Please complete required parametr!',
            status: 406
        });
    }else{
        await MessageSchema.updateOne(
            {uuid},
            {
                $inc: {
                    likeCount: -1
                }
            }
        );

        res.json({
            status: 200
        })
    }
}

module.exports = {
    init,
    createPost,
    findOnePost,
    updatePost,
    like,
    unLike
};