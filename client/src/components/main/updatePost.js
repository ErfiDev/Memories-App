import React from 'react';
import {toast} from 'react-toastify';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FileBase from 'react-file-base64';


import { updateOneHTTP } from '../../services/httpService';
import { useDispatch , useSelector } from 'react-redux';
import { editData, editFile , clearData } from '../../Actions/editData';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const UpdatePost = ()=>{
    const classes = useStyles();
    const dis = useDispatch();
    let title = useSelector(state => state.title);
    let id = useSelector(state => state.id);
    let description = useSelector(state => state.description);
    let creator = useSelector(state => state.creator);
    let tags = useSelector(state => state.tags);
    let file = useSelector(state => state.file);

    async function submit(e)
    {
        e.preventDefault();
        try{
            let split = tags.split(' ');
            let data =  {
                title,
                description,
                creator,
                tags: split,
                file
            };

            let response = await updateOneHTTP(id , JSON.stringify(data));
            let {status} = response;
            if(status === 200)
            {
                dis(clearData());
                return toast.success('Update Successfully!' , {
                    position: 'bottom-left',
                    closeOnClick: true
                });
            }
            if(status === 406)
            {
                dis(clearData());
                return toast.info(response.msg , {
                    position: 'bottom-left',
                    closeOnClick: true
                });
            }
        }
        catch(err){console.log(err)}
    }

    return ( 
        <div id="post-container">
            <Container component="main" maxWidth="xs">

                <CssBaseline />

                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        UPDATE POST
                    </Typography>

                    <form onSubmit={e => submit(e)} className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="title"
                                label="Title"
                                name="title"
                                value={title}
                                onChange={e => dis(editData(e , 'TITLE'))}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="description"
                                    type="text"
                                    id="description"
                                    value={description}
                                    onChange={e => dis(editData(e , 'DESCRIPTION'))}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="creator"
                                    type="text"
                                    id="creator"
                                    value={creator}
                                    onChange={e => dis(editData(e , 'CREATOR'))}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="tags"
                                    type="text"
                                    id="tags"
                                    value={tags}
                                    onChange={e => dis(editData(e , 'TAGS'))}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <FileBase 
                                    type="file" 
                                    multiple={false} 
                                    onDone={({ base64 }) => dis(editFile(base64))}
                                />
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            POST
                        </Button>
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                            onClick={()=> dis(clearData())}
                        >
                            CLEAR
                        </Button>
                        <Link 
                            to="/" 
                            style={{textDecoration: 'none' , color: 'inherit'}}>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                            >
                                GO HOME
                            </Button>
                         </Link>
                    </form>
                </div>
            </Container>
        </div>
    );
}
 
export default UpdatePost;