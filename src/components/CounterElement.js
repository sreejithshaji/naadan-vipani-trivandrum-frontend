import React,{useState, useContext} from 'react'
import styled from "styled-components";
import { GoPlus} from 'react-icons/go';
import { TiMinus} from 'react-icons/ti';


import {ContextConsumer} from '../utils/Context'



const CounterContainer = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-center;

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



const CounterElement = ({productId,quantity}) => {
    
  const contextValues = useContext(ContextConsumer);
  
  var countForFunction=quantity;
  const[count,setCount]=useState(quantity);

  const inc=()=>{
      countForFunction+=1
      if (countForFunction>5)
      {
          countForFunction=5;
      }
      console.log("countForFunction:",countForFunction)
      setCount(countForFunction)
      contextValues.AddToCart(productId , countForFunction)
  }
  const dec=()=>{
    countForFunction-=1
    if (countForFunction<1)
    {
        countForFunction=1;
    }
    console.log("countForFunction:",countForFunction)
    setCount(countForFunction)
    contextValues.AddToCart(productId , countForFunction)
  }

//   const[count,setCount]=useState(quantity);
//   const inc=()=>{
//     if(count>5){
//         setCount(5);
//     }
//     else 
//     {
//         setCount(count+1);
//     }
//     console.log("cart count inc: ", count+1 )
//     contextValues.AddToCart(productId , count+1)
//   }
  
//   const dec=()=>{
//     if(count<1)
//     {
//         setCount(1);
//     }
//     else{
//         // count-=1
//         setCount(count-1);
//     }
//     console.log("cart count dec: ", count-1 )
//     contextValues.AddToCart(productId, count-1)
//   }

  return (
     
    <CounterContainer>

        <ButtonContainer onClick={inc}>
            {<MinusIcon/>}
        </ButtonContainer>

        <TextContainer>
            <CounterTest>{count}</CounterTest>
        </TextContainer>

        <ButtonContainer onClick={dec}>
            {<PlusIcon/>}
        </ButtonContainer>

    </CounterContainer>
  
  )
}
export default CounterElement;