import React from 'react';

import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import FileInput from './fileInput';

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

    return ( 
        <div id="post-container">
            <Container component="main" maxWidth="xs">

                <CssBaseline />

                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        CREATE NEW POST
                    </Typography>

                    <form className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="title"
                                    label="Title"
                                    name="title"
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
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <FileInput />
                            </Grid>
                        </Grid>

                        <Button
                            type="button"
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