import React from "react";
import { useSelector } from 'react-redux';


import Shop from './Shop/Shop';
import useStyles from './styles'

    

const Shops = () => {
    const shops = useSelector((state) => state.shops) //per name of 
    const classes = useStyles();

    console.log(shops)

    return (
        <>
            <h1>SHOPS</h1>
            <Shop />
            <Shop />
            <Shop />
        </>
    )
}

export default Shops;