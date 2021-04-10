import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FileBase from 'react-file-base64';

import { postHTTP } from '../../services/httpService';
import { toast } from 'react-toastify';

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

const Form = ()=>{
    const classes = useStyles();
    const [title , setTitle] = useState('');
    const [description , setDescription] = useState('');
    const [creator , setCreator] = useState('');
    const [file , setFile] = useState('');
    const [tags , setTag] = useState('');

    async function submit(e)
    {
        e.preventDefault();
        try{
            let split = tags.split(' ');
            const d = {
                title,
                description,
                file,
                tags: split,
                creator
            };
            const {data} = await postHTTP(d);
            if(data.status === 201)
            {   
                clearStates();
                return toast.success('Created Successfully!' , {
                    position: 'bottom-left',
                    closeOnClick: true
                });
            }
            if(data.status === 401)
            { 
                return toast.info(data.msg , {
                    position: 'bottom-left',
                    closeOnClick: true
                });
            }
            if(data.status === 406)
            { 
                return toast.error(data.msg , {
                    position: 'bottom-left',
                    closeOnClick: true
                });
            }
        }catch(err){console.log(err)}
    }

    function clearStates()
    {
        setTitle('');
        setDescription('');
        setCreator('');
        setTag('');
        setFile('');
    }

    return ( 
        <div id="post-container">
            <Container component="main" maxWidth="xs">

                <CssBaseline />

                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        CREATE NEW POST
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
                                onChange={e => setTitle(e.target.value)}
                                value={title}
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
                                    onChange={e => setDescription(e.target.value)}
                                    value={description}
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
                                    onChange={e => setCreator(e.target.value)}
                                    value={creator}
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
                                    onChange={e => setTag(e.target.value)}
                                    value={tags}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <FileBase 
                                type="file" 
                                multiple={false} 
                                onDone={({ base64 }) => setFile(base64)} 
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
                            onClick={clearStates}
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
 
export default Form;