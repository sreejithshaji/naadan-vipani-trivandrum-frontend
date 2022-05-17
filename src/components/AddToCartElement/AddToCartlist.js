import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { FiShoppingBag } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md'


/*================= Products Section -> Products Container  ==================*/

export const ProductsContainer = styled.div`

    width: 100vw;
    height: auto;
    padding: 5rem calc(100vw - 1300px) /2;
    background: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 5rem 0;
    background:#784598;

`
/*================= Products Section -> Products Wrapper  ==================*/

export const ProductsWrapper = styled.div`
        max-width: 1000px;
        margin: auto auto 50% auto;
        
        display: grid;
        /*grid-template-columns: 1fr 1fr 1fr;*/
        /* align-items: center; */
        grid-gap: 20px;
        padding: 0 50px;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        // border:2px solid #678543;
        padding:24px;
        border-radius:12px;

        
        height:25vh;
        
        

        @media screen and (max-width: 1000px){
            grid-template-columns: 1fr 1fr;
        }
        @media screen and (max-width: 768px){
            grid-template-columns: 1fr;
            padding: 0 20px ;
            height:30vh;
            margin-top:10vh;
        }


`

/*================= Products Section -> Product Cards  ==================*/

export const ProductCard = styled.div`
    background: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-center;
    border-radius: 15px;
    padding: 0px;
    max-width: 740px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 0.2s ease-in-out;
    margin :5px opx 0px 0px;
    
    // &:hover{
    //     transform: scale(1.02);
    //     transition: all 0.2s ease-in-out;
    // }  
    

    @media screen and (max-width: 320px){
        max-width: 275px;
    }

`
/*=======Products Section -> Product Card -> ProductImageContainer ========*/

export const ProductImageContainer = styled.div`
    margin:0;
    padding:0;
    // background: #ab6512;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width:35%;

`
/*======== Products Section -> Product Card -> ProductImageContainer-> Product Image  =====*/

export const ProductImage = styled.img`
    height: 160px;
    // width: 180px;
    width: 100%;
   
   
    padding:0px;
    margin:0px;
    border: none;
    border-top-left-radius: 15px;
    // border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    // border-bottom-right-radius: 15px;
    background: #9ab598;
    @media screen and (max-width: 320px){
        height: 200px;
        width: 275px;
    }

`
/*=======Products Section -> Product Card -> ProductDecContainer ========*/
export const ProductDecContainer = styled.div`
    margin:0px;
    padding:0px;
    flex-direction: column;
    background-color: #ffffff;
    justify-content: center;
    width:70%;


   


   


`
/*=======Products Section -> Product Card -> ProductDecContainer ========*/
// export const ProductDeleteContainer = styled.div`
//     margin:0px;
//     padding:0px;
//     background: #ffffff;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-bottom-right-radius: 15px;
//     border-top-right-radius: 15px;
//     &:hover {
//         background: #BA0F30; 
//         transition: all 0.3s ease-in-out;

//     }
//     &:hover ${DeleteIcon}{
//         background: #ffffff; 
//         transition: all 0.3s ease-in-out;

//     }
    


// `



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
    // align-items: flex-end;
    // justify-content: space-around;
  
    // padding-left: 5px;
    margin:0px;
    // margin-bottom: 30px;
    // background-color:#000000;


`
export const A = styled.div`
    flex-direction: row;
    margin:3px;
    background-color:#ffffff;
    padding: 0px;
    width: 100%;

    justify-content: center;
    align-item:center;
    text-align: center;

    


`
export const B = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2px;
    background-color:#ffffff;
    justify-content: center;
    align-item:center;
    text-align: center;
    // border:2px solid #998866;
    margin-top:10%;

    
    
    

`

/*================= Products Section -> Product Card -> Product Price Wrapper ==================*/

export const ProductPriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-center;
    align-items: center;
    cursor: default;

    

`

/*================= Products Section -> Product Card -> Product New Price  ==================*/

export const ProductNewPrice = styled.h3`
    font-size: 14px;
    color: #56abcd;
    text-align:center;
    margin:10%;


    @media screen and (max-width: 340px){
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
    margin-top: 32px;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    width: 50%;
`

/*================= Products Section -> Product Card -> Add to Bag Button  ==================*/

export const AddToBagBtn = styled(LinkRouter)`
   
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
    padding: 10px 20px;
    border-radius: 15px;
    text-decoration: none;
    width: 90%;

    // &:hover {
    //     transition: all 0.3s ease-in-out;
    //     background: #008243;
    //     color: #fff;
    // }

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
export const DeleteIcon = styled(MdDelete)`
    

    font-size: 40px;
    color:#BA0F30;

    @media screen and (max-width: 320px){
        font-size: 17px;
    }

`
export const ProductDeleteContainer = styled.div`
// width:15%;

    margin:0px;
    padding:0px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    &:hover {
        background: #BA0F30; 
        transition: all 0.3s ease-in-out;

    }
    &:hover ${DeleteIcon}{
        color: #ffffff; 
        transition: all 0.3s ease-in-out;

    }
    


`