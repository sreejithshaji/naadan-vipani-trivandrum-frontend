import React ,{useContext, useEffect} from 'react'
import { useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection'
import MobileNav from '../components/MobileNav'

import Products from '../components/Products'
import { productData } from '../components/Products/ProductsData'
import AddToCartlist from '../components/AddToCartElement'

import {ContextConsumer} from '../utils/Context'

const Home = () => {
    const contextValues = useContext(ContextConsumer);

    // const [run_,setRun_] = useEffect(false);
    

    const [runTest , setRuntest] = useState(false) ;

    const runFirst = async() =>{
        await contextValues.initUserAddress();
        setRuntest(true);
        // console.log("runTest : ", runTest)
    }
    
    useEffect( ()=>{
        
        runFirst()
        
        contextValues.InitCart()
        // runTest=true
        // console.log("run 1")

    },[])

    // console.log("userValues : " , contextValues.user_address)
    
    useEffect( ()=>{
        
        const runSecond = async() =>{
            await contextValues.initKitProducts();
        }
        
        if(runTest){
            // console.log("run 2")
            runSecond()   
        }
        
    },[ runTest ])


    // console.log("values index : " ,contextValues.userValues);
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }; 


    return (
        <div>
            <MobileNav isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <Products heading='Vegetables'/>        
            {/* <Products heading='Vegetables' data={productData} />         */}
            {/* <Products heading='Groceries' data={productData} />         */}
            <Footer />
            {/* <AddToCartlist data={productData}/> */}
        </div>
    )
}

export default Home
