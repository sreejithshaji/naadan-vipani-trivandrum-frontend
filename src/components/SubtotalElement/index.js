
import React, {useContext, useDeferredValue} from 'react'
import { SubtotalContainer,MainTotalContainer,PriceContainer,PriceTitle,PriceDetails,Button} from './SubtotalElement'
import { useHistory } from "react-router-dom";
import { MdDeliveryDining } from 'react-icons/md';

import {ContextConsumer} from '../../utils/Context'

const SubtotalElement = ({data}) => {
    
    // const contextValues = useContext(ContextConsumer);

    let history = useHistory();  
    const abc = () => {
        // if( contextValues.user_address[0] ){
            // console.log("user : " , contextValues.user_address[0].full_name )

        //     if(contextValues.user_address[0].full_name==="name")
        //     {
        //         history.push("/address");
        //     }
        // }
    //    console.log("go")
       history.push("/address");
    }


    // abc();

    var totalProductPrice=0;
    var deliveryCharge=50;

    data?.forEach(item =>{
        // console.log(item)
        totalProductPrice += item.price*item.quantity;
    })
    var totalPriceIncDelicery = totalProductPrice+deliveryCharge;

    // console.log('totalProductPrice : ', totalProductPrice );

    return (
        <SubtotalContainer>
            <MainTotalContainer>

                <PriceContainer>
                    <PriceTitle>Price Details</PriceTitle>
                </PriceContainer>

                <PriceContainer>
                    <PriceDetails>Product Charges:</PriceDetails>
                    <PriceDetails>₹{totalProductPrice}/-</PriceDetails>
                </PriceContainer>

                <PriceContainer>
                    <PriceDetails>Delivery Charges:</PriceDetails>
                    <PriceDetails>₹{deliveryCharge}/-</PriceDetails>
                </PriceContainer>

                <PriceContainer>
                    <PriceDetails>Discounts:</PriceDetails>
                    <PriceDetails>₹0/-</PriceDetails>
                </PriceContainer>



            </MainTotalContainer>

            <PriceContainer>
                    <PriceTitle>Order Totals:</PriceTitle>
                    <PriceTitle>₹{totalPriceIncDelicery}/-</PriceTitle>
                </PriceContainer>

            <PriceContainer>
                <Button onClick={abc}>Continue</Button>
            </PriceContainer>

        </SubtotalContainer>

    )
}

export default SubtotalElement;