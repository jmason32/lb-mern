import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import { useDispatch } from 'react-redux'
import FileBase from 'react-file-base64'

import useStyles from './styles'
import { createShop } from "../../actions/shops";


const Form = () => {
    //create a state hook for shop data
    //give the properties off a shop
    const [shopData, setShopData] = useState({
        owner: '', name: '', location: '', banner_img: ''
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    // 3. finish the handleSubit by dipatching 'createShop' from actions "2.""
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createShop(shopData));
    }

    const clear = () => {

    }
    
    return (
        <Paper className={classes.paper}>

            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Create Store</Typography>
                {/* value = the value you want to store in your hook state, 'shopData' 
                    onClick = trigger the state change function, spread the current data (shopData), 
                                override current field
                */}
                <TextField name='shop_name' variant="outlined" label="Shop Name" fullWidth value={shopData.name} onChange={(event) => {setShopData({ ...shopData, name: event.target.value })}}/>
                <TextField name='shop_location' variant="outlined" label="Shop location" fullWidth value={ shopData.location} onChange={(event) => setShopData({...shopData, location: event.target.value })} />
                <TextField name='shop_owner' variant="outlined" label="Shop owner" fullWidth value={ shopData.owner} onChange={(event) => setShopData({...shopData, owner: event.target.value })} />
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => {
                            setShopData({ ...shopData, banner_img: base64})
                        }}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Apply for Shop</Button>
                <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth >Apply for Shop</Button>

            </form>    
        
        </Paper>
    )
}

export default Form;