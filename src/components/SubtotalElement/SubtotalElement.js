// import styled from "styled-components";
// import { Link as LinkRouter } from "react-router-dom";


// export const SubtotalContainer = styled.div`
//     background: #ffffff;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;
//     padding: 0px;
//     max-width: 400px;
//     max-height:300px;
//     border:2px solid #567834;
  

    
    

    


//     @media screen and (max-width: 320px){
//         max-width: 275px;
//     }

// `
// export const MainTotalContainer=styled.div`
//     background: #ffffff;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: flex-center;
//     padding: 0px;
//     width: 100%;
//     border-bottom:1px solid #789123;
    

// `

// export const PriceContainer = styled.div`
//     background: #ffffff;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: flex-center;
//     text-align:center;
//     padding: 0px;
//     width: 100%;
//     height:20%;
//     margin:0px;


// `
// export const PriceTitle=styled.h2`

//     align-items: center;

//     display:flex;
//     margin:1%;
//     padding:2%;

//     color: rgb(51, 51, 51);
//     font-style: normal;
//     font-weight: 600;
//     font-size: 18px;
//     line-height: 24px;
 



// `
// export const PriceDetails=styled.p`
//     align-items: center;
//     display:flex;
//     margin:1%;
//     padding:2%;

//     color: rgb(102, 102, 102);
//     font-style: normal;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 20px;

    

// `
// export const Button=styled.button`
//     background-color: #08313A;
//     color:white;
//     border-radius: 3px;
//     border:none;
//     margin:10px 0px 0px 0px;
//     padding: 10px 0px 10px 0px;
//     font-size: 14px;
//     width:100%;

// `

import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";


export const SubtotalContainer = styled.div`
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    // align-content: start;
    padding: 0px;
    max-width: 400px;
    max-height:300px;
    
   
    
    
    @media screen and (max-width: 735px){
        max-width: 100%;
        max-height:auto;
        justify-content: center;
        align-content: flex-start;
        margin-left:0%;
        justify-content: center;
        align-content: center;
        margin:2% 2% 2% 2%;
    }
    
    @media screen and (max-width: 320px){
        max-width: 275px;
        justify-content: center;
        align-content: flex-start
    }
`
export const MainTotalContainer=styled.div`
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-center;
    padding: 0px;
    width: 100%;
    border-bottom:1px solid #789123;
    
`

export const PriceContainer = styled.div`
    background: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-center;
    text-align:center;
    padding: 0px;
    width: 100%;
    height:20%;
    margin:0px;
`
export const PriceTitle=styled.h2`
    align-items: center;
    display:flex;
    margin:1%;
    padding:2%;
    color: rgb(51, 51, 51);
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
 
`
export const PriceDetails=styled.p`
    align-items: center;
    display:flex;
    margin:1%;
    padding:2%;
    color: rgb(102, 102, 102);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    
`
export const Button=styled.button`
    background-color: #08313A;
    color:white;
    border-radius: 3px;
    border:none;
    margin:10px 0px 0px 0px;
    padding: 10px 0px 10px 0px;
    font-size: 14px;
    width:100%;
`