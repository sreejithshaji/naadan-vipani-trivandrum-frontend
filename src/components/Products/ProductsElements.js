import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { FiShoppingBag } from 'react-icons/fi'



export const MainContainer = styled.div`

display:flex;
flex-direction:row;
justify-content: space-between;

`
/*================= Products Section -> Products Container  ==================*/

export const ProductsContainer = styled.div`

    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc(100vw - 1300px) /2;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 5rem 0;

`
/*================= Products Section -> Products Wrapper  ==================*/

export const ProductsWrapper = styled.div`
        max-width: 1000px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        /* align-items: center; */
        grid-gap: 20px;
        padding: 0 50px;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;

        @media screen and (max-width: 1000px){
            grid-template-columns: 1fr 1fr;
        }
        @media screen and (max-width: 768px){
            grid-template-columns: 1fr;
            padding: 0 20px ;
        }

`

/*================= Products Section Heading  ==================*/

export const ProductsH1 = styled.h1`
    font-size: 2.5rem;
    color: #010606;
    margin-bottom: 2.5rem;
    cursor: default;
    
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
    @media screen and (max-width: 320px){
        font-size: 1.7rem;
    }
`


/*================= Products Section -> Product Card -> Badge  ==================*/

export const ProductBadge = styled.div`
    position: absolute;
    cursor: default;
    background: #f12711;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;   
    letter-spacing: -1px;
    color: #fff;
    padding: 5px 14px;
    width: 6.2rem;
    box-shadow: 0 5px 10px rgba(0,0,0,0.3);
    margin-top: 2rem;
    font-style: italic;
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px ;


    &::before{
    left: 0;
    top: 1.5rem; 
    }

    @media screen and (max-width: 320px){
        font-size: 14px;
        width: 5.5rem;
    }

`

/*================= Products Section -> Product Cards  ==================*/

export const ProductCard = styled.div`
    background: #fafafa;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 15px;
    padding: 0;
    max-width: 340px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 0.2s ease-in-out;
    
    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }  
    

    @media screen and (max-width: 320px){
        max-width: 275px;
    }

`


/*================= Products Section -> Product Card -> Product Image  ==================*/

export const ProductImage = styled.img`
    height: 300px;
    width: 340px;
    object-fit: cover;
    margin-bottom: 10px;
    border: none;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    
    @media screen and (max-width: 320px){
        height: 200px;
        width: 275px;
    }

`


/*================= Products Section -> Product Card -> Product Name  ==================*/

export const ProductName = styled.h3`
    font-size: 20px;
    color: #010606;
    margin-bottom: 10px;
    font-weight: 600;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    font-family: 'Roboto Condensed', sans-serif ;
    letter-spacing: -0.2px;
    margin-left: 2rem;
    margin-right: 1.5rem;
    cursor: default;

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
    @media screen and (max-width: 320px){
        font-size: 16px;
    }
`


/*================= Products Section -> Product Card -> Product Description  ==================*/

export const ProductDesc = styled.h3`
    font-size: 14px;
    color: #a3a3a3;
    margin-bottom: 5px;
    font-weight: 400;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
    font-family: 'Roboto Condensed', sans-serif ;
    letter-spacing: -0.2px;
    margin-left: 2rem;
    margin-right: 1.5rem;
    cursor: default;


    @media screen and (max-width: 480px){
        font-size: 12px;

    }
`


/*================= Products Section -> Product Card -> Product Details Wrapper  ==================*/

export const ProductDetailsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
    width: 100%;
    padding-left: 5px;
    margin-bottom: 30px;

`


/*================= Products Section -> Product Card -> Product Price Wrapper ==================*/

export const ProductPriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    cursor: default;
    

`

/*================= Products Section -> Product Card -> Product New Price  ==================*/

export const ProductNewPrice = styled.h3`
    font-size: 18px;
    color: #000000;
    margin-bottom: 5px;
    font-weight: 400;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
    font-family: 'Roboto Condensed', sans-serif ;
    letter-spacing: -0.2px;
    margin-left: 2rem;
    margin-right: 1.5rem;
    cursor: default;

    @media screen and (max-width: 320px){
        font-size: 16px;
    }
`

/*================= Products Section -> Product Card -> Product Old price ==================*/

export const ProductOldPrice = styled.p`
    font-size: 14px;
    color: #eb5e34;
    text-decoration: line-through;

    @media screen and (max-width: 320px){
        font-size: 12px;
    }

`

/*================= Products Section -> Product Card -> Add to Bag Button  ==================*/

export const ProductBtnWrapper = styled.div`
    margin-top: 0px;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    width: 50%;
`

/*================= Products Section -> Product Card -> Add to Bag Button  ==================*/

export const AddToBagBtn = styled(LinkRouter)`
    background: #01bf71;
    white-space: nowrap;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    font-weight: 500;
    padding: 15px 40px;
    border-radius: 15px;
    text-decoration: none;
    width: 90%;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: #008243;
        color: #fff;
    }

    @media screen and (max-width: 320px){
        font-size: 14px;
    }

`

export const BagIcon = styled(FiShoppingBag)`
    
    margin-left: 8px;
    font-size: 20px;

    @media screen and (max-width: 320px){
        font-size: 17px;
    }

`