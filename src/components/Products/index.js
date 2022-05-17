import React,{useContext,useEffect, useState} from 'react'
import { ProductsContainer, ProductsH1, ProductsWrapper, ProductCard, ProductImage, ProductName, ProductPriceWrapper, ProductNewPrice, ProductOldPrice, ProductBtnWrapper, AddToBagBtn, BagIcon, ProductBadge, ProductDetailsWrapper, ProductDesc} from './ProductsElements'
import CounterElementProductPage from "../CounterElementProductPage";



// 
import { GoPlus} from 'react-icons/go';
import { TiMinus} from 'react-icons/ti';
import styled from "styled-components";
// 



import {ContextConsumer} from '../../utils/Context'
import {constants} from '../../constants/values';

const Products = ({heading, data}) => {

    const contextValues = useContext(ContextConsumer);
    
    // console.log("ContextConsumer: ", values);

    // useEffect(  () =>{
    //     contextValues.initUserAddress();
    //     contextValues.initKitProducts();
    // },[])
    
    function CheckExistanceOfProductInCart(value) {
        var output;
        var index=0;
        var foundIndex=-1;
        try{
            if(contextValues.cart[0])
            {
                contextValues.cart[0].map(item =>{ 
                    if(item.product_id===value.id)
                    {
                        // console.log("exists for :", item.product_id )
                        // return item;
                        output= item;
                        foundIndex= index;
                    }
                    index++;
                });
        
            }
            
        }
        catch{

        }
        
        return {output,foundIndex};

        // console.log("count : ", count);
    }


    // checkExistance()
    // console.log("product : ", contextValues.products_veg)
    // console.log("cart : ", contextValues.cart)


    return (
        <ProductsContainer id="products">
            <ProductsH1>{heading}</ProductsH1>
            <ProductsWrapper>
                {contextValues.products_veg.map((product, index) => {
                    
                    const item= CheckExistanceOfProductInCart(product);
                    // console.log( "product in cart :",  item  )

                    var cartFound =item.foundIndex>-1;
                    return (

                        <ProductCard key={index}> 
                        <ProductBadge >naadan</ProductBadge>    
                        <ProductImage src={product.image_url}/>
                        <ProductName>{product.name}</ProductName>


                        <ProductNewPrice>₹{product.price} / {constants.MINIMUM_QUANTITY} gm</ProductNewPrice>

                        <ProductDetailsWrapper>
                            
                            {
                                cartFound?
                                <CounterElementProductPage quantity={item.output.quantity} isInCart={true} productId={product.id} />
                                :
                                <CounterElementProductPage quantity={1} isInCart={false} productId={product.id} />
                                
                            }
                                
                                
                            
                        
                            {/* <ProductPriceWrapper>
                                <ProductNewPrice>₹{product.newPrice}</ProductNewPrice>
                                <ProductOldPrice>₹{product.oldPrice}</ProductOldPrice>
                            </ProductPriceWrapper> */}

                            {/* <ProductBtnWrapper>

                                <AddToBagBtn onClick={()=>{ contextValues.AddToCart(product.id , 1) }}  to='/' >
                                Add to Cart { <BagIcon /> }
                                    </AddToBagBtn>
                                    
                            </ProductBtnWrapper> */}

                        </ProductDetailsWrapper>
                        </ProductCard>
                    )

                })}

            </ProductsWrapper>
        </ProductsContainer>
    )
}








export default Products
