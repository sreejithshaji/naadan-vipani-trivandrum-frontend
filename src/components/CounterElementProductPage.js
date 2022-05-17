import React,{useState, useContext} from 'react'
import styled from "styled-components";
import { GoPlus} from 'react-icons/go';
import { TiMinus} from 'react-icons/ti';


import {ContextConsumer} from '../utils/Context'


import { ProductsContainer, ProductsH1, ProductsWrapper, ProductCard, ProductImage, ProductName, ProductPriceWrapper, ProductNewPrice, ProductOldPrice, ProductBtnWrapper, AddToBagBtn, BagIcon, MainContainer,ProductBadge, ProductDetailsWrapper, ProductDesc} from './Products/ProductsElements'


const CounterContainer = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-center;
    align-content:center;

    padding: 0px;
    margin: 0px;
    max-width: 100px;
    max-height: 50px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 0.2s ease-in-out;
    border:2px solid #000000;
    border-radius:8px;


`;

const ButtonContainer = styled.div`
    justify-content: center;
    margin:0px;
    padding:10px;
    width:40%;
    background-color: #fffff;
    display: flex;

    &:hover {
        transition: all 0.3s ease-in-out;
       

    }


`;
const TextContainer = styled.div`


    flex-direction: column;
    display:flex;
    // padding:10px;
    margin:0px;
    justify-content: center;
    align-item:center;
    text-align: center;
   


`;

const MinusIcon = styled(GoPlus)`
    
    margin:0px;
    font-size: 20px;
    font-weight:500;
    color:#1A4314;
    &:hover {

        color:#987654;

    }
    @media screen and (max-width: 320px){
        font-size: 17px;
    }

`

const PlusIcon = styled(TiMinus)`
    
    margin:0px;
    font-size: 20px;
    color:#1A4314;
    font-weight:500;
    &:hover {

        color:#987654;

    }
    @media screen and (max-width: 320px){
        font-size: 17px;
    }

`
const CounterTest = styled.h2`

    font-size: 18px;
    color: #56abcd;

`;



const CounterElementProductPage = ({productId,quantity,  isInCart }) => {
    
  const contextValues = useContext(ContextConsumer);
  
//   var countForFunction=quantity;
//   const[count,setCount]=useState(quantity);




//   const inc=()=>{
//       countForFunction+=1
//       if (countForFunction>5)
//       {
//           countForFunction=5;
//       }
//       console.log("countForFunction:",countForFunction)
//       setCount(countForFunction)
//   }

//   const dec=()=>{
//     countForFunction-=1
//     if (countForFunction<1)
//     {
//         countForFunction=1;
//     }
//     console.log("countForFunction:",countForFunction)
//     setCount(countForFunction)
//   }



// counter

  const [counter, setCounter] = useState(quantity);
  
  const incrementCounter = () => setCounter(counter + 1);

  let decrementCounter = () => setCounter(counter - 1);


  if(counter>5) {
    setCounter(5);
  }
  if(counter<=0) {
    setCounter(1);
  }

// counter


  return (
    <MainContainer>
    <CounterContainer>

        <ButtonContainer onClick={incrementCounter}>
            {<MinusIcon/>}
        </ButtonContainer>

        <TextContainer>
            <CounterTest>{counter}</CounterTest>
        </TextContainer>

        <ButtonContainer onClick={decrementCounter}>
            {<PlusIcon/>}
        </ButtonContainer>


    </CounterContainer>


    
        <ProductBtnWrapper>
            <AddToBagBtn onClick={()=>{ contextValues.AddToCart(productId , counter) }}  to='/' >
            Add to Cart { <BagIcon /> }
            </AddToBagBtn>
        </ProductBtnWrapper>
        
   </MainContainer>
  )
}
export default CounterElementProductPage;