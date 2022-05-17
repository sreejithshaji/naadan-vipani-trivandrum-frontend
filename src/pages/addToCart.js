import React, {useContext} from 'react'
import { useState } from 'react'
import styled from "styled-components";

import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import Navbar from '../components/Navbar'
import { productData } from '../components/Products/ProductsData'
import AddToCartlist from '../components/AddToCartElement'
import SubtotalElement from "../components/SubtotalElement/index";

import {ContextConsumer} from '../utils/Context'

const CartWrapper = styled.div`
        // max-width: 100vh;
        margin:10% 0% 0% 0%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        
        grid-gap: 0px;
        padding: 0 0px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
       

        @media screen and (max-width: 1000px){
            grid-template-columns: 1fr 1fr;
        }
        @media screen and (max-width: 768px){
            grid-template-columns: 1fr;
            padding: 0 0px ;
            justify-content: center;
        }

`


const AddToCart = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }; 





    const contextValues = useContext(ContextConsumer);
    
    console.log("cartArray : ", contextValues.cart[0])

    var cartItem = contextValues.cart[0];


    return (
        <div>
            <MobileNav isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <CartWrapper>
            {/* <MobileNav isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/> */}
            <AddToCartlist data={cartItem}  /> 
            <SubtotalElement data={cartItem}  />   
            {/* <Footer /> */}
            </CartWrapper>
            <Footer />
        
        </div>
    )
}

export default AddToCart;