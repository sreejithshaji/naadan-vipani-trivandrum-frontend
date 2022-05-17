import React, {useState} from 'react'

import styled from "styled-components";


import SubtotalElement from "../components/SubtotalElement/index"
import AddressElement from '../components/AddressElement';


import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import Navbar from '../components/Navbar'

const AddressCartWrapper = styled.div`
        // max-width: 100vh;
        margin:10% 0% 0% 0%;
        display: grid;
        grid-template-columns: 1fr;
        
        grid-gap: 0px;
        padding: 0 0px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
       

        @media screen and (max-width: 1000px){
            grid-template-columns: 1fr;
        }
        @media screen and (max-width: 768px){
            grid-template-columns: 1fr;
            padding: 0 0px ;
            justify-content: center;
        }
`


const Addresspage = ({toggle}) => {


    const [isOpen, setIsOpen] = useState(false);
    const AddToCart = () => {
        const toggle = () => {
            setIsOpen(!isOpen);
        }; 
    }


    return (
        <div>
            <MobileNav isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>

            <AddressCartWrapper>
   
            <AddressElement/> 

            </AddressCartWrapper>

            <Footer />
        
        </div>
    )
}

export default Addresspage;