import React,{useState} from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import {toast} from 'react-toastify';
import { useDispatch } from "react-redux";
import findOne from "../../Actions/findOne";
import {like as likePost} from '../../services/httpService';
import {unlike} from '../../services/httpService';
import useStyles from "./styles";

const Post = ({id,title,description,like,date,creator,file,tags,uuid}) => {
  const classes = useStyles();
  const dis = useDispatch();
  let [likeCount , setLikeCount] = useState(like);
  let [toggle , setToggle] = useState(false);

  async function likeSubmit(){
    if(!toggle){
      try{
        let data = await likePost(uuid);
        if(data.status === 406){
            return toast.error(data.msg , {
                position: 'bottom-left',
                closeOnClick: true
            });
        }
        else{
          toast.success('liked!' , {
            position: "bottom-left",
            closeOnClick: true
          });
          setLikeCount(likeCount += 1);
          setToggle(true);
        }
      }
      catch(err){console.log(err)}; 
    }else{
      try{
        let {data} = await unlike(uuid);
        if(data.status === 406){
          return toast.error(data.msg , {
              position: 'bottom-left',
              closeOnClick: true
          });
        }
        else{
          toast.success('un liked!' , {
            position: "bottom-left",
            closeOnClick: true
          });
          setLikeCount(likeCount -= 1);
          setToggle(false);
        }
      }
      catch(err){console.log(err)}
    }
  }

  return (
    <Card id="card" className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          !file ? "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          : file
        }
        title={title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{creator}</Typography>
        <Typography variant="body2">{moment(date).fromNow()}</Typography>
      </div>
      <Link to="/update">
        <div className={classes.overlay2} onClick={() => dis(findOne(id))}>
          <Button style={{ color: "white" }} size="small">
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
      </Link>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button 
          size="small" 
          color={toggle ? 'secondary' : 'primary'} 
          onClick={likeSubmit}
          variant={toggle ? 'contained' : 'outlined'}>
          <ThumbUpAltIcon fontSize="small" />
          {toggle ? 'liked' : 'like'}
          {'    '}
          {likeCount}
        </Button>
        <Button size="small" color="primary">
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
