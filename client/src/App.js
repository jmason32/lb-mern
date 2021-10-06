import React, { useEffect } from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import shopsPic from './images/mem.png'

//Actions
import { getShops } from './actions/shops';


import Shops from './components/Shops/Shops';
import Form from './components/Form/Form';

import useStyles from './styles';


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getShops());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color='inherit'>
                <Typography className={classes.heading} variant="h2" align="center">App Title</Typography>
                <img className={classes.image} src={shopsPic} alt='shops' height="60" />
            </AppBar>
            <Grow in>
                <Container>

                    <Grid container justify="space-between" alignItems="strech" spacing={3}>

                        {/* Shops */}
                        <Grid item xs={12} sm={7}>
                            <Shops />
                        </Grid>
                        {/* Form */}
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>

                    </Grid>

                </Container>
            </Grow>
        </Container>
    );
}

export default App;