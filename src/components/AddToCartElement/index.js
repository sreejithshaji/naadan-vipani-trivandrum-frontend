
import React, {useContext, useState} from 'react'
import { A,B,ProductsContainer, ProductImageContainer,ProductDecContainer,ProductDeleteContainer,ProductsH1, ProductsWrapper, ProductCard, ProductImage, ProductName, ProductPriceWrapper, ProductNewPrice, ProductOldPrice, ProductBtnWrapper, AddToBagBtn, BagIcon, ProductBadge, ProductDetailsWrapper, ProductDesc,DeleteIcon} from './AddToCartlist'
import CounterElement from "../CounterElement";
import SubtotalElement from "../SubtotalElement/index"


import {ContextConsumer} from '../../utils/Context'

// import (constants) from './src/constants/values.js'
// MINIMUM_QUANTITY

import {constants} from '../../constants/values';

const AddToCartlist = ({heading, data}) => {
    // RemoveFromCart

    console.log(" AddToCartlist : ", data );

    const contextValues = useContext(ContextConsumer);

    return (
        // <ProductsContainer >
            <ProductsWrapper>
       
                {data?.map((cart_items, index) => {
                    return (

                        <ProductCard key={index}> 
                            <ProductImageContainer>
                                <ProductImage src={cart_items.image_url}/>
                            </ProductImageContainer>

                            <ProductDecContainer>
                                <ProductDetailsWrapper>
                                    <ProductName>{cart_items.name}</ProductName>
                                </ProductDetailsWrapper>

                                <ProductDetailsWrapper>
                                    <A>
                                        {/* <B>
                                            <ProductNewPrice>Price:</ProductNewPrice>
                                        </B> */}
                                        <B>
                                            {/* <CounterElement/> */}
                                            <CounterElement productId={cart_items.product_id} quantity={cart_items.quantity} />

                                        </B>
                                    </A>
                                    <A>
                                        {/* <B>
                                            <ProductNewPrice>Quality: </ProductNewPrice>
                                        </B> */}
                                        <B>
                                        
                                            <ProductNewPrice>  ₹ {cart_items.price*cart_items.quantity} ( {constants.MINIMUM_QUANTITY} gm packet ) </ProductNewPrice>

                                        </B>
                                    </A>
                                </ProductDetailsWrapper>
                            </ProductDecContainer>

                            <ProductDeleteContainer >
                                <AddToBagBtn to='/cartlist' onClick={()=>{ contextValues.RemoveFromCart(cart_items.id) }} >
                                    { <DeleteIcon /> }
                                </AddToBagBtn>
                            
                            </ProductDeleteContainer>
                        </ProductCard>

                    )

                })}


        </ProductsWrapper>
            
        // </ProductsContainer>

    )
}

export default AddToCartlist;


